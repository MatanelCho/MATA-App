import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CardComponent from "../../components/CardComponent";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLikedCards } from "../../store/likedCardsContext";
import ROUTES from "../../routes/ROUTES";
import normalizeHome from "./normalizeHome";
import LoginContext from "../../store/loginContext";

const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [visibleCards, setVisibleCards] = useState(8);
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);
  const {  likedCards, addLikedCard, removeLikedCard } = useLikedCards();



  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        
        setDataFromServer(normalizeHome(data));
      })
      .catch((err) => {
      });
  }, []);


  let dataFromServerFiltered = normalizeHome(
    dataFromServer,
    login ? login._id : undefined
  );
  if (!dataFromServerFiltered || !dataFromServerFiltered.length) {
    return <Typography>Could not find any items</Typography>;
  }

  const handleSeeMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 8);
  };

  const handleDeleteCard = (id) => {
    setDataFromServer((currentDataFromServer) =>
      currentDataFromServer.filter((card) => card._id !== id)
    );
    removeLikedCard(id);
  };


  const handleEditCard = (id) => {
    navigate(`${ROUTES.EDITCARD}/${id}`);
  };

  const handleClickCard = (id) => {
    navigate(`${ROUTES.VIEWCARD}/${id}`);
  };

 const handleLikeCard = async (id,liked) => {
   try {
     let { data } = await axios.patch("/cards/" + id);

     if(liked){
     addLikedCard(data);}
     else{
      removeLikedCard(data._id);
     }


    setDataFromServer((cDataFromServer) => {
      let cardIndex = cDataFromServer.findIndex((card) => card._id === id);
      if (cardIndex >= 0) {
        cDataFromServer[cardIndex] = data;
      }
      return [...cDataFromServer];
    });
  
   } catch (err) {
   }
 }
 
  return (
    <Grid container spacing={2}>
      {dataFromServerFiltered.slice(0,visibleCards).map((item, index) => (
        <Grid item lg={3} md={6} xs={12} key={"carsCard" + index}>
          <CardComponent
           {...item}
           liked={likedCards.some((likedCard) => likedCard._id === item._id)}
            id={item._id}
            title={item.title}
            subtitle={item.subtitle}
            img={item.image.url}
            phone={item.phone}
            address={item.address}
            cardNumber={item.bizNumber}
            onDelete={handleDeleteCard}
            onEdit={handleEditCard}
            onLike={handleLikeCard}
            onIdClick={handleClickCard}
          />
        </Grid>
      ))}
      {visibleCards < dataFromServerFiltered.length && ( 
        <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button variant="contained" onClick={handleSeeMore}>See More</Button>
        </Grid>
      )}
    </Grid>
  );
};

export default HomePage;
