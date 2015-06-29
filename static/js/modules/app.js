
define(['Router','backbone'], function (Router, Backbone) {

  var App = function(){
    var router = new Router
    Backbone.history.start();
  }
  
  return App;
 
});