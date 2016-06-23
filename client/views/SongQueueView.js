// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    this.collection.map(function(song) {
      var songEntry = new SongQueueEntryView({ model: song });
      songEntry.render();
    });
  }

});
