define([
  'jquery',
  'underscore',
  'backbone',
  'jsx!views/MoviesView'
], function($, _, Backbone, MoviesView){
  
  var MoviesCtrl = function(options){
    this.type = options.type
    this.init();
  }

  MoviesCtrl.prototype = {
    init: function(){
      console.log('show the right movies view...')
      var view = new MoviesView({type: this.type});
    }
  }

  return MoviesCtrl;

})