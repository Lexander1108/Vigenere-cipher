const {Bot, InlineKeyboard, session} = require('grammy');

const {
    conversations,
    createConversation,
  } = require("@grammyjs/conversations");

require('dotenv').config();

const bot = new Bot(process.env.BOT_TOKEN);

const { decodedText } = require('./algorithm.js');
const { encodedText } = require('./algorithm.js');

bot.use(session({ initial: () => ({}) }));
bot.use(conversations());

let userCodeWord = [];
let userText = [];

async function start(conversation, ctx) {
    await ctx.reply('First of all I need you to send me the code word. Please enter it below.');
    const { message } = await conversation.wait();
    await ctx.reply(`Great! Your codeword is: '${message.text}'`, { reply_markup: continueButton });
    userCodeWord.push(message.text);
}

async function encode(conversation, ctx) {
    await ctx.reply('Now you can type the text you want to encode.');
    const { message } = await conversation.wait();
    await ctx.reply('Good');
    userText.push(message.text);
}

bot.use(createConversation(start));
bot.use(createConversation(encode));

const letsGoButton = new InlineKeyboard().text("Let's go!");
const continueButton = new InlineKeyboard().text("Contiue");

bot.command("start", async (ctx) => {
    await ctx.reply("Welcome! I am created to encode and decode your messages with Vigenere cipher. You can try, just press the button below.", { reply_markup: letsGoButton });
});

function conversationStarter(trigger, conversationName){
    bot.callbackQuery(trigger, async (ctx) => {
        await ctx.conversation.enter(conversationName);
    });
}

conversationStarter("Let's go!", "start");
conversationStarter("Contiue", "encode");

bot.start();

module.exports = {userCodeWord, userText}