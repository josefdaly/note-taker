TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  events: {
    'click i.remove': 'deleteBoard'
  },
  template: JST['boards/index_item'],
  tagName: 'li',
  className: 'board-index-item',
  render: function () {
    var content = this.template({board: this.model});
    this.$el.html(content);
    return this;
  },
  deleteBoard: function (event) {
    event.preventDefault();
    this.model.destroy();
  }
});
