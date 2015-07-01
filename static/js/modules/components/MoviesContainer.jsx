define([
  'jquery',
  'underscore',
  'backbone',
  'react'
], function($, _, Backbone, React){
 

  var MoviesContainer = function(Component){

    var Movies = React.createClass({

      componentDidMount: function () {
        console.log('PROPERS: ', this.props);
        this.pageLoaded = this.props.pageStart;
        this.attachScrollListener();
      },

      componentDidUpdate: function () {
        this.attachScrollListener();
        this.render();
      },

      attachScrollListener: function () {
        window.addEventListener('scroll', this.scrollListener);
        window.addEventListener('resize', this.scrollListener);
        if(this.props.movies.length > 0){
          this.scrollListener();  
        }
      },

      detachScrollListener: function () {
        window.removeEventListener('scroll', this.scrollListener);
        window.removeEventListener('resize', this.scrollListener);
      },

      componentWillUnmount: function () {
        this.detachScrollListener();
      },

      scrollListener: function () {
        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
          this.props.renderMore()
        }
      },

      render: function(){
        console.log('render container: ', this.props);

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