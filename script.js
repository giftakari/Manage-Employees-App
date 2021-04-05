/* var AppView = Backbone.View.extend({
  el: "#container",
  initialize: function () {
    this.render();
  },
  template: _.template(`<h1><%- okSir %>Akaris Digital</h1>`),
  render: function () {
    this.$el.html(this.template({okSir:"Welcome to "}));
  },
});

var appView = new AppView()


 */
/* 
var app = {};

app.InvoiceItemModel = Backbone.Model.extend({
  defaults: {
    price: 0,
    quantity: 0,
  },
  // Calculate amount
  calculteAmount: function () {
    return this.get("price") * this.get("quantity");
  },
});

var invoiceItemModel = new app.InvoiceItemModel({
  price: 2,
  quantity: 3,
});

var PreviewInvoiceItemView = Backbone.View.extend({
  template: _.template(`<ul>
   <li> Price: <%= price %></li>
   <li>Quantity <%= quantity %></li>
  
   </ul> `),
  el: "#container",
  model: invoiceItemModel,
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(
      this.template(
        this.template({
          price: this.model.get("price"),
          quantity: this.model.get("quantity"),
        })
      )
    );
  },
});

var viewDetails = new PreviewInvoiceItemView();
 */