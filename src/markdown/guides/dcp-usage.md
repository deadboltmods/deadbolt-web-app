## Install

1. Rename <span class="color-teal">data.win</span> in the DEADBOLT folder to something else (eg. <span class="color-teal">data.vanilla.win</span>).
1. Drop all the files from the <span class="color-teal">Game files</span> folder into the DEADBOLT folder.

## Enable features

Most mod options are disabled by default. Enable them in `DEADBOLT/JSON/globalconfig.json`

Some settings will take effect when you restart the level, others need the game to be restarted (the game restart hotkey is Pause/Break, next to Scroll Lock)

## Saving

Saving is possible since 1.4.0. Saves are both made <span class="color-r">and loaded</span> from a new folder, inside Deadbolt's usual save folder:

`%LocalAppData%\deadbolt_game\`<span class="color-teal">Saves</span>`\DCP`

To transfer existing vanilla save files, just copy them into this folder.

If you are playing a custom campaign from the workshop, save files will be made in a workshop ID folder, ie:

`%LocalAppData%\deadbolt_game\`<span class="color-teal">Saves</span>`\(workshop_id)`

## Custom levels

Like save files, custom levels also have their own folder in the deadbolt_game appdata folder. The full path is:

`%LocalAppData%\deadbolt_game\`<span class="color-teal">Levels</span>

This folder does not exist by default. You'll need to create it before you can add custom levels to it.

### Using custom.json

You can set new level options for your custom maps with <span class="color-purple">custom.json</span>. A starter version is inside the DCP zip, in the Workshop folder.

To use it, place it inside your <span class="color-teal">Levels</span> folder. It will affect all other levels in that folder.

To configure it, use this app or edit it manually. The full list of settings is below.

