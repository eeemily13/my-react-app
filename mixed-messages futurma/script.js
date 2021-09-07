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
    }
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
        familyQuotes: this.familyQuotes,
        hardworkQuotes: this.hardworkQuotes,
        lookingForwardQuotes: this.lookingForwardQuotes,
    };
},
addQuoteToMessage(quoteType, quoteBody, authorName) { const quoteInfo = {
    body: quoteBody,
    author: authorName,
};
return this._quotes[quoteType].push(quoteInfo)
},
getRandomQuotefromMessage(quoteType){
    const message = this._quotes[quoteType];
    const randomQuote = Math.floor(Math.random() * message.length);
    return message[randomQuote];
},
generateRandomQuote() {
    const familyQuotes = this.getRandomQuotefromMessage('familyQuotes');
    const hardworkQuotes = this.getRandomQuotefromMessage('hardworkQuotes');
    const lookingForwardQuotes = this.getRandomQuotefromMessage('lookingForwardQuotes');
    return `Important quotes to keep you going today!\n${familyQuotes.body} - ${familyQuotes.author}\n${hardworkQuotes.body} - ${hardworkQuotes.author}\n${lookingForwardQuotes.body} - ${lookingForwardQuotes.author} \n- An important inspirational message from The gang from Paddy's Pub -`
}

};

mixedMessages.addQuoteToMessage('familyQuotes','We’re trying to give you the Christmas spirit, dickhole! ', 'Sweet Dee');
mixedMessages.addQuoteToMessage('familyQuotes', '[Reading a note from Charlie] Taked baby. Meet at later bar, night or day sometime.', 'Sweet Dee');
mixedMessages.addQuoteToMessage('familyQuotes', 'Yeah, well, you’ve never once seen me wash my testicles either, but that doesn’t mean I don’t do it every Friday. ', 'Charlie');
mixedMessages.addQuoteToMessage('familyQuotes','Animals should be food, rugs and trophies. Why do you think I’m wearing a leather suit?  ', 'Frank');
mixedMessages.addQuoteToMessage('familyQuotes', 'I’m not asking you to do much. Just turn a blind eye while I rob this place stupid.', 'Sweet Dee');

mixedMessages.addQuoteToMessage('familyQuotes','Do not plug an open wound with trash. ', 'Mac');
mixedMessages.addQuoteToMessage('familyQuotes','We’re trying to give you the Christmas spirit, dickhole! ', 'Sweet Dee');
mixedMessages.addQuoteToMessage('familyQuotes','We’re trying to give you the Christmas spirit, dickhole! ', 'Sweet Dee');

mixedMessages.addQuoteToMessage('hardworkQuotes', 'Cat in the wall. Now you’re talking my language.', 'Charlie');
mixedMessages.addQuoteToMessage('hardworkQuotes', 'Mac, I’m gonna stop you right there. First of all, your breath smells like an old lady fart passing through an onion.', 'Sweet Dee');
mixedMessages.addQuoteToMessage('hardworkQuotes', 'Then, I’ll just regress, because I feel I made myself perfectly redundant.', 'Charlie');
mixedMessages.addQuoteToMessage('hardworkQuotes', 'Charlie, make a move. Just tell her you wanna bang her', 'Mac');
mixedMessages.addQuoteToMessage('hardworkQuotes', ' The acid’s makin’ me feel like I gotta take a dump.', 'Frank');
mixedMessages.addQuoteToMessage('hardworkQuotes', ' RUM HAM! RUM HAM! I’m sorry rum ham! I’m sorry…', 'Frank');
mixedMessages.addQuoteToMessage('hardworkQuotes', 'Well, I don’t know how many years on this Earth I got left. I’m gonna get real weird with it. ', 'Frank');


mixedMessages.addQuoteToMessage('lookingForwardQuotes', 'Dude, do you have a boner right now?', 'Dennis');
mixedMessages.addQuoteToMessage('lookingForwardQuotes', 'Name’s Artemis. I have a bleached asshole.', 'Artemis');
mixedMessages.addQuoteToMessage('lookingForwardQuotes', 'Smoke some cigarettes. The smoke will suffocate the bacteria in your stomach. ', 'Mac');
mixedMessages.addQuoteToMessage('lookingForwardQuotes', '[Reading Charlie’s script] “Hello fellow American. This you should vote me. I leave power. Good. Thank you. Thank you. If you vote me, I’m hot.” What? “Taxes. They’ll be lower. Son. The democratic vote for me is right thing to do, Philadelphia. So do.” ', 'Dennis');
const ItsAlwaysSunny = mixedMessages.generateRandomQuote();
console.log(ItsAlwaysSunny)