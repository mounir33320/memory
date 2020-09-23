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
            var divCol = this.createDivCol(3);
            var divCol2 = this.createDivCol(3);

            var cardElt = new Card(200,150,i, true,i).getCard();
            this.cards.push(cardElt);

            var cardElt2 = new Card(200,150,i, true,i).getCard();
            this.cards.push(cardElt2);
            
            document.querySelector("#mainContainer").appendChild(divCol);
            document.querySelector("#mainContainer").appendChild(divCol2);

            divCol.appendChild(cardElt);
            divCol2.appendChild(cardElt2);
        }
    }

    displayCardsRandom(){

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