import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useLikedCards } from "../store/likedCardsContext";





const CardComponent = ({
  title,
  subtitle,
  img,
  phone,
  address,
  cardNumber,
  id,
  liked,
  onDelete,
  onEdit,
  onLike,
  onIdClick
}) => {
  const { removeLikedCard} = useLikedCards();

  const handleDeleteClick = () => {
    onDelete(id,/* removeLikedCard */ );
  };

  const handleEditClick = () => {
    onEdit(id);
  };

  const handleLikeClick = async () => {
   await onLike(id, !liked);
  };

  const handleClickCard= ()=>{
    onIdClick(id)
  }

  let location = useLocation();


  const isLike = location.pathname === "/likedCards"


  
  return (
    <Card square raised>
      <CardActionArea onClick= {handleClickCard}>
        <CardMedia
          component="img"
          image={img}
          alt="american massle car"
          height={200}
        />

      </CardActionArea>
      <CardHeader title={title} subheader={subtitle}></CardHeader>
      <Divider></Divider>
      <CardContent>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Phone:
          </Typography>
          {phone}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Address:
          </Typography>
          {address.city}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Card number:
          </Typography>
          {cardNumber}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          
          <Box>
            <IconButton onClick={handleDeleteClick}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={handleEditClick}>
              <ModeIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton>
              <LocalPhoneIcon />
            </IconButton>
          {  !isLike && (<IconButton onClick={handleLikeClick}>
              <FavoriteIcon color={liked ? "error" : "inherit" } />
            </IconButton>)}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  phone: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    houseNumber: PropTypes.number.isRequired,
  }).isRequired,
  cardNumber: PropTypes.number.isRequired,
};

CardComponent.defaultProps = {
  img: "/assets/imgs/car 1.jpg",
  subtitle: "subtitle default",
};

export default CardComponent;
