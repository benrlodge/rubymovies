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
            <MoviesNav
              active={this.props.type}
              changeType={this.props.changeType}
            />
            <div className='container movies'>
              <MoviesTable 
                active={this.props.type}
                movies={this.props.movies}
                renderMore={this.props.renderMore}
              />
            </div>
        </div>
      )
    }
  });

  return Movies;

})