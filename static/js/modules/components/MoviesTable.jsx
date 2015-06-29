define([
  'jquery',
  'underscore',
  'backbone',
  'react',
], function($, _, Backbone, React){
  
  var MoviesTable = React.createClass({

    displayName: 'MoviesTable',
    
    render: function() {
      
      return (
        <div>Movies Table...</div>
      )
    }
  });

  return MoviesTable;

})