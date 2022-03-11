This update improves on the "Load Custom" screen, finishes the new console weapon addtions, and fixes many long-standing issues.

## Load Custom

The Load Custom screen has been overhauled. It now shows creator names and tracks your best stats.

<!-- ![](@/assets/images/screenshots/dcp/2.1.0/oLoadCustom-crop.png) -->
![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/dcp/2.1.0/oLoadCustom-crop.png)

It also keeps track of levels you've started but not finished. This is shown in the UI with blue stars, as seen above for _Back with a Vengeance_.

Descriptions are also available, letting you read the full backstory for each custom mission. Toggle the infobox with RMB.

<!-- ![](@/assets/images/screenshots/dcp/2.1.0/oLoadCustom-infobox.png) -->
![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/dcp/2.1.0/oLoadCustom-infobox.png)

### Saved Stat Details

Stats are saved to this location:

`%LocalAppData%\deadbolt_game\`<span class="color-teal">Data</span>`\`<span class="color-purple">workshop-stats.json</span>

The file and folder will be automatically created for you. It saves your best stats when you complete a level: your fastest time, lowest death count, and highest star rank. This works like high scores, and old stats are only updated when you've improved.

### Other Changes to Load Custom

Your last scroll position is now saved, so when you finish a custom level you won't need to scroll a bunch to find your place again.

Mouse wheel is back to scrolling a full page by default. This can be disabled in the config with `loadcustom_mousewheel_scrollpage`.

Two other fixes have been made:

- The character "#" no longer breaks onto a new line
- Clicking "Back" no longer crashes if you have more levels than can be shown

## New Chat Portraits

You can now replace Reaper's default chat portrait with a version using his cover skull, with the option `alt_reaperportrait`. It's enabled by default. This was an old community suggestion that I was very happy to get to.

<!-- ![](@/assets/images/screenshots/dcp/2.1.0/reaper-icon-alt-2-custom.png) -->
![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/dcp/2.1.0/reaper-icon-alt-2-custom.png)

Additionally, new chat portraits have been added for custom cutscenes:

- `33` - Alternate Reaper with his cover art skull
- `34` - Tattooed zombie, from [this dev blog post](https://hopoo.tumblr.com/post/116450726264/dudebolt-and-friends)
- `35` - Zombie camera head
- `36` - Sir Stela
- `37` - General

## Weapons

Reaper's apartment rack now shows the 2 new buyable weapons, Compound Crossbow + Landmine.

<!-- ![](@/assets/images/screenshots/dcp/2.1.0/apt-rack-complete-x2.png) -->
![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/dcp/2.1.0/apt-rack-complete-x2.png)

Buying a weapon from Charon now spawns your new weapon, so you can try it out immediately.

Choosing a new weapon set from the trunk in custom levels now properly saves your choices, and weapons reset correctly after finishing a level that used `oLevelTrans`.

## Misc

F11 now toggles fullscreen. You could do this already with `Alt` + `Enter`, this is less cumbersome.

The controller menu option has been renamed to the more succinct "Gamepad".

## Fixes

The issue with slope collisions that's been part of DCP from the start has now been fixed! This means DCP no longer requires a modified `lv3_2.nc`. If you replaced the vanilla version already (as part of a previous DCP version), you can download it again [here](http://files.codemuffin.com/deadbolt/misc/lv3_2.nc).

And last but <span class="color-g">by no means least</span> - smoke invulnerability frames now work against melee!

<!-- ![](@/assets/images/screenshots/dcp/2.1.0/smoke-invuln-frames.gif) -->
![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/dcp/2.1.0/smoke-invuln-frames.gif)
