define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  'jsx!components/Navigation'
], function($, _, Backbone, React, Navigation){
  
  var Home = React.createClass({
    displayName: 'Home',
    render: function() {
      return (
        <div>
          <Navigation />
          <hr/>
          <h1>Welcome to the stupid movie app.</h1>
        </div>
      )
    }
  });

  return Home;

})