const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    const voiceChannelId = '1531117523376934932';
    const channel = client.channels.cache.get(voiceChannelId);
    
    if (channel) {
        joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
        console.log("دخل البوت الروم الصوتي بنجاح!");
    } else {
        console.log("ما لقيت الروم الصوتي، تأكد من الآي دي!");
    }
});

client.login(process.env.TOKEN);
