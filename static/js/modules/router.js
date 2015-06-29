define([
  'jquery',
  'underscore',
  'backbone',
  'controllers/HomeCtrl'
], function($, _, Backbone, HomeCtrl){
  
  var AppRouter = Backbone.Router.extend({
    
    routes: {
      '': 'home',
      'upcoming': 'upcoming',
      '*actions': 'defaultAction'
    },

    home: function(){
      var homeCtrl = new HomeCtrl();
    },

    upcoming: function(){
      console.log('Route: upcoming movies');
    }

  });

  return AppRouter;

})