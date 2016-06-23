// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(song) {
      if (this.length < 2) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song) {
      this.remove(this.at(0));

      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('enqueue', function(song) {
      this.add(song);
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }

});