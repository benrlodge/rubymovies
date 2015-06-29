define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  'jsx!components/Movies'
], function($, _, Backbone, React, Movies){
  
  var MoviesView = Backbone.View.extend({

    initialize: function(options){
      console.log('init movies view...')
      this.type = options.type
      this.renderReact();
    },

    changeType: function(){
      console.log('we change type now...')
    },

    actions: function(){
      return {
        changeType: this.changeType
      }
    },

    renderReact: function(){
      console.log('render react for... ', this.type)
      React.render(
        <Movies 
          type={this.type}
          actions={this.actions}
        />, document.getElementById('app')
      )

    }

  })

  return MoviesView;

})