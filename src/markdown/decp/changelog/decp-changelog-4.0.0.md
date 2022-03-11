## Tools

A new set of tools is now available. Find them at the end of your toolbar.

### Select

Drag with `LMB` to draw a rectangle around objects. Objects within your rectangle will have a yellow border.

### Filter

Filter selectable objects with the new sidebar buttons. Hover over them to see what they do.

<!-- ![](@/assets/images/screenshots/decp/4.0.0/filter.png) -->
![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/decp/4.0.0/filter.png)

### Move

Drag the selection with `RMB` to move its objects.

### Copy

Press `Ctrl`+ `C` to copy all objects within the selection. A new selection will be created, containing your copied objects.

<!-- ![](@/assets/images/screenshots/decp/4.0.0/copy.png) -->
![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/decp/4.0.0/copy.png)

### Delete

Delete selected objects by pressing `DEL` to initiate delete mode, then `DEL` again to confirm.

To cancel a delete after pressing `DEL`, press `RMB`.

<!-- ![](@/assets/images/screenshots/decp/4.0.0/delete-x2.png) -->
![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/decp/4.0.0/delete-x2.png)

### Hide Boxes

Hold `Alt` to hide the selection rectangle and selected object boxes.

### Import Objects

You can use the move tool with the <span class="color-purple">DECP.ini</span> option `load_dontclearlevel` to import prefabs, which are pre-built, re-usable constructions of objects.

To use them:

1. Make your prefab construction **above** the default level bounds as `*.nc` files.
1. Set the <span class="color-purple">DECP.ini</span> option `load_dontclearlevel` is set to `1` (enabled)
1. Clear the level
1. Load a level you want to use your prefab in
1. Load your prefab, as if you were loading a new level. It will appear above your previously loaded level
1. Remember to undo the setting change afterwards

If this is a popular approach, I can add a new "Load Prefab" option to the main menu, so the INI edit step isn't required.


## New Colours + Options

Several objects now have a ton of colour options. There are a total of 52 colours to choose from. Using custom colours and other new options is safe to use in vanilla maps, the new options will be ignored.

Colours are grouped into sets of 4. The first in a set is dark, then vibrant, then 2 lighter levels.

### Wallpaper

Wallpaper (`oWallpaper` + `oWallpaperFront`) can be blended with any of the new colours. The screenshot below shows how every wallpaper looks with each colour option.

<!-- ![](@/assets/images/screenshots/decp/4.0.0/wall-colors-800.png) -->
![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/decp/4.0.0/wall-colors-800.png)

### oPartyLight

The light modifier object `oPartyLight` supports all the new colours, and its icon will change to match your chosen colour.

You can also set alpha levels now, which control the level of opacity.

The default alpha is `0.6` (60% opaque, or 40% transparent). It can be set anywhere between `0.1` and `1`. The difference is subtle, but noticable.

### oWater

As well as setting the water colour for `oWater`, you can also set the height. DECP will preview how the water will look in the game.

<!-- ![](@/assets/images/screenshots/decp/4.0.0/owater-gutter-sludge-alt.png) -->
![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/decp/4.0.0/owater-gutter-sludge-alt.png)

If you set the height of an `oWater` object to match the level height, it will completely cover the level and tinge it with your chosen water colour.

This object stacks, so you can add a second instance of `oWater` to darken the level.

## Workshop Upload

You can now set custom workshop thumbnails easily.

When uploading a ZIP to the workshop, if your ZIP files contains an image named `promo.jpg`, that image will be used instead of a generated level screenshot.

Image should square. A good size is `268` x `268`.

There are 2 new guides to help you upload custom thumbnails: [Image Sizes](guides#image-sizes) and [Upload Zip](guides#workshop-zip).

The "upload a zip" message now mentions the above, and also mentions that updating existing items will erase its name and description.

## Cutscene Portraits

18 new cutscene portraits, including more cut development art, previously innaccessible sprites, and original work by [Nintee](https://steamcommunity.com/id/Nintee/images/?appid=394970) and [Classic_Cheese18](https://steamcommunity.com/sharedfiles/filedetails/?id=1954829541).

<!-- ![](@/assets/images/screenshots/decp/4.0.0/portraits.png) -->
![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/decp/4.0.0/portraits.png)

View all the cutscene portraits in the new [Cutscene Portraits](/resources#cutsceneportraits) section in Resources.

## oDetector1 Object

We recently discovered a unique and unused mechanic, which exists even in vanilla.

The object `oDetector1` was previously known to change to a damaged sprite when shot. But if you enter a vent while `oDetector1` exists in a level, you might also notice a red radius coming from it.

If the player **exits** a vent within this radius, an alarm will sound, drawing enemies to the alarm's location. The alarm only stops if detector is destroyed.

In this release, DECP adds a few improvements to make it easier to use:

- The red radius is visible
- A sidebar description has been added
- The depth is fixed so it's not hidden behind vents
- The object itself no longer disappears if you load a saved level that uses it

<!-- ![](@/assets/images/screenshots/decp/4.0.0/odetector.png) -->
![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/decp/4.0.0/odetector.png)

There are a lot of possibilities with this object, with lots of options for alternate strategies and AI manipulation.

Find `oDetector1` in the Miscellaneous sidebar, or press `Tab` in DECP to paste in the object name and spawn it instantly under the cursor.

## Elevators

Elevator buttons (`oElevator1Button`) can now be assigned to different elevators.

This lets you create levels with multiple elevator routes. These levels will work in vanilla.

<!-- ![](@/assets/images/screenshots/decp/4.0.0/elevator-button.png) -->
![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/decp/4.0.0/elevator-button.png)

New elevator buttons now try their best to be assigned to their nearest elevator.

Tip: You can place doors on any side of an elevator, but only the earliest placed door will open.

## Controls

### Walls tab

**You can now draw walls**. This works for both straight lines and boxes. To draw them, make sure no wallpaper is selected, then drag with `LMB` like you were placing normal wallpaper.

The rectangle shown when dragging custom walls has a thicker border, and no background color.

### Holding an object

- `Shift` + `LMB`: Place a copy of the object. Copies options from the original object, such as enemy patrol length.

### Hovering over an object

- `Shift` + `LMB`: Copy the object, and hold the copy
- `Alt` (hold): Hide the object's bounding box rectangle

### Hovering over wallpaper

- `Shift` + `MWU/D`: Cycle sprites
- `Alt` + `MWU/D`: Cycle colors
- `Shift`/`Alt` (hold): Hide the wallpaper's bounding box rectangle (helps with sprite/color cycling)

### After clicking an object

- `Shift` + `MWU/D` with `oCommandCutscene`: Cycle portraits
- `Shift` + `MWU/D` with `oWater`: Cycle color
- `Shift` + `MWU/D` with `oPartyLight`: Cycle color
- `RMB`: Cancel move

When cancelling a move, changes to the object are kept, such as frames changed with mousewheel + shift. Note that this does not cancel copying objects, it just moves the copy back to the source object's position, with a slightly offset to prevent accidentally stacking multipe objects.

### Other Controls

`F11` - Toggle fullscreen. Be aware, this will hide file open/save prompts.

`Alt` + `MWU/D`: Scroll sidebar x10

## GUI

### Sidebar

Multiple columns are now supported. Column numbers are individually configurable for each tab, in <span class="color-purple">DECP.ini</span>.

Object names are now shown in blue. If applicable, the number of available frames are also shown in orange.

Objects that require DCP have a blue background in the sidebar.

### Object Hovering

Improved frame counting, for object hovertext and sidebar button hovers. This means that objects which automatically animate in-game, or use frames for other things (such as oPipe) no longer show a frames count on hover. (Note: frames may still appear in submenus)

Hovertext now shows an object's friendly name, as it appears in the sidebar.

Hovertext for wallpaper objects now shows the sprite name in yellow, making it easier to see among other hovertext info.

## DCP Support

- 5 new weapons: `oBPistol`, `oCbow`, `oSickle`, `oTKPistol`, `oLastB` (oLastB is visual only atm)
- 5 new misc objects: `oMotorcycleBig`, `oMotorcycleSmall`, `oStripperVamp`, `oStripperPole`
- 1 new enemy: `oEnemyCharon`

## Options

- UI: Toggle the visibility of an object's offset with `visible_object_offset`. This is the pink circle that shows where your mouse will connect when clicking an object. Previously its visibility was set with `visible_object_axis`.
- HOVERTEXT: Show raw var1 and var2 values with `general_vars` (like how `pLogic_vars` works).
- HOVERTEXT: Show the object id with `id`
- HOVERTEXT: Show the instance number with `instance_number`
- SIDEBAR: Set the number of sidebar columns
- SIDEBAR: Show a transparent sidebar background

## Misc

The standalone EXE has a new icon with a blue background, for this major release.

Using custom sprites with wallpaper objects now always shows the special custom sprite. Previously it showed sprites that didn't match what would appear in the game.

Custom RGB background colours (set in <span class="color-purple">DECP.ini</span>) are handled better, as the grid and background image now become slightly transparent. This works best with light backgrounds, and helps with things like drawing walls. Here are the settings I use for a light background:

    bg_rgb_r=90
    bg_rgb_g=90
    bg_rgb_b=90

`oCableBox` can now be assigned a child. Curently DCP only supports doors as children, which open and unlock when `oCableBox` is interacted with (heist missions anyone?).

Missing object warning notices will stop after 5 missing objects.

Sorted the objects list so "bad objects" (marked red, hidden by default) aren't jumbled in with working objects.

Updated F1 helptext with new controls.

## Fixes

- Fixed `oWindowCut` sprite
- Fixed `sWallpaperFront5` sprite + origin
- Fixed `sWallpaperFront7` sprite
- Fixed `oElevator1Button` assigned elevator xypos resetting when the level loads
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
