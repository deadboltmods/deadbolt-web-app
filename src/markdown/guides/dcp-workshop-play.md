## Playing Custom Campaigns/Dialogue

<span class="color-r">Custom campaigns is a WIP feature. The approach outlined here will be refined.</span>

DCP v1.3.0 made it possible to load custom **dialogue** or entire **campaigns** from the Steam Workshop.

To use a custom campaign or dialogue set, edit `JSON\globalconfig.json` and enter the item's workshop item's ID in the relevant part of the `path` settings.

For example, to load the levels and dialogue from item <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2215574282">2215574282</a>, edit your path settings to be:

        "paths": {
            "workshop_id_campaign_stages": "2215574282",
            "workshop_id_campaign_dialogue": "2215574282",
            "level_filename_prefix": "dcp_"
        },

The 3rd setting depends on the workshop item. Please refer to the item's description to find out if it's needed.

To undo these, replace the value of all 3 settings with <span class="color-r">false</span>.
