define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
  
  var HomeView = Backbone.View.extend({

    initialize: function(){
      console.log('Init Home View')

      this.renderReact();

    },

    renderReact: function(){
      console.log('render react...')
      // React.render(
      //   <RequestMain
      //     data={@getRenderData()}
      //     actions={@actions}
      //   />, app.pageEl
      // )

    }

  })

  return HomeView;

})