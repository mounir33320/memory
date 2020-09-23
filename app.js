class Game{
    cards = [];
    pair = 2;
    level = 1;
    chosenCards = [];
    nbClick = 0;
    lives = 1;
    win = false;
    end = false;

    createDivCol(col){
        var divColElt = document.createElement("div");
        divColElt.setAttribute("class", "col-" + col);
        return divColElt;
    }

    createCards(){
        for(var i = 0; i < this.pair; i++){

            var cardElt = new Card(200,150,i, true,i).getCard();
            this.cards.push(cardElt);

            var cardElt2 = new Card(200,150,i, true,i).getCard();
            this.cards.push(cardElt2);
        }
    }

    randomizeCards(){
        var i,
            j,
            tmp;

        for (i = this.cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = tmp;
        }
        return this.cards;
    }

    displayCards(){
        var randomCards = this.randomizeCards();
        for(var i = 0; i < randomCards.length; i++){
            var divCol = this.createDivCol(3);

            document.querySelector("#mainContainer").appendChild(divCol);

            divCol.appendChild(randomCards[i]);
        }
    }

     show(){

    }

     isIdentic(){

    }

     addPair(){
        this.pair += 2;
    }

     levelUp(){
        this.level += 1
    }
}

class Card{
    height;
    width;
    name;
    display = false;
    className;

    constructor(height,width,name,display,className) {
        this.height = height;
        this.width = width;
        this.name = name;
        this.display = display;
        this.className = className;
    }

     getCard(){
        var cardElt = document.createElement("div");
        cardElt.setAttribute("class",this.className);
        cardElt.setAttribute("style","height:" + this.height + "px;width: " + this.width + "px");
        cardElt.innerText = this.name;
        return cardElt;
    }
}

var game = new Game();
game.createCards();
game.displayCards();













/*function randomize(tab) {
    var i,
        j,
        tmp;

    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}
var tab = [9, 4, 12, 3, 10,55,789,65,635,354,354];
tab = randomize(tab);
console.log(tab);*/




























