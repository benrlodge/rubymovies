require.config({
  baseUrl: '/js/modules',
  paths: {
    jquery: '../libs/jquery',
    backbone: '../libs/backbone',
    underscore: '../libs/underscore',
    react: '../libs/react-with-addons',
    text: '../libs/text',
    jsx: '../libs/jsx',
    JSXTransformer: '../libs/JSXTransformer'
  },
  jsx: {
    fileExtension: '.jsx',
    harmony: true
  }
});

require(['app'], function(app){
  var app = new app();
});