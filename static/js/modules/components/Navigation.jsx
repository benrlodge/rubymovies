define([
  'jquery',
  'underscore',
  'backbone',
  'react',
], function($, _, Backbone, React){
  
  var Navigation = React.createClass({

    displayName: 'Navigation',
    
    render: function() {
      return (      
        <nav className="primary-nav collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <a className='nav-item' href="#">Home</a>
            </li>
            <li>
              <a className='nav-item' href="#movies">Movies</a>
            </li>
          </ul>
        </nav>
      )
    }
  });

  return Navigation;

})