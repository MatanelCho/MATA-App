import React, { createContext, useContext, useState, useEffect } from 'react';

const LikedCardsContext = createContext();

export const useLikedCards = () => useContext(LikedCardsContext);

export const LikedCardsProvider = ({ children }) => {
  const [likedCards, setLikedCards] = useState(()=>{
    const localData = localStorage.getItem('likedCards');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('likedCards', JSON.stringify(likedCards));
  }, [likedCards]);


  const addLikedCard = (card) => {
    setLikedCards((prevLikedCards) => [...prevLikedCards, card]);
  };

  const removeLikedCard = (cardId) => {
    setLikedCards((prevLikedCards) => prevLikedCards.filter(card => card._id !== cardId));
  };

  return (
    <LikedCardsContext.Provider value={{ likedCards, addLikedCard, removeLikedCard }}>
      {children}
    </LikedCardsContext.Provider>
  );
};
