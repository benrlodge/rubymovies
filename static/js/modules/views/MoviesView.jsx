define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  'jsx!components/Movies'
], function($, _, Backbone, React, Movies){
  
  var MoviesView = Backbone.View.extend({

    hasRendered: false,
    renderAtOnce: 10,
    rendered: 0,
    moviesToRender: [],

    initialize: function(options){
      this.type = options.type
      this.movies = options.movies
      
      this.changeType = this.changeType.bind(this);

      this.renderReact();
      this.refresh();
    },

    refresh: function(){
      this.movies.fetch().done(function(){
        this.renderReact()
      }.bind(this))
    },

    changeType: function(type){
      this.type = type;
      this.movies.type = type
      this.refresh();
    },

    renderReact: function(){
      React.render(
        <Movies 
          type={this.type}
          changeType={this.changeType}
          movies={this.movies.toJSON()}
        />, document.getElementById('app')
      )
    }

  })

  return MoviesView;

})