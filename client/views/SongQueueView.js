// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  queueName: 'Song Queue',

  initialize: function(params) {
    this.collection.on('add', function() {
      this.render();
    }, this);
    this.collection.on('remove', this.render, this);
    this.collection.on('dequeue', this.render, this);
    
    this.models = [];
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    console.log(this.queueName);
    var temp = this.$el.html('<th>' + this.queueName + '</th>');
    if (this.collection) {
      temp.append(this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      }));
    }
  }

});
