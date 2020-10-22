import { BALANCE_LOOSE, BALANCE_WIN } from "../actions/types";

const cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];
  
  export const compareCards = (prev, current, hilo) => {
    const previousCardValueIndex = cardValues.indexOf(prev);
    const currentCardValueIndex = cardValues.indexOf(current);
  
    if (previousCardValueIndex === -1 || currentCardValueIndex === -1) {
      throw new Error(" CardValue not found in cardValues array");
    }
  
    if (hilo === "high" && previousCardValueIndex >= currentCardValueIndex) {
      return BALANCE_LOOSE;
    }
  
    if (hilo === "high" && previousCardValueIndex < currentCardValueIndex) {
      return BALANCE_WIN;
    }
  
    if (hilo === "low" && previousCardValueIndex <= currentCardValueIndex) {
      return BALANCE_LOOSE;
    }
  
    if (hilo === "low" && previousCardValueIndex > currentCardValueIndex) {
      return BALANCE_WIN;
    }
  };