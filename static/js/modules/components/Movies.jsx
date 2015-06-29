define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  'jsx!components/Navigation',
  'jsx!components/MoviesNav',
  'jsx!components/MoviesTable'
], function($, _, Backbone, React, Navigation, MoviesNav, MoviesTable){
  
  var Movies = React.createClass({
    displayName: 'Movies',
    render: function() {

      return (
        <div>

          <Navigation />
            <hr/>
            <MoviesNav
              active={this.props.type}
            />
            <div className='container movies'>
              <MoviesTable />
            </div>

        </div>
      )
    }
  });

  return Movies;

})