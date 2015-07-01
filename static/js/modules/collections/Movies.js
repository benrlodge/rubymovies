define([
  'jquery',
  'underscore',
  'backbone',
  'models/movie'
], function($, _, Backbone, Movie){
  
  var Movies = Backbone.Collection.extend({

    limit: 50,
    type: 'upcoming',

    model: Movie,

    url: function(){
      url = "http://localhost:9393/api/movies?type="+this.type+"&limit=" + this.limit
      return url;
    },

    comparator: function(movie){
      return movie.get('title');
    },

    setLimit: function(limit){
      return this.limit = limit;
    },

    parse: function(data){
      return data.movies;
    }

  })

  return Movies;

})