import { createStore } from "redux";

const initialState = {
  comic: null,
  score: 0,
  comics: [],
};

const reducerComic = (state = initialState, action) => {
  console.log(action);
  if (action.type == "SET_COMIC") {
    return {
      ...state,
      score: action.comic.score != undefined ? action.comic.score : 0,
      comic: action.comic,
    };
  }
  if (action.type == "ADD_COMIC") {
    if (state.comics.find((el) => el.num == action.comic.num) == undefined) {
      return {
        ...state,
        comic: action.comic,
        score: 0,
        comics: state.comics.concat(action.comic),
      };
    }
  }
  if (action.type == "SCORE") {
    return {
      ...state,
      score: action.score,
    };
  }
  if (action.type == "SCORE_COMIC") {
    let aux = state.comic;
    aux.score = action.score;
    if (state.comics.find((el) => el.num == action.num) != undefined) {
      return {
        ...state,
        comic: aux,
        score: action.score,
        comics: state.comics.map((el) => {
          if (el.num == action.num) {
            return aux;
          } else {
            return el;
          }
        }),
      };
    } else {
      return {
        ...state,
        comic: aux,
        score: action.score,
        comics: state.comics.concat(aux),
      };
    }
  }

  return state;
};

export default createStore(reducerComic);
