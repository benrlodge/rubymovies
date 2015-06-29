define([
  'jquery',
  'underscore',
  'backbone',
  'react',
], function($, _, Backbone, React){
  
  var Navigation = React.createClass({

    displayName: 'Navigation',
    
    render: function() {
      return (
        <ul className="nav nav-pills">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#upcoming">Upcoming Movies</a></li>
          <li><a href="#theaters">In Theaters Now</a></li>
        </ul>
      )
    }
  });

  return Navigation;

})