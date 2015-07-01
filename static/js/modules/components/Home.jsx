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
          <div className='container'>
            <h1>Welcome to this stupid movie app.</h1>
          </div>
        </div>
      )
    }
  });

  return Home;

})