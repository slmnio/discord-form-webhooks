# Google Forms -> Discord Webhooks
Cleaner and easier to customise webhooks from Google Forms to Discord (or wherever else)

Modified from [Iku/Google-Forms-to-Discord](https://github.com/Iku/Google-Forms-to-Discord). This code makes it easier to have more inline responses. If you just want it to dump every answer, use the original code.

# Setup

- Follow the setup instructions in the original repo, but paste the script [here](https://github.com/slmnio/discord-form-webhooks/blob/main/code.js).
- Edit the EMBED_TEMPLATE as you'd like. Follow the Discord developer resources on [webhooks](https://discord.com/developers/docs/resources/webhook#execute-webhook) and [embeds](https://discord.com/developers/docs/resources/channel#embed-object).
- You can test it on [this embed visualiser](https://leovoel.github.io/embed-visualizer/) - you'll just need to change from `{ "embeds": [{ /*embed info here*/ }] }` to `{ "embed": { /*embed info here*/ } `
