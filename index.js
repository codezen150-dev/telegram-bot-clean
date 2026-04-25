require('dotenv').config();
const { Telegraf } = require('telegraf');

// Tokenni .env fayldan olish
const token = process.env.BOT_TOKEN;

if (!token) {
    console.error('XATO: BOT_TOKEN .env faylda ko\'rsatilmagan!');
    process.exit(1);
}

const bot = new Telegraf(token);

// Start komandasi
bot.start((ctx) => {
    ctx.reply('Assalomu alaykum! Botimizga xush kelibsiz 😊');
});

// Yordam komandasi
bot.help((ctx) => {
    ctx.reply('Qanday yordam bera olaman? Quyidagi so\'zlarni yozib ko\'ring:\n- Salom\n- Nima gap?\n- Isming nima?\n- Rahmat');
});

// Matnli xabarlarga javob berish
bot.on('text', (ctx) => {
    const text = ctx.message.text.toLowerCase();

    if (text.includes('salom')) {
        ctx.reply('Assalomu alaykum 😊');
    }
    else if (text.includes('nima gap')) {
        ctx.reply('Hammasi zo‘r, o\'zingizda nima gaplar? 😄');
    }
    else if (text.includes('ism')) {
        ctx.reply('Men professionallar uchun yaratilgan aqlli botman! 🤖');
    }
    else if (text.includes('rahmat')) {
        ctx.reply('Arzimaydi, doimo xizmatingizdaman! 🤝');
    }
    else if (text.includes('yordam')) {
        ctx.reply('Ha, qanday yordam kerak? Buyruqlardan foydalaning: /help');
    }
    else {
        ctx.reply('Kechirasiz, tushunmadim 🤖. /help tugmasini bosing.');
    }
});

// Xatoliklarni ushlash
bot.catch((err, ctx) => {
    console.log(`Error for ${ctx.updateType}`, err);
});

// Botni ishga tushirish
bot.launch()
    .then(() => console.log('✅ Bot muvaffaqiyatli ishga tushdi!'))
    .catch((err) => console.error('❌ Botni ishga tushirishda xato:', err));

// Botni to'xtatish (xavfsiz yopish uchun)
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
