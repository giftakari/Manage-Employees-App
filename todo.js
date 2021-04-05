var TodoItem = Backbone.Model.extend({
  urlRoot: "/todos",
  defaults: {
    description: "Empty todo",
    status: "incomplete",
    id: 0,
    toggleStatus: function () {
      if (this.get("status") === "incomplete") {
        this.set({ status: "complete" });
      } else {
        this.set({ status: "compolete" });
      }

      this.save();
    },
  },
});

var todoItem = new TodoItem({
  description: "pick up milk",
  status: "incomplete",
  id: 1,
});
todoItem.set({ description: "I changed my mind please " });
todoItem.get("id");

var todoItem1 = new TodoItem({
  description: "pick up milk",
  status: "incomplete",
  id: 1,
});
var todoItem2 = new TodoItem();

//create a list of collections
var TodoList = Backbone.Collection.extend({
  model: TodoItem,
});
var todoList = new TodoList();
todoList.add(todoItem);
todoList.add(todoItem1);
todoList.add(todoItem2);

//creates a view class
var TodoView = Backbone.View.extend({
  tagName: "article",
  id: "todo-view",
  className: "todo",
  el: "#container",
  events: {
    //"click button": "alertS",
    "change input": "toggleStatus",
  },
  alertS: function (e) {
    console.log("Welcome Akaris fired and checked ");
  },

  template: _.template(`<h1><%= description %>-
    <%= id %>
  </h1> <button><%= status.slice(2) %></button>
  <br>
  <hr>
  <input type="checkbox" <% if(status ==="complete") print("checked") %>/>
  `),
  //el:"#container",
  initialize: function () {
    this.model.on("change", this.render, this);
  },
  toggleStatus: function () {
    this.model.toggleStatus();

    console.log("working well ");
  },
  render: function () {
    var attributes = this.model.toJSON();

    return this.$el.html(this.template(attributes));
  },
});

// creates an instance view instance
var todoView = new TodoView({
  model: todoItem,
});
todoView.render();
console.log(todoView.el);

var SimpleView = Backbone.View.extend({
  tagName: "section",
  id: "todo",
  className: "Akaris",
});
var simpleView = new SimpleView();

console.log(simpleView.el);
