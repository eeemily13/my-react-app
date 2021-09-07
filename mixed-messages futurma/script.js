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
    set fryQuotes(fryQuotes){
        this._quotes.fryQuotes;
    },
    get benderQuotes () {
        return this._quotes.benderQuotes;
    },
    set benderQuotes (benderQuotes) {
        this._quotes.benderQuotes;
    },
    get leelaQuotes () {
        return this._quotes.leelaQuotes;
    },
    set leelaQuotes(leelaQuotes){
        this._quotes.leelaQuotes;
    },
    get drZoidbergQuotes () {
        return this._quotes.drZoidbergQuotes;
    },
    set drZoidbergQuotes(drZoidbergQuotes){
        this._quotes.drZoidbergQuotes;
    },
    get amyQuotes () {
        return this._quotes.amyQuotes;
    },
    set amyQuotes(amyQuotes){
        this._quotes.amyQuotes;
    },
    get professorQuotes () {
        return this._quotes.professorQuotes;
    },
    set professorQuotes(professorQuotes){
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
    const fryQuotes = this.getRandomQuotefromMessage('fry');
    const benderQuotes = this.getRandomQuotefromMessage('bender');
    const leelaQuotes = this.getRandomQuotefromMessage('leela');
    const drZoidbergQuotes = this.getRandomQuotefromMessage('dr zoidberb');
    const amyQuotes = this.getRandomQuotefromMessage('amy');
    const professorQuotes = this.getRandomQuotefromMessage('professor');



    return fryQuotes + benderQuotes + leelaQuotes + drZoidbergQuotes + amyQuotes + professorQuotes ;
}

};

mixedMessagesFuturama.addQuoteToMessage('fry', 'Valentine’s Day is coming? Oh crap – I forgot to get a girlfriend again.', 'Fry');
mixedMessagesFuturama.addQuoteToMessage('dr zoidberg', 'Your music’s bad and you should feel bad!', 'Dr. Zoidberg');
mixedMessagesFuturama.addQuoteToMessage('bender','I’m so embarrassed. I wish everybody else was dead.', 'Bender');
mixedMessagesFuturama.addQuoteToMessage('leela', 'This is my first visit to the Galaxy of Terror and I’d like it to be a pleasant one.', 'Leela');
mixedMessagesFuturama.addQuoteToMessage('professor', 'Good news, everyone! I’ve taught the toaster to feel love!', 'Professor');
mixedMessagesFuturama.addQuoteToMessage('bender', 'Game’s over, losers! I have all the money. Compare your lives to mine and then kill yourselves.', 'Bender');
mixedMessagesFuturama.addQuoteToMessage('dr zoidberg','Two oil changes for the price of one! Now if I could afford the one, and the car.','Dr. Zoidberg');
mixedMessagesFuturama.addQuoteToMessage('fry', 'My folks were always on me to groom myself and wear underpants. What am I, the pope?', 'Fry');
mixedMessagesFuturama.addQuoteToMessage('leela','Fry, please try to understand. You’re a man. I’m a woman. We’re just too different.', 'Leela');
mixedMessagesFuturama.addQuoteToMessage('amy', 'Finally, a uniform I’d be happy to be caught dead in!', 'Amy');
mixedMessagesFuturama.addQuoteToMessage('bender', 'Hey sexy mama. Wanna kill all humans?', 'Bender');






const futuramaQuotes = mixedMessagesFuturama.generateRandomQuote();
console.log(futuramaQuotes);