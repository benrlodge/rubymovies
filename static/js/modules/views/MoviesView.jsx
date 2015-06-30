define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  'jsx!components/Movies'
], function($, _, Backbone, React, Movies){
  
  var MoviesView = Backbone.View.extend({

    initialize: function(options){
      this.type = options.type
      this.changeType = this.changeType.bind(this);
      this.renderReact();

    },

    changeType: function(type){
      this.type = type;
      this.renderReact();
    },

    renderReact: function(){
      React.render(
        <Movies 
          type={this.type}
          changeType={this.changeType}
        />, document.getElementById('app')
      )
    }

  })

  return MoviesView;

})