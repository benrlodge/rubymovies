define([
  'jquery',
  'underscore',
  'backbone',
  'jsx!views/MoviesView',
  'collections/Movies'
], function($, _, Backbone, MoviesView, MoviesCollection){
  
  var MoviesCtrl = function(options){
    this.type = options.type
    this.init();
  }

  MoviesCtrl.prototype = {
    
    init: function(){
      
      var movies = new MoviesCollection()
      movies.type = this.type

      var view = new MoviesView({
        type: this.type,
        movies: movies
      });

    }

  }

  return MoviesCtrl;

})