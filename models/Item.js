'use strict';

class Item {

    constructor(id, name, max, date, location) {
        this.id = id;
        this.name = name;
        this.max = max || 20;
        this.date = date || Date.now();
        this.location = location;
        this.participants = [];
    }
}

module.exports = Item;