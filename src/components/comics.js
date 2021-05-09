import React from "react";
import { connect } from "react-redux";
import "../sass/comic.scss";

const Comics = ({ comics, setComic, comicState }) => {
  console.log(comics);
  return (
    <div className="card text-center col-md-6 col-sm-12 ">
      <div className="container ">
        <div className="row">
          {comics.map((comic) => {
            return (
              <div
                className={
                  "card comic comic-btn col-sm-12 col-md-3 " +
                  (comic == comicState ? "bg-secondary" : "bg-light")
                }
                key={comic.num}
                onClick={() => {
                  setComic(comic);
                }}
                data-toggle="tooltip"
                data-placement="top"
                title={comic.alt}
              >
                <div className="card-header title-comic">
                  <p>{comic.title}</p>
                </div>
                {/* <img src={comic.img} className="card-img" alt={comic.img} /> */}
                <div className="card-body">
                  <h5 className="card-title">{comic.num}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setComic(comic) {
    dispatch({
      type: "SET_COMIC",
      comic: comic,
    });
  },
});

const mapStateToProps = (state) => ({
  comics: state.comics,
  comicState: state.comic,
});

export default connect(mapStateToProps, mapDispatchToProps)(Comics);
