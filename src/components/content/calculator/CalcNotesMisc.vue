<template>
	<div>

		<h3>Shooting% Calculation</h3>

		<p>The formula for accuracy% is: <code>( 1 - (missedShots / firedShots) )</code></p>

		<p>The formula for headshot% is: <code>( headshotsCount / firedShots )</code></p>

		<p>If you fired <code>0</code> shots, <code>firedShots</code> will be set to <code>1</code> in the calculations. This lets you get 100% accuracy on a melee-only run.</p>

		<p>The value of <code>missedShots</code> only increases when a bullet does not hit an enemy.</p>

		<p>The counter for missed shots is increased whenever a bullet, which was not fired by an enemey, doesn't hit an enemy. This includes bullets from shotgun traps, which (like the regular Sawn-Off Shotgun) fire 6 bullets. <span class="color-r">(@todo: Verify this)</span></p>

		<!---->

		<h3>Custom Maps</h3>

		<p>On custom maps, time is ignored (in the calculations it's always set to <code>1</code>). So getting 5 stars on a custom map only requires a total combined shooting % of <code>90</code> or above.</p>

	</div>
</template>
