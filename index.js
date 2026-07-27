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

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // 1. الدخول للروم الصوتي
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

    // 2. إرسال رسالة الترحيب وتثبيتها في الشات (حط آي دي الروم النصي هنا بين العلامات)
    const textChannelId = 'حط_آي_دي_الروم_النصي_هنا';
    const textChannel = client.channels.cache.get(textChannelId);

    if (textChannel) {
        try {
            const sentMessage = await textChannel.send('يا مرحبه و هلا و غلا!');
            await sentMessage.pin();
            console.log("تم إرسال رسالة الترحيب وتثبيتها بنجاح!");
        } catch (error) {
            console.error("صار خطأ في إرسال أو تثبيت الرسالة:", error);
        }
    }
});

client.login(process.env.TOKEN);
