Another huge update, featuring more new weapons, cut mechanics, level colours and more.

## Weapons

_Please remember to update your weapons.json file with each new version of DCP._

### Sickle

The Sickle is now buyable from Charon. It has new smash sprites, courtesy once more of our good friend [Nintee](https://steamcommunity.com/id/Nintee/myworkshopfiles/?appid=394970).

It's also been upgraded with lots of special features:

- Massive thrown damage, can one shot
- Can be thrown infinitely
- Very fast swing speed
- Very fast throw speed
- Doesn't get blocked by dead bodies when thrown
- Bounces off of enemies: Hit them at the right angle and the sickle will bounce back to you
- Can be caught mid-air: Throw, bounce, and catch to chain kills

It's a primary and costs `120` souls. It's also way OP, so try it before it gets nerfed!

![](@/assets/images/screenshots/dcp/3.0.0/sickle-bounce-catch.gif)

### Tac. Knife + Pistol

The latest weapon to be ported from the console version, the Tac. Knife + Pistol is now buyable from Charon. Use it in levels with the object `oTKPistol`.

The bullet damage is on par the 9mm, with improved recoil. The tactical knife is slightly more powerful than the regular knife.

Like the Compound Crossbow, dropping it when it's out of ammo won't disable it, as its knife is still usable.

### Burst Pistol

The Burst Pistol is now available to buy from Charon. It has a new bought weapon sprite by [Nintee](https://steamcommunity.com/id/Nintee/myworkshopfiles/?appid=394970), and will hang from your rack once purchased.

It also fires slightly faster now, and has a higher headshot multipler.

##

![](@/assets/images/screenshots/dcp/3.0.0/rack.png)

## Weapon Mods

This release introduces weapon mods. Configure then in the `weapons` section of <span class="color-purple">globalconfig.json</span>.

### Laser Sight Colours

Changes the Tactical SMG's laser sight colour, depending on what's in your line of sight. The colours match the new cursor mod colours (see Cursor Mods below).

The laser sight aiming has also been fixed, so its path correctly follows the cursor.

![](@/assets/images/screenshots/dcp/3.0.0/laser-sight-colors.png)

### Scythe Bullet Deflect

A cut mechanic, this mod lets you deflect bullets with the Scythe. Just aim and press fire.

The cooldown is roughly equal to the Scythe's slash. The window to deflect is very narrow, only lasting as long as the Reaper's spin lasts.

![](@/assets/images/screenshots/dcp/3.0.0/scythe-deflect.gif)

You can enable a sound cue to play when the deflect cooldown is over in with the option `weapon_scythe_deflect_ready_sound` in <span class="color-purple">globalconfig.json</span>.

To see the area of deflection, you can show hitmasks in custom local levels by enabling debug mode, then pressing `numpad1`.

### Headhunter Bullet Refund

Another cut mechanic. Scoring a headshot with the Headhunter creates a fire (`oEfBulletRefund`). When touched, it refunds 1 Headhunter bullet.

The fire created by `oEfBulletRefund` has been changed to match the Headhunter's colours, and SFX has been added when a bullet is refunded.

![](@/assets/images/screenshots/dcp/3.0.0/headhunter-bullet-refund.gif)

Similar to the Compound Crossbow and Tac. Knife, if you drop an empty Headhunter while a refund fire exists, you'll still be able to pick it up again.

To balance this otherwise OP mechanic, the Headhunter is limited to just 3 bullets while this mod is active.

_Note: The object `oEfBulletRefund` actually works in vanilla, and has this same effect of refunding 1 Headhunter bullet._

### Sickle Auto-pickup

Catching the Sickle can be tricky. This mod reduces lets you catch it automatically.

### Bullets ignore body parts

Makes bullets pass through body parts, letting you shoot mines trapped under dead Technicians.

### Melee Input Buffering

Melee input buffering allows you to queue your inputs. If you press the attack button while already attacking, and within the last 30 frames (0.5s) of the weapon's cooldown, you'll attack at the next opportunity.

This mainly affects the Sickle as its animation lasts only 30 frames. The best way to see input buffering in action is to try swinging the Sickle with input buffering on, then off. With it disabled, you need to precisely time successive swings to attack continuously. When it's enabled, your don't need to be precise with your timing.

Melee weapons other than Knife and Sickle have a 60 frame (1s) cooldown. This applies to Hammer, Sledgehammer, Scythe, and regular punches. For these weapons, if you press the attack button during the _second half_ of their attack animation, you'll attack again when the cooldown is over.

This is an optional feature and can be disabled with the option `weapon_melee_input_buffer`.

## Weapons Misc

Weapon stats can be viewed from your car trunk now, as well as Charon's shop.

You can now choose only a primary, or secondary, weapon from your trunk. Or even none at all.

Last Breath has been added as a valid object, `oLastB`. It's only visual at the moment. Its console slow-motion effect may be added in a future release.

The structure of the weapons config file <span class="color-purple">weapons.json</span> has been revised. You can now use a JSON export of the weapons spreadsheet directly, without needing to manually edit it before using it in the game.

## Load Custom

Mark favourites on the Load Custom screen with `MMB`, and press `Home` to scroll to the first local level. These controls now appear in the corner of the screen.

![](@/assets/images/screenshots/dcp/3.0.0/load-custom-faves.png)

Custom local level filesnames are much longer, and hovered level names are now lighter.

The level description keeps its on/off state when returning to the Load Custom screen, and its helptext in the bottom corner is now coloured.

### Local Levels

While inside a custom local level, press `Tab` to spawn any object on your current position (like in DECP). Note that this exits fullscreen so the input box doesn't get hidden behind the game window, so for best results play in windowed mode.

Enabling every weapon to appear in the trunk now shows all weapons correctly, with no cutoff.

### Object Colours

There are new colour options for wallpaper, water, and party lights (52 in total!)

There are new options for objects affected by colour too:

- `oWater` - Supports height
- `oPartyLight` - Supports alpha

See the changelog for DECP 4.0.0 for full details.

![](@/assets/images/screenshots/dcp/3.0.0/color-room-blue.png)

## Cursor Mods

Two new mods for your cursor:

- Change the cursor colour to match what's in your line of sight
- Show your current weapon recoil

## Hide Everything

Loads of options have been added to hide HUD and cursor elements, from objective text to the cursor itself.

## Mission Select

Press `A` & `D` to switch tabs. This was possible in vanilla by pressing up twice, now it's always available.

New options let you skip the fadeout and animated polaroids, making levels load almost immediately.

The _Quit Mission_ menu now includes an option to return to the mission select screen.

Clicking a mission now checks for "mouse pressed" instead of "mouse released" to select a level. This makes load levels a fraction faster.

## Misc Features

Enemies and the player can now be placed upside down, and their weapon sprites and melee hit masks will work correctly.

Quick restart hotkey: `F4`. This is very useful when making local maps, as they are fully reloaded on restart.

Elevators can now open doors on both sides.

![](@/assets/images/screenshots/dcp/3.0.0/elevator-doors.gif)

The custom cutscene object available in the editor has more cutscene portraits, including more cut dev art and custom sprites by Nintee and Classic_Cheese. Voice SFX for Cerberus have also been added.

Rolling is faster, and you can roll continuously by holding `Ctrl`.

A new visibiilty indicator shows if you're in the dark, with a white border around the screen. Previously this was only available in local maps with debug mode on. Enable with `indicator_visible`. Note: There's a slight delay due to how often the game checks your visibility.

Lots of new fadeout skips have been added. The finish level skip, `skip_finishlevel_fadeout`, affects a ton of things, including the fadeout before the mission select.

## Minor

- Added debug option to invert player yscale with `numpad minus` (`-`)
- Renamed "skipto" options to "autoload"
- `oCableBox` now accepts doors as a child
- `oNpcCharon` renamed to `oEnemyCharon`
- SR easter egg options expanded with a 2nd option
- CC easter egg object added

## Fixes

- Fixed a crash on Load Custom if there's no connectionto Steam, or no maps were subscribed to
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
- Fixed trunk always open in workshop levels

### Upside down fixes

These didn't work in vanilla if the player or an enemy was upside down.

- Enemy melee hit masks (`oZomb4`, `oDog1`, `oOni1`, `oSkele1`, `oVamp2`)
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
