require 'open-uri'
require 'json'

class Movies

  def initialize(options)
    movies = {
      'upcoming' => 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json',
      'theaters' => 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json'
    }
    key = ENV['ROTTENAPIKEY']
    limit = "page_limit=#{options[:limit]}"
    urlbase = movies[options[:type]]
    @uri = "#{urlbase}?apikey=#{key}&#{limit}"
  end

  def getMovies
    open(@uri).read
  end

end