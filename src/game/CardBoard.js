import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

export const CardBoard = () => {
  const card = useSelector((state) => state.cardReducer.currentCard.image);
  const playedCards = useSelector((state) => state.cardReducer.playedCards);
  
  const canvasRef = useRef(null);

  const cardBack = (ctx) => {
    let img = new Image();
    img.src =
      "https://www.simonlucasbridgesupplies.co.uk/wp-content/uploads/product_images/pc10g_blue-150x150.jpg";
    ctx.drawImage(img, 600, 150, 150, 150);
  };

  const playCard = (ctx) => {
    let img = new Image();
    img.src = card;
    ctx.drawImage(img, 300, 150, 100, 140);
  };

  const playedCardsArr = (ctx) => {
    if (playedCards.length > 0) {
      for (let i = 0; i < playedCards.length; i++) {
        let img = new Image();
        img.src = playedCards[i];
        ctx.drawImage(img, 150 + i * 20, 300, 100, 140);
      }
    }
  };

  const iconDisplay = (ctx) => {
      
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let animationFrameId;

    const render = () => {
      cardBack(context);
      playCard(context);
      playedCardsArr(context);

      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [cardBack, playCard, playedCardsArr]);

  return (
    <div>
      <canvas ref={canvasRef} height="500" width="1200" />
    </div>
  );
};
