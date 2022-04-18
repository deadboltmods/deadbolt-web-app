## Edit weapons

Edit weapons in `DEADBOLT/JSON/`<span class="color-teal">weapons.json</span>

Editable weapons is a WIP feature. Many stats are still hardcoded, particularly for guns (eg. full/semi-auto).

"Bullet" weapons are templates, and are not usable weapons. Their stats are used for special weapons, traps, and shotguns.

New weapons can't be added via <span class="color-teal">weapons.json</span> unfortunately, due to limitations of the game engine. However, you can edit existing weapons to your tastes. And if you can draw pixel art, you can submit your own weapon sprites on the [Deadbolt modding discord](https://discord.gg/8dqM6xDmrC), and have your custom weapon added to the game (warning: there's a lot of work involved for this, as there are lots of sprites that will need making).

## Edit weapons as a spreadsheet

The easiest way to mod weapons is to use the spreadsheet. DCP's <span class="color-teal">weapons.json</span> file is a straight export from the <a href="https://docs.google.com/spreadsheets/d/1qRyF3laHK2bKYyI552aA5PElzib8ak1FfLNxDId9Lzg/edit#gid=482879943">master Deadbolt spreadsheet</a>.

You can save your own version with File &gt; make a copy, then use [this add-on](https://gsuite.google.com/u/0/marketplace/app/export_sheet_data/903838927001) to export the data to a JSON. Jsut rename the exported file to <span class="color-teal">weapons.json</span>, and replace DCP's version with yours, and your edits will appear in-game.
