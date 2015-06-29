require './movies'
require 'json'

get '/' do
  erb :index, :layout => :layout
end

## API
get '/api/movies' do
  options = { 
    limit: params["limit"], 
    type: params["type"]
  }
  list = Movies.new(options)
  content_type :json
  list.getMovies()
end