<template>
	<div>

		<p>You are <span class="color-y">guaranteed 5 stars</span> if both:</p>

		<ul class="indent">
			<li>You time is faster or equal to the par time (see <a href="#calc-partimes">table below</a> for all par times),</li>
			<li>And your combined <span class="color-purple">shooting%</span> (accuracy% plus headshots%) totals <code>90%</code> or above.</li>
		</ul>

		<!---->

		<h3>Par Times</h3>

		<p>Getting a time that's <span class="color-g">faster</span> that the par time will <span class="color-r">not</span> increase your stars any more than if you'd hit the time exactly. Beating it by 1 second or 1 minute has the same effect.</p>

		<p>If you are <span class="color-r">slower</span> than the par time, you may still be able to achieve 5 stars by increasing your <span class="color-purple">shooting%</span> above <code>90%</code>. The exact values differ depending on your time, but the calculator can help you work them out.</p>

		<!---->

		<h3>Shooting</h3>

		<p>Accuracy and Headshots are added together. If you deduct a point from one and add it to the other, you'll get the same result.</p>

		<p>To elaborate, achieving the following scores always gives you a total of <code>90%</code>:</p>

		<ul class="indent">
			<li>accuracy% 90 + headshot% 0 = 90</li>
			<li>accuracy% 80 + headshot% 10 = 90</li>
			<li>accuracy% 70 + headshot% 20 = 90</li>
			<li><em>etc...</em></li>
		</ul>

		<!---->

		<h3>Hard Cap</h3>

		<p>The maximum combined total of accuracy% + headshots% is <code>150%</code> (eg. 100% accuracy and 50% headshots). Any amount past <code>150%</code> is ignored.</p>

		<p>This means there's a hard cap on the max time you can spend in a level, even if your <span class="color-purple">shooting%</span> is perfect. See the <span class="color-r">slowest times</span> in the <a href="#calc-partimes">Level Stats</a> table below for these times.</p>

	</div>
</template>

<style scoped>
	.indent {
		margin-left: 20px;
	}
</style>
