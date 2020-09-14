

## DECP 2.0.1

**Released Date:** 20-05-05

### Fixes

- Fixed a crash when the Trigger tab is scrolled
- Fixed `oWallpaper1` still appearing in unerlated tab sidebars


## DECP 2.0.0

**Released Date:** 20-05-04

### Fixes

- Fixed crash when loading vanilla level _lv4\_2\_hard_
- Fixed Amber & Evelyn having swapped names \o/
- Removed rogue wallpaper object in non-wall sidebars

### New Features

- Custom EXE icon for patched version
- Added cut weapons (Crossbow + Severed Lich Arm)
- Added lots of new objects
- Added new config file in the program directory, _DECP.ini_
- New config options (in _DECP.ini_): Background colour (RGB, vanilla is `37` for all 3 values)
- New config options (in _DECP.ini_): Remember sidebar position after changing tabs or loading a level (disable in the config with `remember_scrollbar_position=0`)

### Text

- Controls now mention _LMB + Shift: Place multiple_
- Controls now mention _Alt + Enter: Fulscreen_ (note: this will hide dialogs like open/save/frame picker etc)
- Piping object now mentions dragging + holding shift to draw/place multiple
- If no music is selected, "No music" is now shown instead of "Unknown Song", and "(Paused)" doesn't show
- Added a space around the "x" in level dimenions
- New config option: Show full build info (enable with `show_debug_build_info=1`)

### Code & Admin

_Not much interesting here, more for internal tracking_

- Use the correct version of the editor (1.0.3b, the version installed via Steam)
- Refactor how the top right/bottom left strings are handled
- Refactor the object DS grids to make accessing their data much easier
- Add a new room, `room_boot`, to handle adding new custom globals and data structures, as well as 4 new `oInit*` objects to handle running things in the right order
- Add a new DS list global, `global.NI` ("Named Index"), which stores DS grid indexes by name - this makes grid lookups by **key** possible, instead of always by array index
- Add extension: GMFSystem 1.5, not on the marketplace but used in vanilla
- Add extension: [DSPrint](https://marketplace.yoyogames.com/assets/3804/ds-print), for logging data structures to the debug log
- Add extension: [WinDev](https://yal.cc/gamemaker-windows-functions-for-gamemaker-studio/), for later shell use
