## 2.0.0

### Custom sprites

Replace the sprites of every enemy, and even Charon!

![](@/assets/images/screenshots/1.7/charon-resprite.png)

Custom sprites have their own folder named Sprites, in your LocalAppData folder. The ZIP comes with a full collection of all replaceable sprites.

You can also **load custom sprites from the workshop**, like you can with campaigns and dialogue now.

The debug log has extensive reporting on which sprites have been replaced. Find out how to enable logging in the guides.

![](@/assets/images/screenshots/1.7/debuglog-sprites-crop.png)

_Note: Custom sprite origins are always set to the middle-bottom. Reaper sprite swap support is also planned_

### Charon

- Charon is now a playable character, thanks to Nintee
- Added oNpcCharon as a placeable enemy
- Added sprite replacement support to Charon (affects Docks and oNpcCharon)

### Controller

The globalconfig option (`controls_gamepad_menu`) now only enables controller options in the pause menu, and a new setting for Prefs.ini saves if the gamepad is on/off.

![](@/assets/images/screenshots/1.7/gamepad-settings.png)

### Crossbow

The first console weapon makes its official apearance! This version of the crossbow improves on the Switch version, as dropping it won't stop you picking it up again if the level still has arrows lying around.

![](@/assets/images/screenshots/1.7/cbow-ammo-handling.gif)

### Globalconfig

All options are renamed and re-grouped. No more long, clunky names.

A new skip option `skip_customlevel_fade` instantly loads custom levels, with no fadeout effect.

Workshop ID paths now accepts numbers, instead of just strings, making them less prone to accidental errors.

Added 2 new enemy AI indicators: `ai_range_sight` (orange rectangle) + `ai_range_shoot` (red triangle).

![](@/assets/images/screenshots/1.7/shoot-range-cones.gif)

<div class="md-image-caption">Indicators for shoot ranges. Custom characters are by TheMagistrate</div>

### Misc

Load Custom: Full page scroll is now bound to page up/down (_todo: show this in the UI_)

Minor fix: Timer had black text instead of white
