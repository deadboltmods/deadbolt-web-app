A smaller update, this release focuses on balancing the Burst Pistol and improvements for level creators.

## Burst Pistol

### Balancing

New balance updates bring the Burst Pistol closer a fully-realised weapon, and make it more distinct from the Burst Rifle:

- Reduced recoil, from 6 > 1
- Reduced spread, from 2 > 1
- Increased frames (delay between shots), from 4 > 8

This gives the Burst Pistol the accuracy it needed to land multiple headshots in a single burst. The increased delay makes it feel more distinct from the Burst Rifle (which has a faster _4 frames_ between shots), and gives it more versatility: In a single burst, you can can line up a double headshot, or if you're quick enough, take out an enemy and a light all at once.

![](@/assets/images/screenshots/dcp/2.2.0/oBPistol.gif)

To use the Burst Pistol in your own custom levels, generate a <span class="color-purple">custom.json</span> with the [Level Config](https://deadbolt.codemuffin.com/config/customjson), or add it to the level with `oBPistol`. It's available in DECP, but because it used to crash the game, you'll need to enable `sidebar_showbadobjects=1` in <span class="color-purple">DECP.ini</span> to see it in the Weapons sidebar.

### Modding

Burst Pistol (oBPistol) is also now fully moddable. These new stats can be changed: `burst_count`, `cooldown`, `snd_use1`, `snd_use1_pitch`. Cooldown controls the pause between shots the _player_ can make (this is usually handled by `frames` with non-burst weapons).

These stats are already moddable for all weapons: `dmg`, `frames`, `hs_multi`, `pierce`, `spread`, `recoil`, `alert_range`, `imp_amount`, `light`, `casing`, `laser_sight`. The stat `imp_amount` is especially fun to play around with, as it controls knockback.

For an overview of all weapon stats and their vanilla values, see the [Deadbolt Master Data spreadsheet](https://docs.google.com/spreadsheets/d/1qRyF3laHK2bKYyI552aA5PElzib8ak1FfLNxDId9Lzg/edit#gid=482879943).

![](@/assets/images/screenshots/dcp/2.2.0/sBPistolPickup-large.png)

## New Object Properties

### oSafe1

Pin count can now be set with var1. The default is 20. The minimum is 1 (if 0, it defaults back to 20 to prevent breaking existing maps).

Safes can also now be unlocked from the start with var2. The default is `0` (not unlocked), use `1` for unlocked. Unlocked safes are visual only and **cannot** be used as objectives.

![](@/assets/images/screenshots/dcp/2.2.0/oSafe1-pincount.gif)

### oWater

You can now set the colour and height of `oWater`, with var1 and var2.

The height starts from the bottom level boundary. Default is 96, which is the sprite height for `oWater` in DECP. The width is always the full level width, and you only need one instance to have an effect.

There are 11 colours to choose from. They're in the same order as the latest oPartyLight colours (available in DECP since [3.2.0](/decp#MDRelease3)).

You can stack oWater blocks for very dark levels, or use full-height blocks for constant atmospheric light.

![](@/assets/images/screenshots/dcp/2.2.0/oWater-color.png)

### oCandleIdle2

This is a new object that uses an existing sprite, `oCandleIdle2` has the sprite of the taller candle who is usually twinned with the sniper candle.


## Fixes

- Fixed a crash caused by dying after triggering existing a level with `oLevelEnd`
- Fixed Charon selling .32 Revolver instead of 9mm Pistol
- Fixed _Climb Ladder_ having a red '
- Fixed laser sight being orange on headshot hovers (the other new red variants have been kept)

##
![](@/assets/images/screenshots/dcp/2.2.0/sCandleIdle2-large.png)
