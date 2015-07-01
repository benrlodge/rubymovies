define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  'jsx!components/MoviesContainer'
], function($, _, Backbone, React, MoviesContainer){
  
  var MoviesTable = React.createClass({

    displayName: 'MoviesTable',

    render: function() {

      titles = {
        'theaters': 'In theaters now',
        'upcoming': 'Coming to theaters soon'
      }
      var headline = titles[this.props.active]

      if(this.props.movies.length == 0){
        return (<div></div>)
      }

      var tbody = this.props.movies.map(function(movie){
        var title = movie.title;
        var date = movie.release_dates.theater;
        var critics_score = movie.ratings.critics_score;
        var audience_score = movie.ratings.audience_score;
        var synopsis = movie.synopsis;

        return(
          <tr key={movie.id}>
            <td>{title}</td>
            <td>{date}</td>
            <td>{critics_score == -1 ? '' : critics_score}</td>
            <td>{audience_score}</td>
            <td>{synopsis}</td>
          </tr>
        )
      })

      return (
        <div>
          <div className="page-header">
            <h1>{headline}</h1>
          </div>
          <table className='table table-striped movies-table'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Release Date</th>
                <th>Critics Score</th>
                <th>Audience Score</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tbody}
            </tbody>
          </table>
        </div>
      )

    }
  });

  return MoviesContainer(MoviesTable);

})