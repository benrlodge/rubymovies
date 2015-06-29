define([
  'jquery',
  'underscore',
  'backbone',
  'react',
], function($, _, Backbone, React){
  
  var MoviesNav = React.createClass({

    displayName: 'MoviesNav',
    
    render: function() {
      console.log('moviesnav: ', this.props.active)
      // ## add active class


      return (
        <ul className="nav nav-tabs container">
          <li className={this.props.active === 'upcoming' ? 'active' : ''}><a href="#movies/upcoming">Upcoming</a></li>
          <li className={this.props.active === 'theaters' ? 'active' : ''}><a href="#movies/theaters">In Theaters</a></li>
        </ul>


      )
    }
  });

  return MoviesNav;

})