import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Stars from "./stars";
import "../sass/comic.scss";
import api from "../utils/api";

const Comic = ({ comic, addComic }) => {
  const [state, setState] = useState({
    error: null,
    loading: true,
  });

  useEffect(async () => {
    if (state.loading) {
      let response = await api.callApi("/api");
      if (response["error"] != undefined) {
        setState({ error: response["error"], loading: false });
      } else {
        console.log(response);

        setState({ loading: false });
        addComic(response);
      }
    }
  });

  if (state.error)
    return (
      <div
        className="card text-white bg-warning mb-3"
        style="max-width: 18rem;"
      >
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Warning card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  if (state.loading || comic == null)
    return (
      <div
        className="spinner-grow text-dark"
        style={{ width: "2rem", height: "2rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  return (
    <div className="comic card text-center col-md-6 col-sm-12 ">
      <div className="card-header title-comic">
        <h2>{comic.title}</h2>
      </div>
      <img src={comic.img} className="card-img" alt={comic.img}></img>
      <div className="card-body">
        <h5 className="card-title">{comic.num}</h5>
        <p className="card-text">{comic.alt}</p>
      </div>
      <div className="card-footer text-muted">
        <Stars />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addComic(comic) {
    dispatch({
      type: "ADD_COMIC",
      comic: comic,
    });
  },
});

const mapStateToProps = (state) => ({
  comic: state.comic,
});

export default connect(mapStateToProps, mapDispatchToProps)(Comic);
