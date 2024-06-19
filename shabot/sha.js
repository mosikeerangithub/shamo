const telegramBot=require('node-telegram-bot-api');

const TOKEN = '7146782237:AAGatNwzFkY_ZpbT2ap2EsRdy_p1EHIjqD4';

const bot=new telegramBot(TOKEN,{polling:true});

bot.on('message',(message)=>{
    let chatid=message.from.id;
    const mess = message.text.toString().toLowerCase();

    if (mess == 0) {
        bot.sendMessage(chatid, 'Hello! I am your Telegram bot.');
      }
      
      else if (mess == 0) {
        bot.sendMessage(chatid, 'You can ask me for help anytime.');
      }
      
      else if (mess == 'hai' || mess == 'hello') {
        bot.sendMessage(chatid, 'Hello! Welcome to our library!');
        bot.sendMessage(chatid, 'Here you can get the books in the following domains:');
        bot.sendMessage(chatid, 'Artificial Intelligence (AI), Blockchain, Cyber security, Data Science, Deep Learning, Machine Learning, Natural Language Processing (NLP), Neural Networks & Networking, Robotics');
      }
      else if (mess == 'i need blockchain book') {
        bot.sendMessage(chatid, "Ok! Which author's book are you interested ?");
        bot.sendMessage(chatid, 'Here are some famous author in blockchain:');
        bot.sendMessage(chatid, 'Andreas M. Antonopoulos, Don Tapscott and Alex Tapscott, Jimmy Song, Saifedean Ammous, Chris Burniske and Jack Tatar, Tiana Laurence, Imran Bashir, Vitalik Buterin & Gavin Wood');
      }
      else if (mess == 'andreas') {
        bot.sendMessage(chatid, "Mastering Bitcoin: Unlocking Digital Cryptocurrencies, Mastering Ethereum: Building Smart Contracts and Dapps");
      }
      else if (mess == 'don and alex') {
        bot.sendMessage(chatid, "Blockchain Revolution: How the Technology Behind Bitcoin and Other Cryptocurrencies is Changing the World");
      }
      else if (mess == 'jimmy song') {
        bot.sendMessage(chatid, "Programming Bitcoin: Learn How to Program Bitcoin from Scratch");
      }
      else if (mess == 'vitalik buterin'|| mess =='gavin wood') {
        bot.sendMessage(chatid, "Ethereum Whitepaper");
      }
      else if (mess == 'thank you') {
        bot.sendMessage(chatid, 'Anytime! See you soon');
      }
      else if (mess == 'bye') {
        bot.sendMessage(chatid, 'bye!!! have a good day');
      }
      
      else {
        bot.sendMessage(chatid, 'Received your message!');
      }
});
console.log('bot is running');