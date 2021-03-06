import {
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAIL,
  FETCH_DRAWCARD_REQUEST,
  FETCH_DRAWCARD_SUCCESS,
  FETCH_DRAWCARD_FAIL,
} from "../actions/types";


import { compareCards } from "../utils/utils";

import axios from "axios";

// fetch card request
export const fetchCardsRequest = () => {
  return {
    type: FETCH_CARDS_REQUEST,
  };
};

//store cards if success

export const fetchCardsSuccess = (cards) => {
  return {
    type: FETCH_CARDS_SUCCESS,
    payload: cards,
  };
};

// store error message

export const fetchCardsFail = (error) => {
  return {
    type: FETCH_CARDS_FAIL,
    payload: error,
  };
};

export const fetchDrawnCardRequest = () => {
  return {
    type: FETCH_DRAWCARD_REQUEST,
  };
};

export const fetchDrawnCardSuccess = (card) => {
  return {
    type: FETCH_DRAWCARD_SUCCESS,
    payload: card,
  };
};

export const fetchDrawnCardFail = (error) => {
  return {
    type: FETCH_DRAWCARD_FAIL,
    payload: error,
  };
};

const compareCardsVal = (prev, curr, tag) => {
  const type = compareCards(prev, curr, tag);
  return { type };
};

export const fetchCardsDeck = () => (dispatch) => {
  //loading:true
  dispatch(fetchCardsRequest());
  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((response) => {
      const data = response.data;
      dispatch(fetchCardsSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchCardsFail(error.message));
    });
};

export const fetchDrawCard = (id, card, hilo = "") => (dispatch) => {
  dispatch(fetchDrawnCardRequest());
  axios
    .get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    .then((response) => {
      const data = response.data;
      dispatch(fetchDrawnCardSuccess(data));
      if (hilo) {
        dispatch(compareCardsVal(card.value, data.cards[0].value, hilo));
      }
    })
    .catch((error) => {
      dispatch(fetchDrawnCardFail(error.message));
    });
};
