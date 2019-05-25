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
        this.Render();
    }

    Render()
    {
        console.log(this.element);
    }

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