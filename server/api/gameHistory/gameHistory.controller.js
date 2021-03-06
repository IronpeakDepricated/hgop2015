'use strict';

var app = require('../../app');

// gameHistory
module.exports = function(eventStore) {
    return {
        index: function(req, res) {
            eventStore.loadEvents(req.params.gid).then(function(events) {
                res.json(events);
            }, function(err) {
                res.json(err);
            });
        }
    }
};
