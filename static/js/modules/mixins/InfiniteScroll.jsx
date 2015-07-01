define([], function(){

  var InfiniteScroll = {

    getInitialState: function(){
      console.log('fuck yea!');
      return {
        renderProgress: 0,
        lastRender: 0
      }

    },

    getDefaultProps: function(){
      return {
        renderAtOnce: 50,
        offset: 250
      }
    },

    componentWillMount: function(){
      return this.tableBodyRows = [];
    },

    componentDidMount: function(){
      this.attachScrollListener();
    },

    scrollListener: function(){      
      if((window.innerHeight + window.scrollY + this.props.offset) >= document.body.offsetHeight){
        this.renderTableChunk();
      }
    },

    attachScrollListener: function(){
      window.addEventListener('scroll', this.scrollListener);
      window.addEventListener('resize', this.scrollListener);
      this.scrollListener();
    },

    detachScrollListener: function(){
      window.removeEventListener('scroll', this.scrollListener);
      window.removeEventListener('resize', this.scrollListener);
    },

    renderTableChunk: function(){
      console.log('render chunck')
      var newProgress = this.state.renderProgress + this.props.renderAtOnce
      this.setState({ 
        renderProgress: this.state.renderProgress + this.props.renderAtOnce,
        lastRender: this.state.renderProgress
      })
    }

  }

  return InfiniteScroll;

});