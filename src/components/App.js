import React, { Component } from 'react';
// import './App.css';
import MovieRow from './movierows.js'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.performSearch("kids")
  }

  performSearch(searchTerm) {
    console.log("Ja gelukt!!!")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        // console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({ rows: movieRows })
      },
      error: (xhr, status, err) => {
        console.error("geen films kunnen vinden, sad")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return <table>{this.state.rows}</table>;
  }
}

export default App;
