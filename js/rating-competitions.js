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
        if(options.animationType && (options.animationType === 'ease' || options.animationType === 'linear')){
            this.animationType = options.animationType;
        }
        
        this.Render();
    }

    animationType = 'ease'; 
    maxValue = 100;

    Render()
    {
        let template = "";
        for(let i = 0; i < this.items.length; i++){
            template += 
            `<div class="rating-item">`+
                `<hr class="track" style="background-color:${this.items[i].roadColor};">`+
                `<div class="car ${this.animationType}" id="car-${this.items[i].id}">`+
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
     * @param  number id
     * @param  number value
     */
    Move(id, value)
    {
        let item = this.items.find(item => item.id == id);
        item.value = value;
        document.querySelector(`#car-${id}`).style.left = `${this._ValueToPrecents(item.value)}%`;
        this._RenderLeader(item.id);
    }


    GetLeader()
    {
        return this.items.sort((a,b) => b.value-a.value)[0];
    }

    GetLeaders()
    {
        return this.items.sort((a,b) => b.value-a.value);
    }

    
    _ValueToPrecents(value){
        if(value >= this.maxValue){
            value = this.maxValue;
        }
        return (value * 100) / this.maxValue;
    }

    _RenderLeader(id){
        let leader = this.GetLeader();
        if(leader.id == id){
            let leaders = document.querySelector('.leader.active');
            if(leaders != null){
                leaders.classList.remove('active');
            }
            if(leader.value > 0){
                document.querySelector(`.rating-item #car-${leader.id}`).closest('.rating-item').lastChild.classList.add('active');
            }
            
        }
    }
}