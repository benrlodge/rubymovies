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
      this.renderMore = this.renderMore.bind(this);

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

    renderMore: function(){
      console.log('render more from MoviesView');
      console.log('Total to show: ', this.movies.length)
      this.rendered = this.rendered + this.renderAtOnce;
      console.log('this rendered + renderAtOnce ', this.rendered + this.renderAtOnce);

      // stop if we've reached the total
      if( (this.rendered) >= this.movies.length){
        return false
      }

      this.renderReact();
    },


    renderReact: function(){
      console.log('render react!');
      this.moviesToRender = _.pluck(this.movies.slice(0, this.rendered + this.renderAtOnce), 'attributes');

      console.log('wer are going to render: ', this.moviesToRender.length);
      React.render(
        <Movies 
          type={this.type}
          changeType={this.changeType}
          movies={this.moviesToRender}
          renderMore={this.renderMore}
        />, document.getElementById('app')
      )
    }

  })

  return MoviesView;

})