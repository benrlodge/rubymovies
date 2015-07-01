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

    propTypes: {
      type: React.PropTypes.string,
      hasRendered: React.PropTypes.bool.isRequired,
      movies: React.PropTypes.array.isRequired,
      changeType: React.PropTypes.func.isRequired,
      sortTable: React.PropTypes.func.isRequired
    },

    render: function() {

      console.log('propers: ', this.props)

      if(this.props.hasRendered){

        Table = <MoviesTable 
                  active={this.props.type}
                  movies={this.props.movies}
                  sortTable={this.props.sortTable}
                />
      }
      else{
        Table = "Loading Movies..."
      }

      return (
        <div>
          <Navigation />
            <MoviesNav
              active={this.props.type}
              changeType={this.props.changeType}
            />
            <div className='container movies'>
              {Table}
            </div>
        </div>
      )
    }
  });

  return Movies;

})