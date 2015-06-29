define([
  'jquery',
  'underscore',
  'backbone',
  'react'
], function($, _, Backbone, React){
  
  var Home = React.createClass({
      render: function() {
        return <div>Hello, world!</div>;
      }
  });

  return Home;

})