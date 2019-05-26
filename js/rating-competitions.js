"use strict"

function ratingCompetition(el, items, options){
    return new RatingCompetition(el, items, options);
}

class RatingCompetition {
    
    constructor (el, items, options)
    {
        this.element = el;
        this.items = items;
        this.options = options;

        if(options.maxValue){
            this.maxValue = options.maxValue;
        }
        
        this.Render();
    }

    maxValue = 100;

    Render()
    {
        let template = "";
        for(let i = 0; i < this.items.length; i++){
            template += 
            `<div class="rating-item">`+
                `<hr class="track" style="background-color:${this.items[i].roadColor};">`+
                `<div class="car" style="left: ${this.items[i].value}%">`+
                    `<p class="name">${this.items[i].name}</p>`+
                    `<img src="${this.items[i].carPath}" alt="" class="racing-car">`+
                    `<div class="tooltop">`+
                    `</div>`+
                `</div>`+
                `<img src="img/finish.png" alt="" class="finish">`+
                `<div class="leader"></div>`+
            `</div>`
        }
        this.element.innerHTML = template;
    }

    /**
     * @param  {} id
     * @param  {} value
     */
    Move(id, value)
    {

    }


    GetLeader()
    {

    }

    GetLeaders()
    {

    }
}