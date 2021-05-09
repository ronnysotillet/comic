import React, { useState } from "react";
import { connect } from "react-redux";
import "../sass/stars.scss";

const Stars = (props) => {
  let stars = getStars(props.score);
  return (
    <div>
      {stars.reverse().map((e, i) => (
        <span
          className="star"
          onClick={() => {
            props.scoreComic(props.comic, i + 1);
          }}
          onMouseEnter={() => props.setScore(i + 1)}
          onMouseLeave={() => props.setScore(props.comic.score)}
          key={"star-" + i}
          data-toggle="tooltip" 
          data-placement="top" 
          title={i+1}
        >
          {e}
        </span>
      ))}
    </div>
  );
};

const getStars = (score) => {
  let stars = [];
  for (var i = 4; i >= 0; i--) {
    let aux = score - i;
    if (aux >= 1) {
      stars.push(<i className="fas fa-star" />);
    } else if (aux >= 0.5) {
      stars.push(<i className="fas fa-star-half-alt" />);
    } else {
      stars.push(<i className="far fa-star" />);
    }
  }
  return stars;
};
const mapDispatchToProps = (dispatch) => ({
  scoreComic(comic, score) {
    dispatch({
      type: "SCORE_COMIC",
      num: comic.num,
      score: score,
    });
  },
  setScore(score) {
    dispatch({
      type: "SCORE",
      score: score,
    });
  },
});

const mapStateToProps = (state) => ({
  score: state.score,
  comic:state.comic
});

export default connect(mapStateToProps, mapDispatchToProps)(Stars);
