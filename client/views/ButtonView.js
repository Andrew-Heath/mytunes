// ButtonView.js - Defines a backbone view class for the song queue.
var ButtonView = Backbone.View.extend({

  events: {
    'click': function() {
      if ($('input').val().length !== 0) {
        this.trigger('playlist', $('input').val());
        $('input').val('');
      }
    }
  },

  initialize: function(params) {
    this.render();
  }, 

  render: function() {
    return this.$el.html('<form>Playlist Name:<br><input type="text" name="playlistname"> <button type="button" class="makePlaylist">Create</button></form><br>');
  }

});
