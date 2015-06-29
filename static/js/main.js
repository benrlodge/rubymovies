console.log('I am da main file!');

require.config({
  baseUrl: '/js/modules',
  paths: {
    underscore: '../libs/underscore',
    react: '../libs/react-with-addons'
  }
});

require(['app'], function(app){
  var app = new app();
});