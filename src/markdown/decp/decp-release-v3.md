## 3.2.0

- Feature: 8 new party light colours (requires DCP 1.5.0+)

## 3.1.1

- Fix: Transition objects were showing 0 as the level name

## 3.1.0

### Features

- Press `Insert` to toggle the mouse collision mode. Show help text (`F1`) to see the current status, it's at the bottom.
- New reference object for single screen levels

### Fixes

- Fixed bounding boxes for all sprites, they now match vanilla (try `oSub` and `oRef1`). Use `Insert` to use rectangles instead of bboxes
- (vanilla) Backgrounds: Removed "city again"
- (vanilla) Backgrounds: Planes of Life now changes the BG image
- (vanilla) `oLightFade`: Added some transparency
- `oWater`: Changed origin (click point) to be on its bottom (makes aligning with room bottom easier)
- `oWater`: Text is a bit clearer

## 3.0.1

### Fixes

- (vanilla) Saving without specifying the file extension ".nc" now automatically adds it
- (vanilla) Temp grid is now removed from memory if validation checks failed, decreasing the amount of unused memory that builds up while the editor is used
- Saving still saved when validaiton checks failed (applied to: unmatched stairs & level transition objects)


## 3.0.0

The first Steam-enabled release since v2. Includes all previous preview build features.

### Fixes

- Used proper sprite for `oSoulBall` (thanks Nintee!)
- Dropdowns are now cleared when panning or using Workshop menu items
- Workshop: Fixed an issue where cancelling the Save As dialog caused a fatal error in `update_map`
- Workshop: Fixed an issue where cancelling the _Workshop ID_ dialog set the ID to `0`
