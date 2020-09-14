## Publish with custom.json

To publish levels with <span class="color-purple">custom.json</span>, upload your level as a zip containing your level plus <span class="color-purple">custom.json</span>.

You can subscribe to [this workshop item](https://steamcommunity.com/sharedfiles/filedetails/?id=2190078536) and open the item's files on your computer to see this in action.

## Publish sprites/campaigns/dialogue

To publish a custom campaigns, dialogue sets, or sprites, your levels/dialogue/sprites must be put into a folder named:

- <span class="color-teal">Sprites</span> - `*.png` files
- <span class="color-teal">Stages</span> - `*.nc` files
- <span class="color-teal">Dialogue</span> - `*.json` files

Your zip should **only** contain one or both of these folders.

If your levels use a <span class="color-purple">custom.json</span> file, put it inside the <span class="color-teal">Stages</span> folder.

Files **must** be named the same as in the base game, for both dialogue and levels.

### Custom level names

To bypass game logic tied to level filenames, level files <em>can</em> be prefixed.

This prefix should be specified in the player's globalconfig.json, under `level_filename_prefix` (see above).


### Fallbacks

Since v1.4.0, if a dialogue JSON file is missing, the vanilla dialogue JSON file will be used instead. However, there is currently no fallback for levels.
