define([
  'jquery',
  'underscore',
  'backbone',
  'react',
], function($, _, Backbone, React){
  
  var MoviesNav = React.createClass({

    displayName: 'MoviesNav',

    handleChange: function(e){
      e.preventDefault();
      var dest = e.currentTarget.getAttribute('data-type')
      var route = 'movies/' + dest

      this.props.changeType(dest);
      app.router.navigate(route, {trigger:false})
    },
    
    render: function() {
      console.log('propers for da Movies Nav: ', this.props)
      return (
        <ul className="nav nav-tabs container movies-nav">
          <li className={this.props.active === 'upcoming' ? 'active' : ''}>
            <a onClick={this.handleChange} data-type="upcoming" href="#movies/upcoming">Upcoming</a>
          </li>
          <li className={this.props.active === 'theaters' ? 'active' : ''}>
            <a onClick={this.handleChange} data-type="theaters" href="#movies/theaters">In Theaters</a>
          </li>
        </ul>
      )
    }
  });

  return MoviesNav;

})