"use strict"

function ratingCompetition(el, items, options){
    return new RatingCompetition(el, items, options);
}

class RatingCompetition {
    
    constructor (el, items, options)
    {
        this.element = document.querySelector(el);
        this.items = items;
        this.options = options;
        this.Render();
    }

    Render()
    {
        
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