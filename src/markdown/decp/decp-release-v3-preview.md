
Preview builds were standalone only WIP builds, in preperation for the major Steam-enabled release of 3.0.0.

They were released on Discord by their build numbers, which were: 64, 63, 62, 58, 57, 54, 50, 47, 44.

### Features

- The level editor now supports "Open with"
- Wallpaper has a proper submenu: Change w/h or swap with another wallpaper sprite
- Wallpaper hovertext shows sprite & w/h
- Wallpaper can be changed to any arbitrary sprite via its new submenu
    - Works with _another other sprite index_
    - [This spreadsheet](https://docs.google.com/spreadsheets/d/1qRyF3laHK2bKYyI552aA5PElzib8ak1FfLNxDId9Lzg/edit#gid=305275394) lists every sprite in the game
    - Any value greater than `31` will show as a yellow number in the hovertext
    - The editor and the base game have **different sprite** indexes. This means, what is shown in the editor **will not** match the game (the spreadsheet is the SSOT)
    - The editor sprite index only goes up to `383`, any above this use a new custom sprite. The hovertext will show the
    - The frames the game uses depend on the xyscale of the wallpaper object. Set a wallpaper object to use sprite index `383` to see how this works.

- Mines show a red semi-circle if they are set to "armed" (like in the game)
- Knife Block has a submenu to change the knife count

- Weapons have an outline showing Physics state: Red = enabled (on floor), blue = disabled (float).
    - Hovertext colours also match these
    - Most vanilla levels don't set weapon physics corectly. See `weapon_var2` in the Config section for more into

- Zombie Camera shows vision cone
    - Note: Base game doesn't support custom xscales for this object. If the xscale _is anything except 1_ (face right), it will always face left.
    - The vision cone when using an inverted yscale looks broken in the editor, but the position shown is correct, as it shows the cone after physics take effect in the base game
- Doors use a different sprite if they're open
- Window caption shows mission name + filename, if set
- Loading a file now updates the window caption as each load action (eg. read file, create object instance) is performed by the editor
- Press `Tab` and enter an object name to spawn it under the cursor ([available objects list](https://docs.google.com/spreadsheets/d/1XsQPEOL5d5vsu0OXlZaMR01yTMRrRebbrrtjea6FaHU/edit#gid=884195837))
- New object: `oWater` in _Miscellaneous_.
    - Water in the game always appears along the botto of the level, no matter where you place it in the editor.
    - You only need to place 1 oWater object for water to appear
    - The height of `oWater` in the editor corresponds to the maximum height of the water in the game
    - To see where the water will reach, align the bottom of `oWater` in the editor with the bottom of your level

- Controls help text is now disabled by default. It has been replaced with "F1: Toggle help", if controls aren't set to be visible in the options (this doesn't appear if `visible_controls` is `0`)
- Stairwells now show if they are valid or not, and show their corresponding other stairwell on hover
- Added description to enemy cars: _Place enemies on top to spawn when car arrives_
- Added description to oBulletRefund: _Adds +1 Headhunter bullet when touched, then extinguishes_

- Zoom with `Ctrl` and `+`/`-`. Reset zoom level with `Ctrl` + `*`.

### Window

- Window caption shows mission name + filename, if set
- Loading a file now updates the window caption as each load action (eg. read file, create object instance) is performed by the editor

### Object Submenus

- Option to set custom width & height (separately or at the same time)
- Option to set weapon frames (affects: Knife Block, Knife, Sawn-off, Hammer)
- Submenu "Physics" now also say "float" or "on floor"
- Submenu "Delete" is now red
- Submenu "Frame" is now orange

### Hovertext

- Hovertext shows custom details for every object (eg. door open/close, safe pin count etc.)
- Hovertext for objects with custom w/h show scale number in brackets next to w/h numbers (eg. x5)

### Misc

- The description text _Trap Activater (Attaches to usables)_ now specifies which usables
- Main menu no longer closes when choosing an option. This lets you select multiple tags and change level details quickly
- Steam status is now displayed in the bottom-left corner. It uses diferent colours for disabled/enabled/updated
- Added new controls text

## Hotkeys & Keyboard Shortuts

Full controls are toggled with `F1`.

- `+`/`-`/`*` - Zoom in/out/reset
- `Tab` - Spawn an object by name
- `numpad0` - Hide all GUI
- `numpad1` - `numpad9` - Hide GUI elements
- `Shift` + `MWU/D` - Switch tabs
- `Shift` + `MWU/D` (while holding object) - Cycle frames
- `Alt` + `numpad0` - Show debug info. Change info with `Alt` + `numpad1`/`2`/`3`
- `Pause/break` - Full editor reset (functionally the same as Ctrl+N)



## Fixes

- (Vanilla) Setting dimensions no longer resets the level position
- (Vanilla) Dead Reaper object used wrong sprite
- (Vanilla) _Dead Candle_ was named _Dead Reaper_
- (Vanilla) Clicking an object no longer resets its x/yscale (only resets xscale in vanilla)
- (Vanilla) Crashed on save if `oLevelTrans` or `oSnipePickup` have no assigned level. Now shows an error message
- Hovertext doesn't show frames now if they're set programmatically, applies to: `oPartyLight`, `oMine`, `oStairwell`
- Removed physics menu for `oKnifeblock`, because it doesn't use it (its `var1` is used to set frames, not physics like other weapons)
- Weapons with frames had a missing x-scale submenu
- Object submenu width didn't adapt to long submenu labels
- Fix decimals saving with commas (`,`) instead of periods (`.`)
- Steam workshop status message had wrong alignment
- Patched memory leak \o/
- Frame issues with `oWindow3`
- Level details were reset when setting: Level name, background, tags
- Setting `xyscale_initial` below 1 crashed on sidebar object click (added a message)
- Config for `xyscale_initial` was set to `0.5`, should be `1`
- Hovertext first line was -1
- Dialog for "scale both" said to use 0 for half-size, instead of 0.5
- Doors & stairwells no longer show frames in their hovertext (as their frames are set programatically)
- INI defaults weren't being used if an INI section (eg. `[UI]`) didn't exist
- Zooming now centers correctly

## Config

Set your config in DECP.ini.

- Option to hide weapon outlines with `visible_weapon_outline=0` under `[UI]`
- Option to show var2 for weapons with `weapon_var2=0` under `[HOVERTEXT]`
    - Weapon outlines for vanilla levels are weird. Most of them use `var2` to set physics instead of `var1`. This means weapon outlines + hovertext for most vanilla levels don't display correctly.
    - If you're editing vanilla levels you can enable `weapon_var2` in the config. The outlines won't change but the hovertext `var2` is generally correct.
- Option to show debug message by default: `show_debuginfo` under `[DEBUG]`
- Option to load levels on top of each other. Set `load_clearpreviouslevel` to `0` under `[DEBUG]`
- Option to show object parents in the hovertext with `parent` and `parent_id` under `[HOVERTEXT]`
- Option to set the default level width & height under `[LEVEL]`
- `[HOVERTEXT]` - Hide new hovertext details with `special=0`
- `[DEBUG]` - Set the default xyscale (resets after using mousewheel to flip an object) - `xyscale_initial=5` under `[DEBUG]`

_Note: The controls text is crazy long now, so just a reminder that you can toggle it with `numpad3`, or always hide with config option `visible_controls=0`._

## Debug

- Option to show pLogic vars in hovertext with `pLogic_vars=1`
- Option to disable "open with" warning (see below) with `load_dontshowbugwarning=1`
- Removed temp config option `load_dontshowbugwarning`

## Known Issues

_Most/all of these are probably patched by now_

- Known issue: Clicking an object with a negative scale resets it to positive
- Known issue: Level name & objectives reset after loading a level (they need to be set again before saving)
- Custom width & height get overridden with x/yscale submenu options (quickfix: add `-` before numbers in the custom width/height menus instead)
- Objects reset custom x and y scales when moved (issue is present in vanilla for just xscale)
- There's a small memory leak so save often just in case
- Custom width & height submenu options appear below Delete (exception is enemies)
- Enemies show frames menu even with only 1 frame (most objects show "---" instead)
- Hovertext shows dashed divider line even with no special data to display
- Cycling frames with shift has no object validation
