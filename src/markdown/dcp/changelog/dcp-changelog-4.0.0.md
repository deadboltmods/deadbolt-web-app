# DCP v4.0.0

- Quick restart now works even when there's no instance of reaper. The gunshot SFX will still play, and the level will reload much quicker.




## What's New?

**TODO:** Add tl;dr here

## Weapons

### Hunting Shotgun

New weapon: Hunting Shotgun, created by Zambooni (with support from Nintee)

- The power of a shotgun, the precision of a rifle
- Add to levels with `oHShotgun`



## Weapon Balance

### Scythe (WIP)

The Scythe's deflect ability is now much easier to use. The deflect window lasts longer, and the cooldown resets after a successful parry.

### Sickle (WIP)

The Sickle is no longer absurdly powerful, with its thrown damage being decreased to `200`. The Compound Crossbow is back to being the only guaranteed one-shot weapon. To compensate for this, its cost ahs been reduced from `120` to `80`.

The Sickle can still one-shot most enemies. The exceptions take 2 hits: Bouncer, Nightcrawler, Patriarch, Sergeant, and the bosses: Puff, Madam Stela, Evelyn, Amber, Roland (3 hits). To take them out, you'll need to get up close and personal with the Sickle's fast melee attack.

### Other Weapons (WIP)

Reduced cost of _Tac Knife + .38 Pistol_, from `80` to `50`. This reflects its power compared to other weapons in the `80` cost tier.

Reduced spread for _Burst Pistol_, from `2` to `1.5`. This makes it more reliable at close-to-medium range.


## Challenges

There are 3 new challenge options. These apply to all levels, and let you play with certain limitations.

- Headshots only: Enemies are only hurt by headshots
- Headshots disabled: Shots never count as headshots
- Melee only: Bullets can't hurt enemies

Bullets behave the same for each option, so they will still hit enemies, shoot out lights, and kill zobie camera heads.

Enable them in `globalconfig.json`.

_Note: These options do not affect physics objects, including Val and Shambler heads (`oZomb3Head`)_


## Custom Levels

### New Objects

There are a ton of new logic objects and changes to exising objects. See the DECP release for more info.




### Debug Options

These are only usable in **local** levels while debug mode is active.

- "Logic Objects" (`numpad5`) debug info has been overhauled. It now matches the look of the editor. Inactive objects are slightly transparent. Note that children of `oCommandSpawn` may be invisible, as they are temporarily hidden by the `oCommandSpawn` object.
- "Logic Objects" (`numpad5`) toggle now shows timers for `oTrapActivator` (in frames) **TODO: Move to new special key**
- Added toggle to show AI alert/searched (these are 2 debug indicators origially added by Hopoo)
- Added toggle to show AI target lines:
  - Targets are **white** (where the AI wants to move to)
  - Aim targets are **orange** (where the AI will shoot)
  - Target circles are also available in globalconfig.json. The difference is, this option draws a line to them, from the enemy, so you know which who each circle belongs to

## Minor

- Headhunter refund fires (`oEfBulletRefund`) are no longer consumed if the player is not holding a Headhunter, but one still exists in the level
- Thrown damage for Sickle is now moddable with `t_damage_gib` (the last DCP version had this value as `600`)
- Changed cursor recoil mod to affect main cursor, instead of showing a grey circle around the original cursor
- Changed **Vertex Buffer Method** to **Fast**. This may improve performance with lights. My tests showed no difference, so I'd like to hear feedback on this one. Gamemaker docs [here](https://docs.yoyogames.com/source/dadiospice/001_advanced%20use/global%20game%20settings/windows%20tab.html). **TODO:** did we keep this in?

## New Options (globalconfig.json)

New settings to change cutscene delays:

- `cutscene_delay_campaign`: Affects the time before a cutscene starts in a campaign level. Default is 60 (1 second). Does **not** affect the delay between a cutscene ending and the player re-gaining control, as that is (unfortunately) hardcoded and unmoddable.
- `cutscene_delay_custom`: Affects the delay between child cutscenes. Set this low to make conversations happer quicker. Default is 60 (1sec) in vanilla, and 0 in DCP (no delay).
- `cutscene_readspeed_multi_custom`: Multiplier that affects the speed that text is read in custom levels. Vanilla is 1 (no speed change). DCP sets this to 3 by default. 9 is almost instant. If you set this too high voice clips won't play.

- `faster_enemy_snipe_dot`: Make enemy red dots (`oSniperEnemy`) move faster.
  - Gameplay is unaffected. This only changes how long it takes for the red dot to catch up with where shots are fired.
  - This gives you a better idea of where the sniper is aiming after you cross a long distance.
  - It's most noticable with levels like [Hotline Reaper](https://steamcommunity.com/sharedfiles/filedetails/?id=953067943). In this level in vanilla, you can be shot with a sniper bullet before the red dot is even on the screen.

- `ai_reaction_timer`: (debug) Show enemy reaction times. Enemies shoot when it reaches 0. This is most useful for learning Scythe deflect timings.
  - **TODO:** Move to debug mode

## Fixes

### Objective Fixes

- "Find Information" targets that create dialogue trees in the campaign no longer softlock the game for custom levels. This applies to: `oGod`, `oSafe2`, `oZombBoss1Cover`. Now they just advance the mission and play the `wFireball` sound (which normally plays when you find the right item in a dialogue tree).
- `oZombBoss1Cover` only has "check drawers" if the current objective is "find information". Otherwise it's a normal cover object.
- "Kill for keycards" now changes to "Collect keycards" if all keycard-holding enemies are dead
- "Kill for keycards" and "Destroy ash caches" are now pluralised (eg., if there's one ash cache left, the objective will say "Destroy the ash cache").
- Objective arrow for keycards only show if the current objective is "Kill for keycards" or "Collect keycards"

### Other Fixes

- F4 quick restart now works when there's no instance of oP. This lets you quick restart from vents, or custom levels with no reaper object
- Fixed DCP validation that prevented the multiple lives level name trick
- Added a safety catch for a bug with debug mode, it will now automatically disable if the bug occurs, preventing a crash (needs further investigation into why it triggers)
- Fixed shotgun shots using the weapon's own recoil to calculate the current spread, instead of the player's current recoil (thanks to Square Rabbit)
- Sprites: Added fallback for when hit sprites are missing, fixing a crash with `oEnemyCharon`
- Sprites: Moved fallback sprite code to after mod sprites are set, ensuring modded sprites are available to use as fallbacks
- Fixed Sickle auto-pickup triggering even when you have 2 active weapons, it's now only picked up if you have a free slot (thanks to Square Rabbit)
- Fixed vanilla party light colors not working (thanks to Square Rabbit)
- Fixed `oKeycard` showing 2 objective marker arrows
- Fixed crash when spawning an object in a custom local level (with `Tab`) when using a valid non-object asset name (eg, a sprite name)
- Fixed crash with Headhunter bullet refund (`oEfBulletRefund`)
- (vanilla) Added code to allow using `oApt` objects without crashing (in vanilla you need to encounter an `oFireplace` object first, eg. by loading a campaign save)
- (vanilla) Fixed a cutscene playing when Amber & Evelyn are killed in custom levels
- (vanilla) Fixed `oTrapActivator` not triggering when there is 0 horoizontal distance between the activator and the trap (ie. the black line in the editor is completely straight up/down)
- (vanilla) Fixed crash error for `oCommandSpawn`: when the child no longer exists
- (vanilla) Fixed crash error for `oCar3`: "oCar3.temp_target not set before reading it"
- (vanilla) Fixed crash for `oVamp3Gem` + `oVampBoss2Gem`: `Unable to find any instance for object index (number) name '<undefined>'"` **todo: needs testing**
- (vanilla) Fixed `oZombBoss1Cover`:
  - Chair ignored xscale + xscale
  - Frame 2 option in editor was ignored (this fix lets you place the office chair separately)
- (vanilla) Enemy headshot hitboxes fixed for:
  - Vamp1/Incubus - crouch (fixed wrong aligment after 2 frames)
  - Skele2/Grunt - crouch (added custom mask, now you can headshot them while they are in cover)
  - Oni2/Maiden (idle, walk - in vanilla, headshots only count if you shoot at a Maiden's ear level or higher - lowered bbox_top from 11 to 13)
  - Oni2/Maiden (idle, walk, hit - changed bbox collision type from rectangle to precise)
  - **TODO:** Oni2 crouch: custom mask (currently you can shoot the top of her gun when she's fully crouched, see Jump Cut)
- **TODO: Check Discord bug reports**

NOPE, did not do:

- Set Charon's hitbox back to rectangle, instead of precise (note: this affects playable charon via config.json)

### Fixes: Nopes

- ~~Fixed last level name showing on the pause menu while in the apartment (previous fix wasn't effective) - `//@BOOKMARK:clear_room_string`~~
- ~~(vanilla) Fixed crash error for `oTotem1`: "oTotem1.flash_id not set before reading it" (nope, not fixed)~~

**todo**
- One of the demons at the end of Vall came back to life: https://discordapp.com/channels/404217484082806805/701719988297531432/763730099890946070

- Allow 0 length fuse on trap grenade (if n == 0, then n == 0.001) (DONE?)
