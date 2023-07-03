const TelegramBot = require('node-telegram-bot-api');

const token = '6067840566:AAFlrdQ8GLhFMsME17Lrh3opN57VcO_V0CA';
const webAppUrl = 'https://www.google.com/';

const bot = new TelegramBot(token, {polling: true});

const start = () => {
    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;
        if (text === '/start') {
            await bot.sendMessage(chatId, 'A button will appear below, please fill out the form', {
                reply_markup: {
                    keyboard: [
                        [{text: 'Fill the form', web_app: {url: webAppUrl}}]
                    ]
                }
            });
        }
        if (text === '/shop') {
            await bot.sendMessage(chatId, 'Click on the button to place an order', {
                reply_markup: {
                    inline_keyboard: [
                        [{text: 'Make an order', web_app: {url: webAppUrl}}]
                    ]
                }
            });
        }
    });
    console.log('bot was started');
}

start();