To use the log options, add these launch options via Steam:

`-debugoutput log-debug.txt -output log-output.txt`

Two log files will appear in the DEADBOLT folder. They'll be appended every time to boot the game, and will keep growing in size until you remove the launch options.

- <span class="color-teal">log-debug</span>: The default GameMaker log. Helps find obvious errors, but not very interesting
- <span class="color-teal">log-output</span>: Custom logs made by DCP and Hopoo. DCP logs are almost always prefixed with an identifier wrapped in [square brackets]. "FAILED_KEY" logs are normal

Enable the options `debuglog` in the JSON config for even more info, but be warned: these are disabled by default because of how much data they output.