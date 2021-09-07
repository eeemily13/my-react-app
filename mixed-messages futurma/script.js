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

mixedMessagesFuturama.addQuoteToMessage('familyQuotes','We’re trying to give you the Christmas spirit, dickhole! ', 'Sweet Dee');
mixedMessagesFuturama.addQuoteToMessage('familyQuotes', '[Reading a note from Charlie] Taked baby. Meet at later bar, night or day sometime.', 'Sweet Dee');
mixedMessagesFuturama.addQuoteToMessage('familyQuotes', 'Yeah, well, you’ve never once seen me wash my testicles either, but that doesn’t mean I don’t do it every Friday. ', 'Charlie');
mixedMessagesFuturama.addQuoteToMessage('familyQuotes','Animals should be food, rugs and trophies. Why do you think I’m wearing a leather suit?  ', 'Frank');
mixedMessagesFuturama.addQuoteToMessage('familyQuotes', 'I’m not asking you to do much. Just turn a blind eye while I rob this place stupid.', 'Sweet Dee');

mixedMessagesFuturama.addQuoteToMessage('familyQuotes','Do not plug an open wound with trash. ', 'Mac');
mixedMessagesFuturama.addQuoteToMessage('familyQuotes','We’re trying to give you the Christmas spirit, dickhole! ', 'Sweet Dee');
mixedMessagesFuturama.addQuoteToMessage('familyQuotes','We’re trying to give you the Christmas spirit, dickhole! ', 'Sweet Dee');

mixedMessagesFuturama.addQuoteToMessage('hardworkQuotes', 'Cat in the wall. Now you’re talking my language.', 'Charlie');
mixedMessagesFuturama.addQuoteToMessage('hardworkQuotes', 'Mac, I’m gonna stop you right there. First of all, your breath smells like an old lady fart passing through an onion.', 'Sweet Dee');
mixedMessagesFuturama.addQuoteToMessage('hardworkQuotes', 'Then, I’ll just regress, because I feel I made myself perfectly redundant.', 'Charlie');
mixedMessagesFuturama.addQuoteToMessage('hardworkQuotes', 'Charlie, make a move. Just tell her you wanna bang her', 'Mac');
mixedMessagesFuturama.addQuoteToMessage('hardworkQuotes', ' The acid’s makin’ me feel like I gotta take a dump.', 'Frank');
mixedMessagesFuturama.addQuoteToMessage('hardworkQuotes', ' RUM HAM! RUM HAM! I’m sorry rum ham! I’m sorry…', 'Frank');
mixedMessagesFuturama.addQuoteToMessage('hardworkQuotes', 'Well, I don’t know how many years on this Earth I got left. I’m gonna get real weird with it. ', 'Frank');


mixedMessagesFuturama.addQuoteToMessage('lookingForwardQuotes', 'Dude, do you have a boner right now?', 'Dennis');
mixedMessagesFuturama.addQuoteToMessage('lookingForwardQuotes', 'Name’s Artemis. I have a bleached asshole.', 'Artemis');
mixedMessagesFuturama.addQuoteToMessage('lookingForwardQuotes', 'Smoke some cigarettes. The smoke will suffocate the bacteria in your stomach. ', 'Mac');
mixedMessagesFuturama.addQuoteToMessage('lookingForwardQuotes', '[Reading Charlie’s script] “Hello fellow American. This you should vote me. I leave power. Good. Thank you. Thank you. If you vote me, I’m hot.” What? “Taxes. They’ll be lower. Son. The democratic vote for me is right thing to do, Philadelphia. So do.” ', 'Dennis');
const ItsAlwaysSunny = mixedMessagesFuturama.generateRandomQuote();
console.log(ItsAlwaysSunny)