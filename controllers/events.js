'use strict';

const models = require('../models');
const Event = models.Item;

class EventController {

    constructor() {
        this.events = [];
        this.accumulator = 1;
    }

    addEvent(name, max, date, location) {
        const event = new Event(this.accumulator, name, max, date, location);
        this.events.push(event);
        this.accumulator ++;
    }

    getAll() {
        return this.events;
    }

    getID(myID) {
        for (let i = 0; i < this.events.length; i++){
            if (this.events[i].id === myID) {
                return this.events[i];
            }
        }

    }

    getSearch(from, to, limit) {
        let count = 0;
        let tab = [];
        for (let j = 0; j < this.events.length; j++){
            if (this.events[j].date >= from && this.events[j].date <= to) {
                count += 1;
                if (count < limit) {
                    tab.push(this.events[j]);
                }
            }
        }

        return tab;
    }

    changeAttribute(max, date, myID) {
        for (let k = 0; k < this.events.length; k++){
            if (this.events[k].id === myID) {
                this.events[k].max = max;
                this.events[k].date = date;
                return this.events[k];
            }
        }
    }

    deleteID(myID) {
        const idx = this.events.findIndex((ev) => ev.id === id);
        this.events.splice(idx, 1);
        return true;
    }
}

module.exports = new EventController();
