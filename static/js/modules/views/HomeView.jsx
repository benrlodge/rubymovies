define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  'jsx!components/Home'
], function($, _, Backbone, React, HomeCmpt){
  
  var HomeView = Backbone.View.extend({

    initialize: function(){
      console.log('Init Home View')
      this.renderReact();
    },

    renderReact: function(){
      console.log('render react...')
      React.render(
        <HomeCmpt />, document.getElementById('app')
      )

    }

  })

  return HomeView;

})