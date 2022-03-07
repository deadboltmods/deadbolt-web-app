# DECP v4.1.0


## Preview

update 2:
- Fixed all submenus showing colour previews
- Fixed resetting color/alpha/rotation not working
- Refactored the submenu code a bit, might be buggy

update 3:
- Controls:
  - `Space` to switch to the Tools tab. Press again to return to the last tab
  - Zooming no longer affects the GUI, including main menu dropdowns, hovertext, and object submenus. This one took a looong time. Small sprites are intentionally still zoomed in the sidebar. Fixes for object text (eg. cutscene text previews) are planned
  - Save/load .dbcl files by holding shift, thend using the standard save/open shortcuts (Ctrl + S + Shift /  Ctrl + O + Shift)
- Toolbars:
  - New Toolbar: DCP - Holds all misc DCP objects. Non-misc objects specific to tabs, eg weapons, remain in their tabs
  - New Toolbar: GUI - ???
- Submenus:
  - Grouped non-vanilla size options into a single Resize menu (X-scale and Y-scale still have their own menu)
  - New size options to specify a new width/height in px, with extra options to automatically reize the other dimension to retain the original ratio
  - New "Move to back" option. Works well on wallpaper (Warning: this can break logic objects. It works the same as ctrl+c with the Copy tool, by re-creating the object as new instance)
- Main Menu:
  - New options menu with toggles previously available only in the INI, options for users with limited keyboard controls, and a couple extra features
  - Save/load keyboard shortcut text below buttons is now white, was almost unreadable previously
  - New larger font size
  - New dimension options to quickly increase/decrease zoom size by 50
  - Dropdowns now align to the left of their parent button
- Misc:
 - The level description is now shown the bottom-left corner
 - Tools tab now defaults to the "everything but walls" option, making fast selections with the `space` shortcut easier
- Backgrounds:
  - Large image backgrounds now correctly align to the top of the room
  - Added some transparency to large background images while in dark mode
- Minor:
  - Moved `oSniperCredits` to Objectives tab
- Fixes:
  - Fixed new levels created with New/Ctrl+N using old level background and not resetting UI visibility
  - Fixed oTriggerReactor sprite being jagged
  - Fixed high zoom levels preventing object click
  - Fixed resetting zoom after zooming in not re-align the room correctly
  - Fixed light mode forgetting background transparency when changing the background
  - (vanilla) Fixed description always saying "No description", now defaults to current description or is blank
  - (vanilla) Fixed large sidebar objects being squashed
- DCP:
  - Color coding for DCP objects and features is now more prevelant and consistent
  - DCP objects in the sidebar have a purple border, instead of a blue background, and have a purple name
  - DCP object hovertext also shows a purple name
  - DBCL (*.dbcl files) now save description. Tags are still **todo**


## What's New?

- **TODO:** Add tl;dr here
- **TODO: Check the spreadsheet**
- ShadowMoon's objects
- GUI



## Notes (todo)

- Color options for: oKeycard, oDoorElevator **todo:** add to spreadsheet
- oLevelEnd - var2: Requirements (all objects must be complete vs. always available)
- `oTriggerDestroy` improved logic explanation
- `oTriggerDestroy` fixes:
  - Fix zombie camera head not triggering oTriggerDestroy
  - Fix Puff not trigger (**TODO:** check with peeps if anyone uses the vanilla destroy trigger, ie. when puff leaves his desk): @CURRENT_88218


## New Level File Format

You can now save levels as `*.dbcl`. They are playable exclusively in DCP, and give you new options for every object:

- Colour Blend (same as wallpaper, plus new graffiti colours)
- Alpha (transparency: between 0 and 1, with 0 being fully transparent and 1 being full opaque)
- Rotation (with pre-set angle options, or a custom angle)

The new level file format also allows for new options for every object (...)




## Passive States

DECP can now open files that use a vanilla trick, where setting an enemy state to a state that is invalid for them makes them passive. This works as long as the invalid state is below 110. **TODO: Needs testing**

2 custom passive states are also now supported in DCP:

- Passive: Same as vanilla, but without the sprite animation speed issue (best seen with Grunts). Like vanilla, enemies using this state will still see the player, and will react to the player and other noise with an emote, but they won't attack unless the player shoots them.
- Passive (Deaf & Blind): Enemies are passive, and can neither see nor hear gunshots or other enemy alerts. When shot, they will react and ready their weapon (which may alert nearby non-passive enemies), but as they can't see the player, they will never shoot them.

Enemies in one of these passive states show text below their sprite, either "P" (passive) or "PBD" (passive, blind & dead). **TODO: improve**


## Objectives

New "Collect Keycards" objective:

- Completes when all keycards on a level are collected
- Its in-game code that checks to see if any `oKeycard` objects exist has been given extra time to allow `oKeycard` objectss to spawn. This means you can conditionally spawn in keycards after completing a previous objective (e.g. with `oTriggerObjective` + `oCommandSpawn`). Without this extra step, the objective would complete before the keycards have time to spawn.

The vanilla objective "Find keycards" has been renamed to "Kill for keycards", to match the objective used in-game and make it distinct from the new "Collect Keycards" objective.

New objective object: `oRenameObjective`:

- This powerful object lets you completely replace the text of an objective.
- You can do anything from naming your assassination targets to naming custom destinations, like "activate the terminal"
- As this is a logic object, it can be created and triggered conditionally, which means objectives can be renamed conditionally too.



## Logic

Parent lines are now slightly darker, making them more distinct from child lines.

### New Logic Objects

- `oTriggerReactor` - Triggers its child when its parent is activated. Incredibly versatile. Can be chained (eg. when one door opens, open another, then another etc). Can trigger just once with the option "destroy after" (which also fires a destroy event).
- `oTriggerObjective` - Trigger its child on the specified objective. **TODO: Obective number is 0-based ie starts at 0 instead of 1, is this correct?**
- `oCommandDestroy` - Permenantly destroys its child when triggered, triggering any destroy events
- `oCommandMove` - Move the child to the parent location instantly
- `oCommandTarget` - Set a destination for an enemy. Has options to use different alert statuses **WIP**
- `oMagnet` - Join two objects, so when one moves, so does the other. Has options for the offset, so the child object maintains a fixed distance from the parent.

### New Options

**WIP:** Custom options will be overhauled to use the new vars available to DBCL files.

- `oTrapReactor`: Activate instantly, hidden line, both combined. Also shows time (how many frames it takes to activate)
- `oTrapReactor`: Activate instantly, hide line, and both combined
- `oLevelEnd`: Set visibility
- `oKeycard`: Make hidden (invisible & plays no sound on collection)
- `oMicrowave1`: Ping the nearest enemy within rage, instead of vanilla's default (which pings the last placed enemy within rage)
- `oKeycard`: Make it invisible, and silent when collected. This lets you use a hidden `oKeycard` as a makeshift proximity detector, as when it's picked up, you can trigger other events with the `oTriggerDestroy` object

### Misc Object Changes

- **WIP** Cable boxes (`oCableBox`) now trigger children like a trap reactor. This lets you open doors, trigger objectives etc. (**TODO:** Still useful after `oTriggerReactor`?)
- **WIP** Trigger objects can activate lights (note: this is one-way only atm, ie. lights can't activate other things, it's also very buggy)
- Moved the object `oKeycard` to Objectives tab

## Keycards



## Rename Objectives

New objective object - `oRenameObjective`.

As the name sugests, this completely renames an objective. Coloured text is also accepted ([see draw_ctext here](https://deadbolt.codemuffin.com/resources#drawctext)).




## New Objects

5 new wallpaper sets (with front & walls)


### Decorative Objects

**TODO:** Add a list of the objects taken from the unused dev tilesets (put in the DECP readme)

### Text

The new `oText` object lets you create custom text. There's a a variety of fonts, including al the fonts from the game and editor, plus graffiti, blood, and generic sign fonts.

### Graffiti

Like the new text objects, these new graffiti objects take the often-used arrows and circles and expands them

~~Each new object in this set has 15 colours to choose from, including blood red and tutorial yellow.~~

**TODO:** Remvoe the separate color options for this object, they've been deprecated by the new new DBCL color options which affect all objects by default.

- `oGraffitiArrow`: 18 different arrows
- `oGraffitiCircle`: 2 circles
- `oGraffitiCross`: 3 large X marks
- `oGraffitControls`: A combination of extracted tutorial sprites and demo sprites. This object has frames for every letter, as well as the words "hold", "then", "press" and "or".
- `oPromptArrow`: A set of 4 simple arrows without the graffiti style

### Vents

This release includes 2 new toilets and a new sink to play with. One toilet looks metal, the other is filthy. (Finally, the editor has a reason for calling the vanilla toilet "Clean Toilet"!)

### New Object Frames

Some vanilla objects have new frames, taken from the demo and unused dev assets:

- `oLadder1` now has a wooden variant.
- `oStair1` has 3 new frames: A staircase that matches the ground colour, and 2 versions of hollow wooden stairs.

## QoL Features

- New option to use single screen dimensions (960 * 540)
- DCP options are now purple, and prefixed with !

## Controls

WASD pan has been removed, in favor of adding new keyboard shortcuts bound to letter keys.

- `W`: Toggle wallpaper visibility. This makes it easier to see & manage walls otherwise hidden behind wallpaper. The Wall button will be slightly transparent when this is active.
- `Alt`: Snap to an 8px grid, instead of the usual 16px
- `T` - Toggle triggers (logic)
- `V` - Toggle vents **TODO**
- `L` - Toggle between dark (default)/light mode
- `Space` - Toggle Move tool (or switch to last tab if currently on the move tool)

Save/load DCP:

- `Ctrl` + `Shift` + `S` - Save .dbcl level
- `Ctrl` + `Shift` + `O` - Open .dbcl level


## Options (DECP.ini)

- 3 new options to prevent replacing the title, description and tags when uploading a level.
  - They help prevent you from accidentally overwriting your level description on Steam.
  - The settings apply to both new and replaced levels.
  - Personally I recommend disabling all of them except the title replacer, as accidentally wiping your level description and tags is a real pain, and is irreversible.
- Option to take a square screenshot instead of a rectangle. Applies to single level uploads, and ZIP upload if no <span class="color-purple">promo.jpg</span> was included in the ZIP




## Minor

- Set `oMeatPortal` to use "precise" mouse collisions, so it only procs a hover if you're on the actual sprite (use `Insert` to toggle this)
- Added hovertext options info for more objects: oKeycard, oLevelEnd, oMicrowave1, oTrapPlate, oTrapReactor, oTriggerReactor, oTriggerObjective, oRenameObjective
- Object submenus will try to keep the current value. This applies to numbers (var1/var2, eg. enemy patrol length) and text (`oCommandCutscene`, `oSnipePickup`, `oLevelTrans`). Note that cancelling still wipes values
- Object submenu is slightly less transparent
- ZIP upload notice shows your current replace options
- Added extra notice when upload to Steam, "Waiting for Steam confirmation". This occurs after "content uploaded" but before Steam confirms the upload
- While in the Tools tab, pipes are now more visible if the "select pipes" button is active
- Changed some wallpaper descriptions to exclude the word "wallpaper" for consistency



## Fixes

### DECP

- Fixed motorcycle objects being cover (which caused a crash)
- Fixed duped objects (shift+LMB) not inheriting xyscale
- Fixed walls being erased while dragging in the Tools tab
- Fixed text alignment issues
- Fixed some object submenus being too narrow
- Fixed hovertext object nicenames missing for the last objects in each tab's set
- (minor) Fixed trigger objects having black text
- (minor) Fixed MWU/D not scrolling tabs while on the Tools tab
- (minor) Fixed Tools sidebar hover info alignment
- (minor) Fixed bounding box for `oLightfixtureGarage`, which prevented it from being clicked after placing
- (minor) Fixed submenu text vertical alignment not being centered

### Vanilla

- (vanilla) Elevator doors (`oDoorElevator`) now use the closed/open option set in the editor
- (vanilla) Fixed some enemies not using the enemy submenu. Affects: `oZombBoss1` (Puff Idle), `oVampBoss11` (Evelyn), `oVampBoss12` (Amber), `oVampBoss2` (Madam Stela)
- (vanilla) Fixed `oZombBoss1Idle` (Puff) using the wrong sprite (`sZombBoss1Idle`)
- (vanilla) Fixed `oZombBoss1Cover` not showing what's rendered in-game
- (vanilla) Fixed placing an inverted object (yscale=-1) while holding `Ctrl` still moving the object down by 4px
- (vanilla) Removed Frames submenu for enemies, as it has no effect in-game
- (vanilla) Fullscreen is now exited when saving/loading a level (Previously the save/load dialog would be hidden behind the game window) **todo:test**


# TODO

- [ ] Add hoverext for new objects
- [ ] Add ShadowMoon's new BG and objects
- [ ] Add blue reaper (due for the release after this one)
