define([
  'jquery',
  'underscore',
  'backbone',
  'react'
], function($, _, Backbone, React){
 

  var MoviesContainer = function(Component){

    var Movies = React.createClass({
 
      render: function(){
    
        return (
          <Component 
            {...this.props} 
            {...this.state}
          />
        )
      }

    })

    return Movies;

  }

  return MoviesContainer;

})