// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function(params) {
    this.options.on('add', function() {
      this.render();
    }, this);
    this.options.on('enqueue', function() {
      this.render();
    }, this);
    this.options.on('remove', this.render, this);
    this.options.on('dequeue', this.render, this);
    
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    var temp = this.$el.html('<th>Song Queue</th>');
    temp.append(this.options.map(function(song) {
      return new SongQueueEntryView({model: song}).render();
    }));
  }

});
