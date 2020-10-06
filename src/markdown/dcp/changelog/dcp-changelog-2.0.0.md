The biggest update yet, DCP v2.0.0 offers new weapons, enemy sprite replacements, controller remapping, new quickload options -- and perhaps most importantly, lets you play as Charon, courtesy of Nintee!

## Custom sprites

Replace the sprites of every enemy, and even Charon!

![](@/assets/images/screenshots/1.7/charon-resprite.png)

Custom sprites have their own folder named Sprites, in your LocalAppData folder.

The ZIP comes with a full collection of all replaceable sprites.

You can also **load custom sprites from the workshop**, like you can with campaigns and dialogue.

The debug log has extensive reporting on which sprites have been replaced. Find out how to enable logging in the [guides](/guides#debuglog).

![](@/assets/images/screenshots/1.7/debuglog-sprites-crop.png)

_Note: Custom sprite origins are always set to the middle-bottom. Reaper sprite swap support is also planned_

## Plyable Charon

Charon is now a playable character, thanks to Nintee who provided him with wonderful new running animations.

![](@/assets/images/screenshots/1.7/charon-run.gif)

Get your config from the [config.json generator](/config/customjson).

You can also now add him as an enemy object with `oNpcCharon`. He starts with a Severed Lich Arm and a ton of health.

Charon sprites can also be swapped out, with the new sprite replacement system. Replaced sprites affect both Docks charon and `oNpcCharon`.

Charon's shop has also received a hefty upgrade. The stats box no longer obscures the secondary weapons list, and stats are clearer and more useful.

![](@/assets/images/screenshots/1.7/oUpgrade-800.png)

## Controller

The globalconfig option (`controls_gamepad_menu`) now enables controller settings in the pause menu. This was part of the original code, but removed when controler support was dropped.

A new setting for _Prefs.ini_ saves if the gamepad is on/off.

A new <span class="color-purple">globalconfig.json</span> setting allows you to aim with the left stick, like on the Switch version.

![](@/assets/images/screenshots/1.7/gamepad-settings.png)

## Weapons

### Crossbow

The first of 2 weapons ported from the console release! This version of the crossbow improves on the Switch version, as dropping it won't stop you picking it up again if the level still has arrows lying around.

It can be added to levels with `oCbow`, and bought from Charon for **120 souls**.

Start with it in your custom levels with the [config.json generator](/config/customjson).

![](@/assets/images/screenshots/1.7/cbow-ammo-handling.gif)

### Landmine

The landmine is now available to purchase from Charon. It costs **80 souls**.

A critical bug preventing the placement of landmines has also been patched out.

### Burst Pistol

This weapon has been in DCP for a while. This update balances its ammo count, fixes its HUD ammo icon, and makes it a placeable object with `oBPistol`.

### Sickle

The sickle now has working animations and stats, and is a placeable weapon object with `oSickle`.

It also has a very special feature that no other melee wepaon has.

_Smash animations currently use hammer as a placeholder._

## Globalconfig

All options are renamed and re-grouped. No more long, clunky names.

Workshop ID paths now accepts numbers, instead of just strings, making them less prone to accidental errors.

Added 2 new enemy AI indicators: `ai_range_sight` (orange rectangle) + `ai_range_shoot` (red triangle).

![](@/assets/images/screenshots/1.7/shoot-range-cones.gif)

<div class="md-image-caption">Indicators for shoot ranges. Custom characters are by TheMagistrate</div>

## Skips

A new skip option `skip_customlevel_fade` instantly loads custom levels, with no fadeout effect.

Two new skip options have also been added:

- `skipto_customlevelsmenu` - Skip straight to the Custom Levels menu
- `skipto_firstlocallevel` - Autoload the **first** local custom level, if one is available

Renamed 2 existing skip options for more clarity:

- `skip_mainmenu` is now: `skipto_apartment` - Autoload the active save to immediately start at the apartment
- `skip_apartment` is now: `skipto_mission_select` - Same as above, but with the mission select menu open

The skip `skipto_mission_select` no longer requires `skipto_apartment` to be enabled.

## Misc

A new headshot line-of-sight indicator is available in the experimental options of <span class="color-purple">globalconfig.json</span>.

![](@/assets/images/screenshots/1.6/headshot-hover.gif)

Load Custom: Full page scroll is now bound to page up/down (_todo: show this in the UI_)

Added console weapon icons to `sUpgradeWeaponIcon`

If the **Levels** LocalAppData folder does not exist, it is created when the Load Custom menu is first opened.

## Fixes

- Fix: Weapon icon wasn't showing for buyable weapons with Charon
- Fix: Deleting a save file didn't work correctly
- Fix: Timer had black text instead of white
- Fix: Burst Pistol used regular pistol's ammo HUD icon
