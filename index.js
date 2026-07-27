const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
  ] 
});

const CHANNEL_ID = '1531117523376934932';

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  try {
    const channel = await client.channels.fetch(CHANNEL_ID);
    if (channel) {
      const message = await channel.send('هلا بك يا مجيد! البوت شغال ومثبت هنا 📌');
      await message.pin();
      console.log('تم تثبيت الرسالة بنجاح!');
    }
  } catch (error) {
    console.error('حدث خطأ أثناء إرسال أو تثبيت الرسالة:', error);
  }
});

client.login(process.env.TOKEN);
