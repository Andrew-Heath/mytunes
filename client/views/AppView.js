// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  renderParts: [],

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.renderParts.push(this.model.createPlaylist.$el, this.playerView.$el, this.libraryView.$el, this.queueView.$el);
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.on('playlistView', function(args) {
      var newView = args + 'View';
      var newQueue = args + 'Queue';

      this[newView] = new SongQueueView({collection: this.model.get(newQueue)});
      this[newView].name = args;
      this[newView].render();

      this.renderParts.push(this[newView].$el);
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();

    return this.$el.html(this.renderParts);
  }

});
