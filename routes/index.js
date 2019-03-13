'use strict';

class RouterBuilder {

    build(app) {
        app.use('/events', require('./events'));
    }
}

module.exports = RouterBuilder;