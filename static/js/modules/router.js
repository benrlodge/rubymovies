define([
  'jquery',
  'underscore',
  'backbone',
  'controllers/HomeCtrl',
  'controllers/MoviesCtrl'
], function($, _, Backbone, HomeCtrl, MoviesCtrl){
  
  var AppRouter = Backbone.Router.extend({
    
    routes: {
      '': 'home',
      'movies(/)': 'movies',
      'movies/:type(/)': 'movies',
      '*actions': 'defaultAction'
    },

    home: function(){
      var homeCtrl = new HomeCtrl();
    },

    movies: function(type){
      var type = type || 'upcoming';
      var moviesCtrl = new MoviesCtrl({type: type});
    },

    theaters: function(){
      console.log('in theaters');
    },

    defaultAction: function(){
      console.log('No route.');
    }

  });

  return AppRouter;

})