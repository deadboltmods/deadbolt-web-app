The biggest update yet, v2.3.0 brings more new weapons, weapon mods,

## Load Custom

Mark favourites on the Load Custom screen with `MMB`, and press `Home` to scroll to the first local level. These controls now appear in the corner of the screen.

The level description keeps its on/off state when returning to the Load Custom screen, and its helptext in the bottom corner is now colored.

Custom local level filesnames are much longer.

While inside a custom local level, press `Tab` to spawn any object on your current position (like in DECP). Note that this exits fullscreen so the input box doesn't get hidden behind the game window, so for best results play in windowed mode.

## New Weapons

_Please remember to update your weapons.json file with each new version of DCP._

### Sickle

The Sickle is now buyable from Charon. It has new smash sprites, courtesy once more of our good friend [Nintee](https://steamcommunity.com/id/Nintee/myworkshopfiles/?appid=394970).

It's also been heavily buffed, and has special features that give it its own unique risk/reward playstyle.

**Buffs:**

- Massively increased thrown damage. Can now 1-shot
- Doubled swing speed (60 frames > 30)
- Buffed melee damage slightly, now higher than a hammer (90 vs. 80)
- Increased thrown velocity

**Special features:**

- Can be thrown infinitely
- Doesn't get blocked by dead bodies when thrown
- Bounces off of enemies: Hit them at the right angle and the sickle will bounce back to you
- Can be caught mid-air: Throw, bounce, and catch to chain kills

It's also a primary, playing like a hybrid of the Scythe and Compound Crossbow.

### Tac. Knife + Pistol

The latest weapon to be ported from the console version, the Tac. Knife + Pistol is now buyable from Charon. Use it in levels with the object `oTKPistol`.

The bullet damage is on par the 9mm, with improved recoil. The tactical knife is slightly more powerful than the regular knife.

Like the Compound Crossbow, dropping it when it's out of ammo won't disable it, as its knife is still usable.

### Burst Pistol

The Burst Pistol is now available to buy from Charon. It has a new bought weapon sprite by [Nintee](https://steamcommunity.com/id/Nintee/myworkshopfiles/?appid=394970), and will hang from your rack once purchased.

It also fires slightly faster now, and has a higher headshot multipler.

## Cursor Mods

Two new mods for your cursor:

- Change the cursor color to match what's in your line of sight
- Show your current weapon recoil

## Weapon Mods

This release introduces weapon mods. Configure then in the `weapons` section of <span class="color-purple">globalconfig.json</span>.

### Colored Laser Sight

Change your laser sight color, depending on what's in your line of sight.

The laser sight has also been fixed, and properly aims at the cursor. It's also longer.

### Bullets ignore body parts

This mod makes bullets pass through body parts. It lets you shoot mines trapped under dead Technicians.

### Melee Input Buffering

Melee input buffering allows you to queue your inputs. If you press the attack button while already attacking, and within the last 30 frames (0.5s) of the weapon's cooldown, you'll attack at the next opportunity.

This mainly affects the Sickle as its animation lasts only 30 frames. The best way to see input buffering in action is to try swinging the Sickle with input buffering on, then off. With it disabled, you need to precisely time successive swings to attack continuously. When it's enabled, your don't need to be precise with your timing.

Melee weapons other than Knife and Sickle have a 60 frame (1s) cooldown. This applies to Hammer, Sledgehammer, Scythe, and regular punches. For these weapons, if you press the attack button during the _second half_ of their attack animation, you'll attack again when the cooldown is over.

This is an optional feature and can be disabled with the option `weapon_melee_input_buffer`.

### Scythe Bullet Deflect

A cut mechanic, this mod lets you deflect bullets with the Scythe. Just aim and press fire.

The cooldown is 30 frames, or 0.5 seconds, and the window to deflect is very narrow. You'll need to learn enemy shoot timings to become skilled with this ability.

You can enable a sound cue to play when it's ready again in <span class="color-purple">globalconfig.json</span>, with the option `weapon_scythe_deflect_ready_sound`. For visual feedback, you can also enable visible hitmasks in custom local levels by enabling debug mode, then pressing `numpad1`.

### Headhunter Bullet Refund

This adds another cut mechanic where scoring a headshot with the Headhunter creates a `oEfBulletRefund` object, which, when touched, refunds 1 Headhunter bullet.

The fire created by `oEfBulletRefund` has also been changed to match the Headhunter's colors, and SFX has been added when a bullet is refunded.

Dropping the Headhunter while a refind fire is active won't disable picking up the weapon again, like with the Compound Crossbow and Tac. Knife.

To balance this otherwise OP mechanic, while this mod is enabled the Headhunter is limited to just 3 bullets.

_Note: The object `oEfBulletRefund` actually works in vanilla, and has this same effect._

## Weapons Misc

Weapon stats can be viewed from your car trunk now, as well as Charon's shop.

Last Breath has been added as a valid object, `oLastB`. It's only visual at the moment, its console slow motion effect may be added in a future release.

Tactical SMG's laser sight length has been doubled. It's most noticable on the docks.

The structure of the weapons config file <span class="color-purple">weapons.json</span> has been revised. You can now use a JSON export of the weapons spreadsheet directly, without needing to manually edit it before using it in the game.

Enemies and the player can now be placed upside down, and their weapon sprites and melee hit masks will work correctly.

You can now choose only a primary, or secondary, weapon from your trunk. Or even none at all.

## Mission Select

Press `A` & `D` to switch tabs. This was possible in vanilla by pressing up twice, now it's always available.

New options let you skip the fadeout and animated polaroids, making levels load almost immediately.

The _Quit Mission_ menu now includes an option to return to the mission select screen.

Choosing a mission now checks for "mouse pressed" instead of "mouse released" to select a level. This makes load levels a fraction faster.

## Hide Everything

Loads of options have been added to hide HUD and cursor elements, from objective text to the cursor itself.

## Misc Features

Placing the Reaper upside down now works as expected, with his aiming and melee hit masks working correctly. Upside enemies now aim and melee hit the player correctly too.

Quick restart hotkey: `F4`. This is very useful when making local maps, as they are fully reloaded on restart.

The custom cutscene object available in the editor has more cutscene portraits, including more cut dev art and custom sprites by Nintee and Classic_Cheese. Voice SFX for Cerberus have also been added.

Rolling is faster, and you can roll continuously by holding `Ctrl`.

A new visibiilty indicator shows if you're in the dark. Previously this was only available in local maps with debug mode on. Enable with `indicator_visible`. Note: There's a slight delay due to how often the game checks your visibility.

Lots of new fadeout skips have been added. The finish level skip, `skip_finishlevel_fadeout`, affects a ton of things, including the fadeout before the mission select.

## Custom Level Features

There are a loads of new color options for wallpaper, water, and party lights --- 52 in total!

There are some new options for objects affected by color too:

- `oWallpaper` + `oWallpaperFront` supports blend color (var2)
- `oWater` supports height (var1) and color (var2)
- `oPartyLight` now supports alpha (var2, range is between 0-1, default is 0.6), and has a ton of new colors

See the changelog for DECP 4.0.0 for full details.

## Minor

- Added debug option to invert player yscale
- Added text hover color to Load Custom
- Renamed `oNpcCharon` to `oEnemyCharon`
- Renamed "skipto" options to "autoload"
- SR easter egg options expanded
- CC easter egg added

## Fixes

- Fixed a crash on Load Custom if no connection to Steam could be made, or no maps were subscribed to
- Fixed Gamepad "back" menu option taking you to PC controls
- Fixed Gamepad preventing mouse interactions on multiple screens: Pause, main menu, load custom, load game, new game, mission select
- Fixed Gamepad controlling mouse position while the game was not in focus
- Fixed Charon being 1px above the docks (this could mess up custom Charon sprites)
- Fixed Charon custom sprites not working for `sCharonIdleGlow`
- Fixed issue with `oCableBox` causing a "missing child" crash when interacted with
- Fixed Load Custom descriptions showing for local levels
- Fixed "a required json is missing" warning notice to say "or corrupt", and added a notice if JSON parse fails
- Fixed missing walk sprites for new weapons not defaulting to unarmed
- Fixed thrown melee weapons staying in the player's inventory with 0 ammo
- Fixed reaper sit sprite used for apartment chair when custom player sprite should be used (eg. Ibzan Mode mod)
- Fixed previous mission name showing on pause screen for apartment
- Fixed Sickle missing crouch sprites
- Fixed missing Charon buy icon for Sickle
- Fixed Burst Pistol only firing two shots in a burst, instead of the full 3
- Fixed an issue causing a missing sprite if only a secondary weapon was selected from the trunk
- Fixed laser sight not aiming at the cursor
- Fixed custom local debug invincibility not working against enemy melee
- Fixed enemy debug sight range indicators not accounting for dark
- Fixed enemy debug shoot range indicators not accounting for dark or inverted yscale
- Fixed trunk tightspacing option for local custom levels, so every weapon is properly visible

### Upside down fixes

These didn't work if the player or an enemy was upside down. Now they do.

- Enemy melee hit masks (oZomb4, oDog1, oOni1, oSkele1, oVamp2)
- Enemy aiming (every enemy except Incubus)
- Reaper arm sprites when aiming
- Reaper hit masks
- Reaper thrown weapons used wrong starting ypos
- Reaper Gamepad aiming
- Reaper Laser sight

## Known Issues

- The CRT effect on the pause menu is missing
- Selecting only a secondary from the trunk sometimes prevents the trunk from being interacted with again
- Mines from the trunk can be placed infinitely (exploit this while it lasts lol)
- (vanilla) Holding aim and moving left/right with a weapon that can't aim makes you continue to walk
