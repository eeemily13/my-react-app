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
get newQuotes (){
    return {
        fryQuotes: this.fryQuotes,
        benderQuotes: this.benderQuotes,
        leelaQuotes: this.leelaQuotes,
        drZoidbergQuotes: this.drZoidbergQuotes,
        amyQuotes: this.amyQuotes,
        professorQuotes: this.professorQuotes,
    }
},
addQuoteToMessage(personQuote, quoteBody, authorName) { const quoteInfo = {
    body: quoteBody,
    author: authorName,
};
return this._quotes[personQuote].push(quoteInfo)
},
getRandomQuotefromMessage(personQuote){
    const messages = this._quotes[personQuote];
    const randomQuote = Math.floor(Math.random() * messages.length);
    return messages[randomQuote];
},
generateRandomQuote() {
    const fryQuotes = this.getRandomQuotefromMessage('fry');
    const benderQuotes = this.getRandomQuotefromMessage('bender');
    const leelaQuotes = this.getRandomQuotefromMessage('leela');
    const drZoidbergQuotes = this.getRandomQuotefromMessage('dr Zoidberb');
    const amyQuotes = this.getRandomQuotefromMessage('amy');
    const professorQuotes = this.getRandomQuotefromMessage('professor');



    return fryQuotes + benderQuotes + leelaQuotes + drZoidbergQuotes + amyQuotes + professorQuotes ;
}

};

mixedMessagesFuturama.addQuoteToMessage('fry', 'Valentine’s Day is coming? Oh crap – I forgot to get a girlfriend again.', 'Fry');



const ItsAlwaysSunny = mixedMessagesFuturama.generateRandomQuote();
console.log(ItsAlwaysSunny)