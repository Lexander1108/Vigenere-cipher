const {Bot} = require('grammy');

require('dotenv').config();

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", (ctx) => ctx.reply("Welcome!"));

bot.start();