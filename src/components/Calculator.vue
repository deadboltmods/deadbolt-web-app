<template>
	<div>

		<div class="row row--center-cols">
			<!-- Calculator -->
			<div class="column" :class="( showCalculatorDebug ? 'col-2-3' : 'col-auto' )">
				<div class="calculator panel">
					<div class="calc-row">
						<label>Level</label>
						<select v-model="userLevelIndex">
							<template v-for="( levelData, levelIndex ) in allLevelStats">
								<option :key="levelIndex" :value="levelIndex">
									[{{ levelData.partimeMMSS }}] {{ levelData.chapter }}-{{ levelData.level }}: {{ levelData.name }}
								</option>
							</template>
						</select>
					</div>

					<div class="calc-row">
						<label>Time (mm:ss)</label>
						<input type="number" placeholder="m" min="0" v-model.number="userTimeMin" v-on:keyup.down="maybeUpdateSecs()">
						<span class="time-sep">:</span>
						<input type="number" placeholder="s" max="59" min="0" v-model.number="userTimeSec" v-on:keyup.up="maybeUpdateMins()">
						<div class="autofill-time">
							<button tabindex="-1" class="autofill-time__btn little-btn" @click="autofillTime()">FILL WITH PAR</button>
						</div>
					</div>

					<div class="calc-row">
						<label>Accuracy %</label>
						<input type="number" min="0" max="100" v-model.number="userAccuracy">
						<div class="plus-minus">
							<button tabindex="-1" class="little-btn plus-minus__btn plus-minus__btn--plus" @click="userAccuracy = increaseUntilMax( userAccuracy, 10, 100 )">+10</button>
							<button tabindex="-1" class="little-btn plus-minus__btn plus-minus__btn--minus" @click="userAccuracy = reduceUntilMin( userAccuracy, -10, 0 )">-10</button>
						</div>
					</div>

					<div class="calc-row">
						<label>Headshot %</label>
						<input type="number" min="0" max="100" v-model.number="userHeadshots">
						<div class="plus-minus">
							<button tabindex="-1" class="little-btn plus-minus__btn plus-minus__btn--plus" @click="userHeadshots = increaseUntilMax( userHeadshots, 10, 100 )">+10</button>
							<button tabindex="-1" class="little-btn plus-minus__btn plus-minus__btn--minus" @click="userHeadshots = reduceUntilMin( userHeadshots, -10, 0 )">-10</button>
						</div>
					</div>

					<div class="calc-row calc-row--results">
						<label>Stars</label>
						<div class="results-wrap">
							<div class="stars">
								<!-- Filled Stars (red, or gold if 5-star) -->
								<span v-for="starNumber in getStarsCount()" :class="( getStarsCount() === 5 ) ? 'star--gold' : 'star--1'" class="star" :key="'starNumber' + starNumber">
									<inline-svg :src="require('@/assets/svg/material-icons/mi-star-rate.svg')"/>
								</span>

								<!-- Empty stars -->
								<span v-for="emptyStarNumber in getEmptyStarsCount()" class="star star--0" :key="'emptyStarNumber' + emptyStarNumber">
									<inline-svg :src="require('@/assets/svg/material-icons/mi-star-rate.svg')"/>
								</span>
							</div>

							<div class="results-wrap__reset-btn">
								<button type="reset" class="calc-btn calc-btn--reset" @click="resetCalc()">RESET</button>
							</div>
						</div>
					</div>
				</div><!--/.calculator-->
			</div>

			<!-- Demo Buttons -->
			<div class="column col-1-3" v-if="showCalculatorDebug">
				<div class="notes notes--demos panel">
					<div class="note-heading">
						Quick Tests
					</div>
					<div class="note-row"><button class="little-btn" @click="setDemo1()">Decimals</button></div>
					<div class="note-row"><button class="little-btn" @click="setDemo2()">Max Values</button></div>
					<div class="note-row"><button class="little-btn" @click="setDemo3()">shooting% = 150</button></div>
					<div class="note-row"><button class="little-btn" @click="setDemo4()">shooting% = 200</button></div>
				</div>
			</div>
		</div><!--/.row-->

		<!-- Notes -->
		<div class="row">
			<!-- Notes: Time -->
			<div class="column col-1-3">
				<div class="notes panel">
					<div class="note-heading">
						Time
					</div>
					<div class="note-row">
						<div class="note-row__label">Yours</div>
						<div class="note-row__value">{{ getCurrentTimeInSec() }} sec</div>
					</div>
					<div class="note-row">
						<div class="note-row__label">Par</div>
						<div class="note-row__value">{{ getParTimeInSec() }} sec</div>
					</div>
					<div class="note-row">
						<div class="note-row__label">Diff</div>
						<div class="note-row__value">
							<span :class="( getTimeDiff() <= 0 ) ? 'color-g' : 'color-r'" v-if="getCurrentTimeInSec() > 0">
								{{ getTimeDiff() }} sec
							</span>
							<span v-else class="color-dk">?</span>
						</div>
					</div>
					<div class="note-row">
						<div class="note-row__label">% <span class="color-dk">(par/yours)</span></div>
						<div class="note-row__value">
							<span v-if="getCurrentTimeInSec() > 0">
								{{ roundDecimals( getTimePercent(), 5, true ) }} %
							</span>
							<span v-else class="color-dk">?</span>
						</div>
					</div>
					<div class="note-row">
						<div class="note-row__label">Score</div>
						<div class="note-row__value">{{ roundDecimals( calculateTimeScore().score, 5, true ) }}</div>
					</div>
					<div class="note-row note-row--warning" v-if="(getTimeDiff() < 0) && getCurrentTimeInSec() !== 0">
						Note: Beating the par time won't increase your stars any further. The time score maxes out at 1.
					</div>
				</div>
			</div>

			<!-- Notes: Shooting -->
			<div class="column col-1-3">
				<div class="notes panel">
					<div class="note-heading">
						Shooting
					</div>
					<div class="note-row">
						<div class="note-row__label">Accuracy %</div>
						<div class="note-row__value">{{ userAccuracy }} % </div>
					</div>
					<div class="note-row">
						<div class="note-row__label">Headshots %</div>
						<div class="note-row__value">{{ userHeadshots }} % </div>
					</div>
					<div class="note-row">
						<div class="note-row__label">Total</div>
						<div class="note-row__value">{{ userAccuracy + userHeadshots }}</div>
					</div>
					<div class="note-row">
						<div class="note-row__label">% <span class="color-dk">({{ userAccuracy }} + {{ userHeadshots }})</span></div>
						<div class="note-row__value">{{ getShootingPercent() }} % </div>
					</div>
					<div class="note-row">
						<div class="note-row__label">Score</div>
						<div class="note-row__value">{{ roundDecimals( calculateShootingScore().score, 5, true ) }}</div>
					</div>
					<div class="note-row note-row--warning" v-if="getShootingPercent() > 150">
						Note: Shooting score has a max of 1.5 (ie. 150% is the maximum counted total of accuracy% plus headshots%).
					</div>
				</div>
			</div>

			<!-- Notes: Final Score -->
			<div class="column col-1-3">
				<div class="notes panel">
					<div class="note-heading">
						Final
					</div>
					<div class="note-row">
						<div class="note-row__label">Base</div>
						<div class="note-row__value">{{ roundDecimals( calculateFinalScore().finalScoreBase, 5, true ) }}</div>
					</div>

					<div class="note-row">
						<div class="note-row__label">Multi <span class="color-dk">(* 5)</span></div>
						<div class="note-row__value">{{ roundDecimals( calculateFinalScore().finalScoreMulti, 5, true ) }}</div>
					</div>

					<div class="note-row">
						<div class="note-row__label">Multi Rounded</div>
						<div class="note-row__value">{{ roundDecimals( calculateFinalScore().finalScoreRound, 10, true ) }}</div>
					</div>

					<div class="note-row">
						<div class="note-row__label">Clamp <span class="color-dk">&gt;=1, &lt;=5</span></div>
						<div class="note-row__value">{{ roundDecimals( calculateFinalScore().finalScoreClamp, 10, true ) }}</div>
					</div>

					<div class="note-row">
						<div class="note-row__label">Stars</div>
						<div class="note-row__value color-y">{{ getStarsCount() }}</div>
					</div>
				</div>
			</div>

			<!-- Notes: Debug -->
			<div class="column col-1-3" v-if="showCalculatorDebug">
				<div class="notes panel">
					<div class="note-heading">
						DEBUG
					</div>
					<div class="note-row">
						<div class="note-row__label">userLevelIndex</div>
						<div class="note-row__value">{{ userLevelIndex }}</div>
					</div>
					<div class="note-row">
						<div class="note-row__label">userTimeMin</div>
						<div class="note-row__value">{{ userTimeMin }}</div>
					</div>
					<div class="note-row">
						<div class="note-row__label">userTimeSec</div>
						<div class="note-row__value">{{ userTimeSec }}</div>
					</div>
					<div class="note-row">
						<div class="note-row__label">userAccuracy</div>
						<div class="note-row__value">{{ userAccuracy }}</div>
					</div>
					<div class="note-row">
						<div class="note-row__label">userHeadshots</div>
						<div class="note-row__value">{{ userHeadshots }}</div>
					</div>
				</div>
			</div>
		</div><!--/.row-->

	</div>
</template>


<script>
	import allLevelStats from '@/data/allLevelStats'
	import InlineSvg from 'vue-inline-svg'

	export default {
		name: 'Calculator',
		components: {
			'inline-svg': InlineSvg,
		},
		data() {
			return {
				// External
				allLevelStats,

				// User data (two-way binding)
				userLevelIndex: 0,
				userTimeMin: 0,
				userTimeSec: 0,
				userAccuracy: 0,
				userHeadshots: 0,
			}
		},
		computed: {
			showCalculatorDebug()
			{
				return this.$store.getters.getSetting( 'showCalculatorDebug' );
			},
		},
		methods: {

			// User Interaction
			// ------------------------------------------------------------------------

			resetCalc()
			{
				// this.userLevelIndex = 0;
				this.userTimeMin    = 0;
				this.userTimeSec    = 0;
				this.userAccuracy   = 0;
				this.userHeadshots  = 0;
			},

			setDemo1()
			{
				// Decimals
				this.userLevelIndex = 0;
				this.userTimeMin    = 2;
				this.userTimeSec    = 39;
				this.userAccuracy   = 10;
				this.userHeadshots  = 0;
			},

			setDemo2()
			{
				// Max values
				this.userLevelIndex = 0;
				this.userTimeMin    = 1;
				this.userTimeSec    = 33;
				this.userAccuracy   = 100;
				this.userHeadshots  = 51;
			},

			setDemo3()
			{
				this.userAccuracy   = 100;
				this.userHeadshots  = 50;
			},

			setDemo4()
			{
				this.userAccuracy   = 100;
				this.userHeadshots  = 100;
			},


			/**
			 * If user pressed DOWN while the mins input was focused.
			 * Maybe carry this over to secs
			 *
			 * @todo: Probably remove this
			 *
			 * @return  {void}
			 */
			maybeUpdateSecs()
			{
				// console.log('KEY_EVENT_1', this.userTimeMin);

				if ( this.userTimeMin === 0 && this.userTimeSec === 0 )
				{
					// this.userTimeSec = 59; // works well but needs UBER PLANNING to think it through, probably overkill
				}
			},

			/**
			 * User pressed UP while the secs input was focused.
			 * Maybe carry this over to mins
			 *
			 * @todo: Probably remove this
			 *
			 * @return  {void}
			 */
			maybeUpdateMins()
			{
				// console.log('KEY_EVENT_2', this.userTimeSec);

				if ( this.userTimeSec === 59 )
				{
					// this.userTimeMin++; terrible! Can only work if we check for secs = 60, but that's not a good idea
				}
			},



			// Math and Stuff
			// ------------------------------------------------------------------------

			// Warning: `addTrailingDots` returns a string
			roundDecimals( val, decimalPlaces = 10, addTrailingDots = false )
			{
				// 1 decimal place  = * 10   -- 10 to the power of 1
				// 2 decimal places = * 100  -- 10 to the power of 2
				// 3 decimal places = * 1000 -- 10 to the power of 3 (`tenPowered` being 1000 in this case)

				const tenPowered = ( Math.pow( 10, decimalPlaces ) ); // "10 to the power of x", x being the exponent)

				// via: https://stackoverflow.com/a/41716722 (with edits to allow any number of decimal places)
				let rounded = Math.round( ( val + Number.EPSILON ) * tenPowered ) / tenPowered;

				if ( addTrailingDots && ( val !== rounded ) )
				{
					rounded += '...';
				}

				return rounded;
			},

			/**
			 * Increase a value, without going over the maximum
			 *
			 * @param   {int}  val     Value to increase
			 * @param   {int}  amount  Amount to increase by
			 * @param   {int}  max     Maximum allowed value
			 *
			 * @return  {int}          Increased value. If the value would have gone over the max, returns the max
			 */
			increaseUntilMax( val, amount, max )
			{
				let newVal = val + amount;

				if ( newVal > max )
				{
					newVal = max;
				}

				return newVal;
			},

			/**
			 * Reduce a value, without going below 0
			 *
			 * @param   {int}  val     Value to reduce
			 * @param   {int}  amount  Amount to reduce
			 * @param   {int}  min     Minimum allowed value
			 *
			 * @return  {int}          Reduced value. If the value would have gone below zero, returns zero
			 */
			reduceUntilMin( val, amount, min )
			{
				let newVal = val + amount;

				if ( newVal < min )
				{
					newVal = min;
				}

				return newVal;
			},

			// Click button to auto fill time
			autofillTime()
			{
				const MMSSObj = this.convertSecToMSObj( this.getCurrentLevelData().partimeSec );

				this.userTimeMin = MMSSObj.minutes;
				this.userTimeSec = MMSSObj.seconds;
			},


			// Get Data
			// ------------------------------------------------------------------------

			getCurrentLevelData()
			{
				return this.allLevelStats[this.userLevelIndex];
			},

			getShootingPercent()
			{
				return parseInt( this.userAccuracy ) + parseInt( this.userHeadshots );
			},

			getCurrentTimeInSec()
			{
				let timeTotalSec = 0;

				if ( this.userTimeMin> 0 )
				{
					timeTotalSec = ( this.userTimeMin * 60 ) + this.userTimeSec;
				}
				else
				{
					timeTotalSec = this.userTimeSec;
				}

				return timeTotalSec;
			},

			getParTimeInSec()
			{
				return this.getCurrentLevelData().partimeSec;
			},

			getTimePercent()
			{
				return this.calculateTimeScore().timeScoreBase;
			},

			getTimeDiff()
			{
				return this.getCurrentTimeInSec() - this.getParTimeInSec();
			},

			getStarsCount()
			{
				return this.calculateFinalScore().score;
			},

			getEmptyStarsCount()
			{
				return 5 - this.calculateFinalScore().score;
			},


			// Calculations: Conversion
			// ------------------------------------------------------------------------

			// Converts seconds to an MM:SS object, with 2 keys: minutes + seconds
			convertSecToMSObj( totalSec )
			{
				totalSec = parseInt( totalSec );

				// Example: 02:33  (153s)
				// 153 / 60 = 2.55 (2mins when rounded down)
				// 153 % 60 = 33   (33sec)

				const minutes = Math.floor( totalSec / 60 ); // eg. 153sec / 60 = 2.55, floor gives us 2min
				const seconds = totalSec % 60; // eg. 153sec % 60 = 33sec

				return { minutes, seconds, totalSec }
			},


			// Calculations: Main Score
			// ------------------------------------------------------------------------

			calculateShootingScore()
			{
				// Shooting Score
				const accuracyP  = this.userAccuracy / 100;
				const headshotsP = this.userHeadshots / 100;
				const shootingScoreBase  = ( accuracyP + headshotsP );
				const shootingScoreFinal = Math.min( 1.5, shootingScoreBase ); // cannot exceed 1.5
				const score = shootingScoreFinal;

				const shootingScoreData = {
					accuracyP,
					headshotsP,
					shootingScoreBase,
					shootingScoreFinal,
					score,
				};

				return shootingScoreData;
			},

			calculateTimeScore()
			{
				const parTime      = this.getParTimeInSec();
				const timeTotalSec = this.getCurrentTimeInSec();

				const timeScoreBase = parTime / timeTotalSec;
				const timeScoreMin  = Math.min( 1, timeScoreBase );
				const timeScoreSqr  = Math.sqrt( timeScoreMin );
				const score         = timeScoreSqr;

				const timeScoreData = {
					timeScoreBase,
					timeScoreMin,
					timeScoreSqr,
					score,
				};

				return timeScoreData;
			},


			calculateFinalScore()
			{
				const shootingScoreFinal = this.calculateShootingScore().score;
				const timeScoreSqr       = this.calculateTimeScore().score;

				const finalScoreBase  = shootingScoreFinal * timeScoreSqr;
				const finalScoreMulti = finalScoreBase * 5;
				const finalScoreRound = Math.round( finalScoreMulti );
				const finalScoreClamp = this.clamp( 1, finalScoreRound, 5 );
				const score           = finalScoreClamp;

				const finalScoreData = {
					finalScoreBase,
					finalScoreMulti,
					finalScoreRound,
					finalScoreClamp,
					score,
				};

				return finalScoreData;
			},


			// Utils
			// ============================================================================

			clamp( min, val, max )
			{
				return Math.min( Math.max( val, min ), max );
			},

		},
	}
</script>


<style lang="scss" scoped>
	@import '@/assets/scss/_variables.scss';


	// Columns
	// ============================================================================

	$gutters: 10px;

	.row {
		display: flex;
		justify-content: space-between;
		margin-left: -$gutters;
		width: calc(100% + #{$gutters}); // adjust for gutters

		&--center-cols {
			justify-content: center;
		}

		+ .row {
			margin-top: 20px;
		}
	}

	.column {
		height: 100%;
		margin-left: $gutters / 2;
		margin-right: $gutters / 2;
		width: 100%;

		&.calculator-col {
			margin: 0 auto;
		}
	}

	.col {
		height: 100%;

		&-1-3 {
			max-width: 32%;
		}

		&-2-3 {
			max-width: 67%;
		}

		&-auto {
			width: auto;
		}
	}


	// Shared
	// ============================================================================

	.panel {
		border: 1px solid #1f1f1f;
		padding: 20px;
		background-color: rgba($color-bl, 0.3);
		// background-color: rgba($color-w, 0.05);
	}


	// Calculator
	// ============================================================================

	.calculator {
		background-color: rgba($color-bl, 0.2);
		border: 1px solid rgba($color-purple, 0.3);

		+ .notes {
			margin-top: 20px;
		}
	}

	.calc-row {
		display: flex;
		margin-bottom: 10px;

		&:last-child {
			margin-bottom: 0;
		}

		label {
			flex-shrink: 0;
			padding: 5px 0;
			width: 100px;
		}

		input,
		select {
			background-color: $color-bl;
			color: white;
			border: 1px solid rgba($color-w, 0.1);
			padding: 5px;
			font-family: $font-mono-numbers;
		}

		select {
			font-family: $font-mono-numbers;
			font-size: 1.1rem;
		}

		input[type="number"] {
			width: 60px;
		}

		.submit,
		.clear {
			padding: 10px 15px;
		}
	}

	.time-sep {
		display: inline-block;
		margin: 0 3px 0 5px;;
		line-height: 1.5;
	}

	.calc-btn {
		background-color: $color-bl;
		border: 1px solid rgba($color-bl, 0.1);
		color: white;
		cursor: pointer;
		padding: 5px;

		&--reset {
			background-color: darken($color-r, 50);

			&:hover {
				background-color: darken($color-r, 30);
			}
		}
	}

	.results-wrap {
		align-items: center;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}


	// Stars
	// ============================================================================

	.stars {
		.star {
			svg {
				fill: currentColor;
				width: 30px;
				height: 30px;
			}

			&--0 {
				color: #7B6C59;
			}

			&--1 {
				color: #892525;
			}

			&--gold {
				color: #EEE873;
			}
		}
	}


	// Increment Buttons
	// ============================================================================

	.little-btn {
		background-color: rgba($color-w, 0.05);
		border: 0;
		color: $color-w;
		cursor: pointer;
		font-size: 11px;
		height: 28px;
		opacity: 0.5;
		padding: 5px 10px;
		text-align: center;

		&:hover {
			opacity: 0.8;
		}
	}

	.autofill-time {
		align-items: center;
		display: flex;
		justify-content: center;
		line-height: 1;
		margin-left: 10px;

		&__btn {
			// border-radius: 5px;
		}
	}

	.plus-minus {
		align-items: center;
		display: flex;
		justify-content: center;
		line-height: 1;
		margin-left: 12px;

		&__btn {
			border-radius: 100%;
			width: 28px;
			padding: 5px;
			margin-right: 5px;

			&--plus {
				color: $color-g;
			}

			&--minus {
				color: $color-r;
			}

			&:hover {
				cursor: pointer;
				opacity: 0.8;
			}
		}
	}


	// Notes
	// ============================================================================

	.notes {
		// border: 1px solid #131313;
		// padding: 10px;
		// display: inline-block;

		+ .notes {
			margin-top: 10px;
		}

		hr {
			border-top: 1px solid rgba($color-w, 0.1);
			border-right: 0;
			border-bottom: 0;
			border-left: 0;
		}

		&--demos {
			.note-heading {
				margin-bottom: 10px;
			}

			.note-row {
				margin-left: -2px;
				+ .note-row {
					margin-top: 10px;
				}
			}
		}
	}

	.note-row {
		display: flex;

		&--warning {
			color: darken($color-r, 30);
			font-size: 16px;
			margin-top: 10px;
		}
	}

	.note-row__label {
		width: 120px;
		opacity: 0.7;
	}

	.note-row__value {
		// opacity: 0.6;
	}

	.note-heading {
		font-size: 22px;
		margin-bottom: 5px;
	}

</style>
