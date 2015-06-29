define([
  'jquery',
  'underscore',
  'backbone',
  'jsx!views/HomeView'
], function($, _, Backbone, HomeView){
  
  var HomeCtrl = function(){
    this.init();
  }

  HomeCtrl.prototype = {
    init: function(){
      var view = new HomeView();
    }
  }

  return HomeCtrl;

})