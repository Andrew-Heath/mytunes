// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var self = this;
    $.get('https://api.parse.com/1/classes/songs/', function(data, status) {
      for (var key in data) {
        self.add(data[key]);
      }
    });
  }

});