const TelegramBot = require('node-telegram-bot-api');

const token = '8526714287:AAF2ZdUbX6kel9XNufoW7p00itIXlr8g5XA';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {

    if (!msg.text) return;

    const text = msg.text.toLowerCase();

    let reply = "kechirasiz, tushunmadim 🤖";

    if (text.includes('salom')) {
        reply = "assalomu alaykum 😊";
    }

    else if (text.includes('nima gap')) {
        reply = "hammasi zo‘r 😄";
    }

    else if (text.includes('yordam')) {
        reply = "ha, nima muammo bor? 🤝";
    }

    else if (text.includes('ism')) {
        reply = "men Telegram botman 🤖";
    }

    else if (text.includes('rahmat')) {
        reply = "arzimaydi 😊";
    }

    else if (text.includes('калесиз')) {
        reply = "ha shu yerdaman 😄";
    }

    bot.sendMessage(msg.chat.id, reply);
});