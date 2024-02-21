import React, { useState, useContext, useEffect} from "react";
import { useLikedCards } from "../store/likedCardsContext";
import CardComponent from "../components/CardComponent";
import { Grid, Divider, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";


const LikedCardsPage = () => {

    const { likedCards, removeLikedCard } = useLikedCards();
    const navigate = useNavigate();

    const handleDeleteCard = (id) => {
        removeLikedCard(id); 
    };

    const handleEditCard = (id) => {
        navigate(`${ROUTES.EDITCARD}/${id}`);
      };

    if (likedCards.length === 0) {
      return <div>No liked cards</div>;
    }

    return (
        <Grid container spacing={2}>
    {likedCards.map((card, index) => (
        <>
     
      <Grid item lg={3} md={6} xs={12} key={card.id || index}>
        <CardComponent  id={card._id}
            title={card.title}
            subtitle={card.subtitle}
            img={card.image.url}
            phone={card.phone}
            address={card.address}
            cardNumber={card.bizNumber}
            liked={card.liked}
            onDelete={handleDeleteCard}
            onEdit={handleEditCard}/>
      </Grid>
      </>
    ))}
  </Grid>
    );

}


export default LikedCardsPage;