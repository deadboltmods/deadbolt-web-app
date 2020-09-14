# DECP - Deadbolt Editor Community Patch v3.0.0

A modded version of the original level editor, with critical fixes and new features.

**Setup & Info**

- [Installation](#installation)
- [Build Differences](#build-differences)
- [Credits](#credits)

**Changelogs**

- [DECP 3.0.0](#decp-300)
- [DECP 2.0.1](#decp-201)
- [DECP 2.0.0](#decp-200)
- [DECP 1.0.0](#decp-100)


## DECP 3.0.0

REMEMBER: Release mode

**Released Date:** 20-05-??

- [Important Changes](#important-changes)
- [Fixes: Vanilla](#fixes--vanilla)
- [Fixes: DECP](#fixes--decp)
- [Objects](#objects)
  * [Hovertext](#hovertext)
  * [Axis & Offset](#axis---offset)
  * [Mouseover Collision](#mouseover-collision)
  * [Submenus](#submenus)
  * [Invert yscale](#invert-yscale)
- [Save States](#save-states)
- [Zoom](#zoom)
- [Switch Tabs](#switch-tabs)
- [Toggle GUI visiblity](#toggle-gui-visiblity)
  * [Pan with Keyboard](#pan-with-keyboard)
  * [Other New Keys](#other-new-keys)
- [Text Changes](#text-changes)
- [INI Config](#ini-config)
  * [UI](#ui)
  * [Controls](#controls)
  * [Hovertext](#hovertext-1)
  * [Renamed options](#renamed-options)
- [Misc](#misc)
- [Notes](#notes)
- [Known Issues](#known-issues)

### Important Changes

- Frames now start from 1
  - Current frames text now says eg. _1 of 3_ instead of _0 of 2_
  - This allows non-destructive cancelling of the frames integer dialog
  - Does not affect data saved to _.nc_ level files
- New config settings, see _INI Config_ for details

### Fixes: Vanilla

- Fix: Pressing cancel in the save dialog wiped the level
- Fix: Pressing cancel in the load dialog wiped the level
- Fix: Pressing cancel in the mission name dialog unset the name
- Fix: Pressing cancel in the room dimension dialog set it to 0
- Fix: Pressing cancel in the frames dialog set the frame to 0
- Fix: Setting frames to a number higher than the available frames set the frame to 0
- Fix: Setting oCandleIdle1's frame to higher than 0 made the object invisible

### Fixes: DECP

- Fix: Mouse panning was restricted by oWallpaper (since 1.0.0)
- Fix: Object mouseover was based on sprite pixels, not bounding (since 1.0.0)
- Fix: Trigger sidebar items didn't show until you scroll (since 2.0.1)

### Objects

#### Hovertext

- Hovertext shows object details, including the object name (blue), frames (orange), depth, x/yscale (ie. direction)
- Also shows extra data like enemy states (idle/sit/etc) where possible
- INI options control what's displayed, see _INI Config_ for more info
- Toggle hovertext visibility with numpad `7`

#### Axis & Offset

- Marker for sprite offset position ("click point")
  - Fuschia circle shows where the mouse connects to an object on click
  - Click near the marker to avoid sprites moving unintentionally
- Arrows for x/y axis
  - Shows the sprite direction
  - x: red, right/left
  - y: green, up/down
- Toggle hovertext visibility with numpad `8`

#### Mouseover Collision

- Mouseover collision area for objects is increased from 1px to 3px² (9px)
- This makes clicking tiny objects easier (eg. `oEfFirefly`)

#### Submenus

- Frames submenu for objects with only 1 frame now says "---" (removing it entirely has negative side effects)
- Frames submenu for objects with 2+ frames now shows the number of frames available

#### Invert yscale

- `Alt` + `MWU`/`MWD` (while holding an object): Flip object on y axis (like regular `MWU`/`MWD` for x axis)

### Save States

Save the current editor state to a file, to load again later in the same session.

- `F5` - Save state
- `F9` - Load state

Save states only work for the current session. Sessions reset when you relaunch the editor, start a new level, or open an existing one.

_Notice: Save states are an inbuilt GameMaker feature. Their functionality can't be changed, so this feature can't be patched if you experience bugs._

### Zoom

Zoom with the numpad `+` and `-`, or `Ctrl` + `MWU`/`MWD`

There are many issues, including zooming the GUI (hide it with numpad `0`). See [Known Issues](#known-issues) below for a list.

- `+` or `Ctrl` + `MWU` - Zoom in
- `-` or `Ctrl` + `MWD` - Zoom out
- `*` or `Ctrl` + `X` - Reset zoom

### Switch Tabs

- `Shift` + `MWU` - Next tab
- `Shift` + `MWD` - Previous tab

### Toggle GUI visiblity

Use the numap. Note: 7 + 8 aren't initially visible so be careful hiding them.

- `0` - Everything
- `1` - File Menu
- `2` - Tabs
- `3` - Controls/version (top right)
- `4` - Objectives/mouse/workshop (top right)
- `5` - Level details (bottom left)
- `6` - Sidebar
- `7` - Object hovertext
- `8` - Object axis & offset

#### Pan with Keyboard

Change view position with WASD. Use the config option `wasd_pan_increment` to set increments.

- `W` - Up
- `S` - Down
- `A` - Left
- `D` - Right

#### Other New Keys

- `Home` - Set the view to the top left of the level boundary
- `Ctrl` + `N` or `F11` - New map (triggers a full restart, restores GUI to default)
- `Esc` - Quit (added for debugging & disabled by default, enable in the config)

### Text Changes

- Controls now mention _LMB + Ctrl: Don't snap to grid_
- Controls now mention _LMB + Mousewheel: Flip X axis_
- Controls now mention _RMB: Cancel object place_
- Controls now mention _Mousewheel: Scroll sidebar_
- Controls now says _RMB: Object submenu_ instead of _RMB: Delete Selection_
- UI text: Workshop item now says _NA_ if it's not set, instead of _-1_
- Set frames dialog: Message states the number of available frames

### INI Config

Options are set in _DECP.ini_, in the EXE folder.

Lots of new settings. (x) means disabled by default

#### UI

- `visible_controls` - Set to `0` to permenantly hide the controls help text

#### Controls

- `wasd_pan_increment` - Number of pixels panned with WASD (recommended to be divisible by 16 to match grid)
- `textalign_controls` - Set controls help text alignment, options: `left`, `right`

#### Hovertext

- `object` - Object name
- `object_id` - Object index (x)
- `sprite` - Sprite name (x)
- `sprite_id` - Sprite index (x)
- `frames` - Current & available frames
- `depth` - Depth (higher = further back ie. deeper into screen)
- `scale` - xscale and yscale
- `xy` - x and y position
- `dimensions` - Dimenions (width and height)
- `offset` - Sprite offset (as shown by the ) (x)
- `bbox` - bounding box (the box shown on object hover) (x)

#### Debug

- `savestates_alwaysallowload`- Allow save states between sessions. Things will break and the editor will probably crash. Don't use this. (x)
- `save_ignorestairwarning` - Allow saving levels with stairs that don't match. (x)

#### Renamed options

- Renamed `show_debug_build_info` to `visible_build_info`

### Misc

- Reduced default level dimensions from 2424\*1024 to 1888\*992. On a 1920*768 monitor this shows the entire level area without panning
- Set `oSoul` default frame to 2 (frame 3 of 3), as its 1st frame (0) makes it invisible

### Notes

- Object frames now start from 1. This fixes the issue where cancelling resets the current frame to 0

### Known Issues

Zoom:

- Help text is blurry if you zoom `+` once then zoom `-`
- Grabbing objects becomes progressively harder as zoom level increases, looks like there's an invisible border around the screen preventing hover/click
- Reset with `*` doesn't respect screen center & feels janky
- Also zooms UI (fixing requires porting the whole GUI draw layer to the actual GUI layer + fixing the issues that arise)

Other:

- No longer possible to use object hover + `MWU/D` to flip on x axis
- Help text doesn't include all the new controls
- Frame submenu is still available for certain object type (eg. enemy) when they only have 1 frame (athough it does nothing in these cases)
- Doors have no delete option?
- Tabs can't be un-selected by clicking them, only `Shift` + `MWU/D` works



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


## DECP 1.0.0

**Released Date:** 20-04-25

- Initial build using the old editor version (1.0.3, bundled in the game dir)
- Replaces missing objects with `oTrailerWheel` & shows a warning notice

### Known Issues

- Mouse panning with middle click held is locked to the level border
