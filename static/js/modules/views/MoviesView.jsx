define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  'jsx!components/Movies'
], function($, _, Backbone, React, Movies){
  
  var MoviesView = Backbone.View.extend({

    hasRendered: false,

    initialize: function(options){
      this.type = options.type
      this.movies = options.movies
      
      this.changeType = this.changeType.bind(this);

      this.renderReact();
      this.refresh();
    },

    refresh: function(){
      this.movies.fetch().done(function(){
        this.hasRendered = true;
        setTimeout(function(){
          this.renderReact();
        }.bind(this), 500);
      }.bind(this))
    },

    changeType: function(type){
      this.type = type;
      this.movies.type = type;
      this.hasRendered = false;
      this.renderReact();
      this.refresh();
    },

    renderReact: function(){
      React.render(
        <Movies 
          type={this.type}
          changeType={this.changeType}
          movies={this.movies.toJSON()}
          hasRendered={this.hasRendered}
          sortTable={this.sortTable}

        />, document.getElementById('app')
      )
    },

    sortTable: function(attribute){
      console.log('let us sort: ', attribute)
    }

  })

  return MoviesView;

})