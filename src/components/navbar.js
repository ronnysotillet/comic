import React from "react";
import { connect } from "react-redux";
import api from "../utils/api";

const Navbar = ({ addComic }) => {
  const searchComic = async () => {
    let aux = document.getElementById("search").value;
    if (aux) {
      let response = await api.callApi("/api/" + aux);
      document.getElementById("search").value = "";
      if (response["error"] != undefined) {
        //setState({ error: response["error"], loading: false });
      } else {
        console.log(response);
        //setState({ loading: false });
        addComic(response);
      }
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-warning" href="#">
          Comics
        </a>
        <input
          className="form-control mr-sm-2 mr-3"
          type="number"
          placeholder="Search"
          id="search"
          aria-label="Search"
        />
        <button
          className="btn btn-primary my-2 my-sm-0"
          onClick={() => searchComic()}
        >
          <i className="fas fa-search" />
        </button>
      </div>
    </nav>
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

export default connect(null, mapDispatchToProps)(Navbar);
