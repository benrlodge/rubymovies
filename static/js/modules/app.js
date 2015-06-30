
define(['Router','backbone'], function (Router, Backbone) {

  var App = function(){
    window.app.router = new Router
    Backbone.history.start();
  }
  
  return App;
 
});