
# DECP 4.0.0

## Tools

A new set of tools is now available. Find them at the end of your toolbar.

### Select

Drag with `LMB` to draw a rectangle around objects. Objects within your rectangle will have a yellow border.

### Move

Hold `RMB` to move the selection, and all objects inside it.

### Delete

Delete objects by pressing `DEL` to initiate delete mode, then `DEL` again to confirm.

Cancel a delete with `RMB` after pressing `DEL` once.

### Hide Boxes

Hold `Alt` to hide the rectangle and and selected object boxes.

### Import Objects

You can also use the move tool with the DECP.ini option `load_dontclearlevel` to import prefabs, which are previously made, re-usable constructions of objects.

To use them, save your prefabs **above** the default level bounds as `*.nc` files. Next, load a level you want to use them in while the DECP.ini option `load_dontclearlevel` is set to `1` (enabled). Then load your prefab, and it will appear above your previously loaded level.

If this is a popular approach I can add a new "Load Prefab" option to the main menu, so INI edits aren't required.


## New Colors + Options

Several objects now have a ton of color options. There are a total of 52 colours to choose from. Using custom colors and other new options is safe to use in vanilla maps, the new options will be ignored.

### Wallpaper

Wallpaper (`oWallpaper` + `oWallpaperFront`) can be blended with any of the new colors.

### oPartyLight

The light modifier object `oPartyLight` supports all the new colors, as well as a new alpha setting, which sets its level of opacity.

By default the alpha is `0.6` (60 percent opaque). It can be set anywhere between `0.1` and `1`.

### oWater

As well as setting the water color, you can also set the height of `oWater`. DECP will preview how the water will look in the game.

If you set the height of an `oWater` object to match the level height, it will completely cover the level and tinge it with your chosen water color.

This objects stacks, so you can add a second instance of `oWater` to darken the level.


## Controls

**You can now draw walls**. This works for both straight lines and boxes. Just draw them while in the Walls tab, with no wallpaper selected.

### Hovering over an object

- `Shift` + `LMB`: Copy object under cursor. If an object is held, place a copy of that held object. Copies vars from the original object, such as enemy state.
- `Alt` (hold): Hide the object's bounding box rectangle.

### Hovering over wallpaper

- `Shift` + `MWU/D`: Cycle sprites
- `Alt` + `MWU/D`: Cycle colors
- `Shift`/`Alt` (hold): Hide the wallpaper's bounding box rectangle (helps with sprite/color cycling)

### After clicking an object

- `Shift` + `MWU/D` with `oCommandCutscene`: Cycle portraits
- `Shift` + `MWU/D` with `oWater`: Cycle color
- `Shift` + `MWU/D` with `oPartyLight`: Cycle color

- `RMB`: Cancel move. Changes to the object are kept, such as frames changed with mousewheel + shift. Note that this does not cancel copying objects, it just moves the copy back to the source object's position, but slightly offset to prevent accidentally stacking multipe objects.

### Other Controls

`F11` - Toggle fullscreen. Be aware, this will hide file open/save prompts.

`Alt` + `MWU/D`: Scroll sidebar x10

## Workshop Upload

When uploading a ZIP to the workshop, if your ZIP files contains an image named `promo.jpg`, that image will be used instead of a generated level screenshot.

This lets you set workshop thumbnails easily.

Image should be `268` x `268` to make a perfectly sized thumbnail.

_And for reference, wide images uploaded to Steam from workshop pages should be: `637` x `358`_

The "upload a zip" message now mentions the above, and also mentions that updating existing items will erase its name and description.

## oDetector1 Object

We recently discovered a unique and unused mechanic, which exists even in vanilla.

The object `oDetector1` was previously known to change to a damaged sprite when shot. But if you enter a vent while `oDetector1` exists in a level, you might also notice a red radius coming from it.

If the player **exits** a vent within this radius, an alarm will sound, drawing enemies to the alarm's location. The alarm only stops if detector is destroyed.

In this release, DECP adds a few improvements to make it easier to use:

- The red radius is visible
- A sidebar description has been added
- The depth is fixed so it's not hidden behind vents
- The object itself no longer disappears if you load a saved level that uses it

There are a lot of possibilities with this object, with lots of options for alternate strategies and AI manipulation.

Find `oDetector1` in the Miscellaneous sidebar, or press `Tab` in DECP to paste in the object name and spawn it instantly under the cursor.

## DCP Support

- 5 new weapons: `oBPistol`, `oCbow`, `oSickle`, `oTKPistol`, `oLastB` (oLastB is visual only atm)
- 5 new misc objects: `oMotorcycleBig`, `oMotorcycleSmall`, `oStripperVamp`, `oStripperPole`
- 18 new cutscene portraits (with art by Nintee & Classic_Cheese18)
- 1 new enemy: `oEnemyCharon`

## GUI

### Sidebar

Multiple columns are now supported. Column numbers are individually configurable for each tab, in DECP.ini.

Object names are now shown in blue. If applicable, the number of available frames are also shown in orange.

Objects that require DCP have a blue background in the sidebar.

### Object Hovering

Improved frame counting, for object hovertext and sidebar button hovers. This means that objects which automatically animate in-game, or use frames for other things (such as oPipe) no longer show a frames count on hover. (Note: frames may still appear in submenus)

Hovertext now shows an object's friendly name, as it appears in the sidebar.

Hovertext for wallpaper objects now shows the sprite name in yellow, making it easier to see among other hovertext info.

## Options

- UI: Toggle the visibility of an object's offset with `visible_object_offset`. This is the pink circle that shows where your mouse will connect when clicking an object. Previously its visibility was set with `visible_object_axis`.
- HOVERTEXT: Show raw var1 and var2 values with `general_vars` (like how `pLogic_vars` works).
- SIDEBAR: Set the number of sidebar columns
- SIDEBAR: Show a transparent sidebar background

## Misc

The standalone EXE has a new icon with a blue background, for this major release.

Using custom sprites with wallpaper objects now always shows the special custom sprite. Previously it showed sprites that didn't match what would appear in the game.

Custom RGB background colours (set in DECP.ini) are handled better, as the grid and background image now become slightly transparent. This works best with light backgrounds, and helps with things like drawing walls. Here are the setting I use for a light background:

    bg_rgb_r=90
    bg_rgb_g=90
    bg_rgb_b=90

`oCableBox` can now be assigned a child. Curently DCP only supports doors s children, which open and unlock when `oCableBox` is interacted with (heist missions anyone?).

Missing object warning notices will stop after 5 missing objects.

Sorted the objects list so "bad objects" (marked red, hidden by default) aren't jumbled in with working objects.

Updated F1 helptext with new controls.

## Fixes

- Fixed `oWindowCut` sprite
- Fixed `sWallpaperFront5` sprite + origin
- Fixed `sWallpaperFront7` sprite
- Fixed certain objects not appearing if you load a level containing them: oDetector1, oCableBox, oDecal, oCat, oSkeleBoss2Dying, oVamp3Body, oZombBoss1.
- Fixed missing alt frames for doors and dead candle
- Fixed hovertext not showing wallpaper sprite name
- Fixed sidebar being able to scroll infinitely past last item
- Fixed unescaped `&` causing a new line for `oAptBox` & `oVampBoss2Body`
- Fixed several object depths causing obscured submenus
- Fixed top left menu hovertext being obscured by sidebar
- Fixed clicking an already-enabled toolbar (sidebar tab) not switching to an empty toolbar
- Fixed trigger objects being invisible in the sidebar when selected
- Fixed trigger object helptext only being white under specific conditions (eg. if an `oTriggerDestroy` object has been assigned a child)
- Fixed ypos not being set correctly for objects placed from the sidebar. This issue would cause objects to be placed inside walls, but was fixed by clicking the object and placing it again
