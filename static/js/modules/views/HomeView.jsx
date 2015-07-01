define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  'jsx!components/Home'
], function($, _, Backbone, React, HomeCmpt){
  
  var HomeView = Backbone.View.extend({

    initialize: function(){
      this.renderReact();
    },

    renderReact: function(){
      React.render(
        <HomeCmpt />, document.getElementById('app')
      )

    }

  })

  return HomeView;

})