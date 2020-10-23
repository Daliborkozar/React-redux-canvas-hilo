import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDrawCard } from "../actions/cardsAction";
import { placeBet } from "../actions/interfaceActions";

export const Interface = () => {
  const { bet, playerBalance } = useSelector((state) => state.interfaceReducer);
  const { deck_id, currentCard, remaining } = useSelector((state) => state.cardReducer);

  const [newBet, setBet] = useState(bet);
  const dispatch = useDispatch();

  const compareCards = (hilo) => {
    dispatch(fetchDrawCard(deck_id, currentCard, hilo));
  };

  const changeBetHandler = (e) => {
    setBet(Number(e.target.value));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (bet >= 10 && playerBalance >= bet) {
      dispatch(placeBet(newBet));
      if (playerBalance < bet) {
        window.alert(
          "Bet exceeds Balance, please try with with a lower amount"
        );
        if (bet < 10) {
          window.alert("minimum bet is 10 coins");
        }
      }
    }
  };
  //compare cards
  return (
    <div>
      <div className="container">
        <button>NEW</button>
        <span>balance:{playerBalance}</span>
        <button onClick={() => compareCards("high")} disabled={!remaining} >HiGH</button>
        <button onClick={() => compareCards("low")} disabled={!remaining} >LOW</button>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="quantity">
            Bet: (between 10 and {`${playerBalance}`}):
          </label>
          <input
            name="bet"
            placeholder="place your bet"
            type="number"
            variant="contained"
            size="small"
            onChange={changeBetHandler}
          />
          <button type="submit">Place your Bet</button>
        </form>

        <button>RESET GAME</button>
      </div>
    </div>
  );
};
