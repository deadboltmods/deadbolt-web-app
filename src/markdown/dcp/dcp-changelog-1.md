
## 1.6.0

### Mechanics (custom local only)

- Animated teleport (`Shift` + `MMB`)
  - Works for 3 characters: Reaper (sP), Cardinal (sOni1), and Ibzan (sSkeleBoss2)
  - Reaper: Uses cut sprites for teleport out & in
  - Cardinal: Uses cut sprites for teleport out, and temp reversed sprites for in
  - Ibzan: Uses his death teleports for both (doesn't look good)
  - Enable with the experimental "realteleport" option
- Bodyswap. Use `Alt` + `MMB` to swap places with any enemy
- _These could become character perks if flshed out, I'm very open to feedback on them_

<div class="wideout">

  <!-- ![](@/assets/images/screenshots/dcp/1.6/teleport-finished.gif) -->
  ![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/dcp/1.6/teleport-finished.gif)
</div>

### Globalconfig:

- Option for controller support (warning: only works if `dcpc_originalresolution` is enabled and not in fullscreen)
- Added car trunk options from custom.json (they will no longer work in custom.json)
- Strobe light option. Disables strobes but keeps flashes from other sources (gunshots, arcade machines etc)

### Custom levels screen:

- Mousewheel now scrolls a full page (12 items at a time, instead of 1)
- Increased max number of pages from 10 to 30 (so you can have 360 levels, instead of 120)
- Sound no longer plays if you're at the top or bottom of the list
- Sound on hover changed to wClick

### New objects

- oMotorcycleBig & oMotorcycleSmall. Both use cut sprites. They have 2 frames each: one empty, one with a skeleton.
- oStripperVamp & oStripperPole. Both are background only

<div class="wideout">

  <!-- ![](@/assets/images/screenshots/dcp/1.6/stripper.gif) -->
  ![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/dcp/1.6/stripper.gif)
</div>

### Misc

- Added instructions.txt to the ZIP
- Removed lots of unnecessary files as they're now available online

### Fixes

- Charon is now technically usable. He has placeholder movement + aim sprites (both his idle sprites), so he can move and shoot. He works best with Severed Lich Arm
- New game would stay on a black screen if `skip_cutscenes_campaign` was enabled before starting a new game
- Added 2 mising sounds: wMicrowaveBeep + wSawedReady

### Known Issues:

- Skipping cutscenes can prevent progress in levels that trigger cutscenes (e.g. 1-6 The Bogeyman, after inspecting the candle)



## 1.5.0

- Support for more 8 new colours for `oPartyLight`: Hot Pink, Purple, Teal, Light Blue, Lime Green, Green, Yellow, Orange.
- Fix: Critical crash with weapon_other_index in swap_weapons



## 1.4.0

Saving is now possible. Saves are both made and loaded from a new location Deadbolt's usual save folder (copy vanilla saves here to use them): `%LocalAppData%\deadbolt_game\Saves\DCP`. If you are playing a custom campaign (by using a workshop ID in globalconfig.json), save files will be made in a workshop ID folder, ie: `%LocalAppData%\deadbolt_game\Saves\<workshop_id>`. This means you can save your progress in custom campaigns, separate from the base game.

- Allow saving/loading to a custom save file directory
- Allow custom campaigns to save to their own file
- Added readme section for using/publishing custom workshop content
- Fix: Added lots of sprite fallbacks. Melee-only NPCs should now be able to use any weapon (hitmasks will still be wrong)
- Fix: Set the default value of level_filename_prefix to false to make it more consistent with other default settings
- Fix: Dialogue now loads from vanilla JSON if the path specified in globalconfig.json is invalid

## 1.3.0

- Globalconfig: Option to load all campaign stages from a workshop folder
- Globalconfig: Option to load all JSON dialogue from a workshop folder
- Globalconfig: Option to add a prefix to loaded filenames (use for custom campaigns, to skip level-specific game logic)
- Globalconfig: Option to skip campaign cutscenes
- Workshop (custom.json): New option to ignore carryover weapon (mainly affects custom campaigns)
- New bugs! (probably lol)
- Enabled options by default: `pause_althoversound` + `customlocal_teleport`
- Fix: Vamp2 sprite not working as a playable character (untested)

<div class="wideout">

  <!-- ![](@/assets/images/screenshots/dcp/1.3.0/charon-lich-arm.gif) -->
  ![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/dcp/1.3.0/charon-lich-arm.gif)
</div>

## 1.2.0

- Lots of new options for custom levels in config.json, designed to make NPCs fully playable
    - 3 new player properties: Health, blood type, no ragdoll on death (for NPC sprites with no ragdoll parts)
    - New section `canuse`: Restrict character actions (eg. can't use vents)
- Decreased Bully melee damage (400 > 200). This allows playing as Bouncer at his correct HP (380) and surviving 1 Bully hit
- Enabled the new Workshop pause menu by default
- Added an icon to the Misc folder + new "Custom Icon" section to readme
- Added an example custom.json for Bouncer

## 1.1.0

- Fixed music not playing
- Set music by filename in globalconfig.json (instead of sound file index)
- Added missing sound file wClick.ogg
- Added readme section for Debug Log

## 1.0.0

Initial release. Includes a toon of features, including:

<div class="wideout">

  <!-- ![](@/assets/images/screenshots/dcp/1.6/walk-stealth.gif) -->
  ![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/dcp/1.6/walk-stealth.gif)
  <div class="md-image-caption">Walk sprites by Nintee</div>
</div>

<div class="wideout">

  <!-- ![](@/assets/images/screenshots/features/debug-overlay.png) -->
  ![](https://files.codemuffin.com/deadbolt/cdn/assets/images/screenshots/features/debug-overlay.png)
  <div class="md-image-caption">Debug mode for custom local levels</div>
</div>