// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  queueName: 'Song Queue',

  initialize: function(params) {
    console.log(this.options);
    this.options.on('add', function() {
      this.render();
    }, this);
    this.options.on('remove', this.render, this);
    this.options.on('dequeue', this.render, this);
    
    this.queueName = params.name;
    this.models = [];
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    var temp = this.$el.html('<th>Song Queue</th>');
    if (this.options) {
      console.log(this.options);
      temp.append(this.options.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      }));
    }
  }

});
