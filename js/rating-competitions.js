"use strict"

function ratingCompetition(el, items, options){
    return new RatingCompetition(el, items, options);
}

class RatingCompetition {
    
    constructor (el, items, options)
    {
        this.element = el;
        this.items = items;
        
        let defaultOptions = {
            animationType: 'ease', 
            maxValue: 100,
        }

        this.options = Object.assign({}, defaultOptions, options);
        
        this.Render();
    }

    

    Render()
    {
        let template = "";
        for(let i = 0; i < this.items.length; i++){
            template += 
            `<div class="rating-item">`+
                `<hr class="track" style="background-color:${this.items[i].roadColor};">`+
                `<div class="car ${this.options.animationType}" id="car-${this.items[i].id}" style="left:${this._ValueToPercent(this.items[i].value)}%">`+
                    `<p class="name">${this.items[i].name}</p>`+
                    `<img src="${this.items[i].carPath}" alt="" class="racing-car">`+
                `</div>`+
                `<img src="img/finish.png" alt="" class="finish">`+
                `<div class="leader"></div>`+
            `</div>`
        }
        this.element.innerHTML = template;
    }

    /**
     * @param  number id
     * @param  number value
     */
    Move(id, value)
    {
        let item = this.items.find(item => item.id == id);
        item.value = value;
        document.querySelector(`#car-${id}`).style.left = `${this._ValueToPercent(item.value)}%`;
        this._RenderLeader();
    }


    GetLeader()
    {
        return this.GetLeaders()[0];
    }

    GetLeaders()
    {
        return this.items.sort((a,b) => b.value-a.value);
    }

    Set(id, value)
    {
        let item = this.items.find(item => item.id == id);
        item.value = value;
        this.Render();
    }

    
    _ValueToPercent(value){
        if(value >= this.options.maxValue){
            value = this.options.maxValue;
        }
        return (value * 100) / this.options.maxValue;
    }

    _RenderLeader(){
        let leader = this.GetLeader();
        let leaders = this.element.querySelector('.leader.active');
        if(leaders != null){
            leaders.classList.remove('active');
        }
        if(leader.value > 0){
            this.element.querySelector(`#car-${leader.id}`).closest('.rating-item').querySelector('.leader').classList.add('active');
        }
    }
}