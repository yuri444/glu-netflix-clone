import React from "react";

class MovieRow extends React.Component {
  viewMovie() {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <tr key={this.props.movie.id}>
        <td>
          <img alt="poster" width="200" src={this.props.movie.poster_src} />
          <div className="play">
            <i class="fas fa-play-circle"></i>
            <i class="fas fa-plus-circle"></i>
          </div>
        </td>
      </tr>
    );
  }
}

export default MovieRow;
