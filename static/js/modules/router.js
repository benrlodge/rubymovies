define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone, ProjectListView, UserListView){
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home',
      '*actions': 'defaultAction'
    },

    home: function(){
      console.log('I am home!');
    }

  });






//   define([
//   'jquery',
//   'underscore',
//   'backbone',
//   'views/projects/list',
//   'views/users/list'
// ], function($, _, Backbone, ProjectListView, UserListView){
//   var AppRouter = Backbone.Router.extend({
//     routes: {
//       // Define some URL routes
//       '/projects': 'showProjects',
//       '/users': 'showUsers',

//       // Default
//       '*actions': 'defaultAction'
//     }
//   });