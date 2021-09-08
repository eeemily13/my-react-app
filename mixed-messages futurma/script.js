// mixed quotes
const mixedMessagesFuturama = {
    _quotes:{
        fryQuotes: [],
        benderQuotes: [],
        leelaQuotes: [],
        drZoidbergQuotes: [],
        amyQuotes: [],
        professorQuotes: [],
    },
    get fryQuotes () {
        return this._quotes.fryQuotes;
    },
    set fryQuotes(_fryQuotes){
        this._quotes.fryQuotes;
    },
    get benderQuotes () {
        return this._quotes.benderQuotes;
    },
    set benderQuotes (_benderQuotes) {
        this._quotes.benderQuotes;
    },
    get leelaQuotes () {
        return this._quotes.leelaQuotes;
    },
    set leelaQuotes(_leelaQuotes){
        this._quotes.leelaQuotes;
    },
    get drZoidbergQuotes () {
        return this._quotes.drZoidbergQuotes;
    },
    set drZoidbergQuotes(_drZoidbergQuotes){
        this._quotes.drZoidbergQuotes;
    },
    get amyQuotes () {
        return this._quotes.amyQuotes;
    },
    set amyQuotes(_amyQuotes){
        this._quotes.amyQuotes;
    },
    get professorQuotes () {
        return this._quotes.professorQuotes;
    },
    set professorQuotes(_professorQuotes){
        this._quotes.professorQuotes;
    },
get quotes (){
    return {
        fryQuotes: this.fryQuotes,
        benderQuotes: this.benderQuotes,
        leelaQuotes: this.leelaQuotes,
        drZoidbergQuotes: this.drZoidbergQuotes,
        amyQuotes: this.amyQuotes,
        professorQuotes: this.professorQuotes,
    };
},
addQuoteToMessage(personQuote, quoteBody, authorName) { const quoteInfo = {
    body: quoteBody,
    author: authorName,
};
return this._quotes[personQuote].push(quoteInfo)
},
getRandomQuotefromMessage(personQuote){
    const message = this._quotes[personQuote];
    const randomQuote = Math.floor(Math.random() * message.length);
    return message[randomQuote];
},
generateRandomQuote() {
    const fryQuotes = this.getRandomQuotefromMessage('fryQuotes');
    const benderQuotes = this.getRandomQuotefromMessage('benderQuotes');
    const leelaQuotes = this.getRandomQuotefromMessage('leelaQuotes');
    const drZoidbergQuotes = this.getRandomQuotefromMessage('drZoidbergQuotes');
    const amyQuotes = this.getRandomQuotefromMessage('amyQuotes');
    const professorQuotes = this.getRandomQuotefromMessage('professorQuotes');



    return fryQuotes + benderQuotes + leelaQuotes + drZoidbergQuotes + amyQuotes + professorQuotes ;
}

};

mixedMessagesFuturama.addQuoteToMessage('fryQuotes', 'Valentine’s Day is coming? Oh crap – I forgot to get a girlfriend again.', 'Fry');
mixedMessagesFuturama.addQuoteToMessage('drZoidbergQuotes', 'Your music’s bad and you should feel bad!', 'Dr. Zoidberg');
mixedMessagesFuturama.addQuoteToMessage('benderQuotes','I’m so embarrassed. I wish everybody else was dead.', 'Bender');
mixedMessagesFuturama.addQuoteToMessage('leelaQuotes', 'This is my first visit to the Galaxy of Terror and I’d like it to be a pleasant one.', 'Leela');
mixedMessagesFuturama.addQuoteToMessage('professorQuotes', 'Good news, everyone! I’ve taught the toaster to feel love!', 'Professor');
mixedMessagesFuturama.addQuoteToMessage('benderQuotes', 'Game’s over, losers! I have all the money. Compare your lives to mine and then kill yourselves.', 'Bender');
mixedMessagesFuturama.addQuoteToMessage('drZoidbergQuotes','Two oil changes for the price of one! Now if I could afford the one, and the car.','Dr. Zoidberg');
mixedMessagesFuturama.addQuoteToMessage('fryQuotes', 'My folks were always on me to groom myself and wear underpants. What am I, the pope?', 'Fry');
mixedMessagesFuturama.addQuoteToMessage('leelaQuotes','Fry, please try to understand. You’re a man. I’m a woman. We’re just too different.', 'Leela');
mixedMessagesFuturama.addQuoteToMessage('amyQuotes', 'Finally, a uniform I’d be happy to be caught dead in!', 'Amy');
mixedMessagesFuturama.addQuoteToMessage('benderQuotes', 'Hey sexy mama. Wanna kill all humans?', 'Bender');
mixedMessagesFuturama.addQuoteToMessage('professorQuotes',"Everyone's always in favor of saving Hitler's brain, but when you put it in the body of a great white shark. Ohhh, suddenly you've gone too far.", 'professor');
mixedMessagesFuturama.addQuoteToMessage('amyQuotes', "Hey, let's go car shopping! My parents promised if I got all B's they'd buy me a bar, and I got all C's!", 'Amy');





const futuramaQuotes = mixedMessagesFuturama.generateRandomQuote();
console.log(futuramaQuotes);