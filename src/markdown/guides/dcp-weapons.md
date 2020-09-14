## Edit weapons

Edit weapons in `DEADBOLT/JSON/`<span class="color-teal">weapons.json</span>

Editable weapons is a WIP feature. Many stats are still hardcoded, particularly for guns (eg. full/semi-auto).

"Bullet" weapons are templates, and are not usable weapons. Their stats are used for special weapons, traps, and shotguns.

## Edit weapons as a spreadsheet

_The full (non-alpha) release of DCP will not have this extra editing step_

<span class="color-teal">weapons.json</span> is exported from the <a href="https://docs.google.com/spreadsheets/d/1qRyF3laHK2bKYyI552aA5PElzib8ak1FfLNxDId9Lzg/edit#gid=482879943">master Deadbolt spreadsheet</a>. You can save your own version with File &gt; make a copy. [This add-on](https://gsuite.google.com/u/0/marketplace/app/export_sheet_data/903838927001) is used to export the data.

After export, you will need to edit <span class="color-teal">weapons.json</span> to make it work:

1. Take the value of "IDCopy" and put it before that weapon group's opening curly brace, then delete the line for `IDCopy`
1. Do this for every weapon (or use keyboard shortcuts in a code editor to do them all at once, eg Ctrl+D or Ctrl+F2 in [VS Code](https://code.visualstudio.com/))
1. See the screenshots in the Misc folder for reference
