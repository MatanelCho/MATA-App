
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import LikedCardsPage from "../../pages/LikedCardsPage";



const FooterComponent = () => {

const navigate = useNavigate()

  const handleLikeCardClick = () => {
  navigate(`${ROUTES.LIKEDCARDS}`);
  };

  const handleMyCardClick=()=>{
    navigate(`${ROUTES.MY_CARDS}`);
  }

const handleAboutClick=()=>{
  navigate(`${ROUTES.ABOUT}`);
}

  return (
    <Paper elevation={4} sx={{ position: "sticky", mt: 2 }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Liked-Cards" icon={<FavoriteIcon />} 
        onClick={handleLikeCardClick}/>
        <BottomNavigationAction label="My - Cardes" icon={<AccountBoxIcon  />}  
        onClick={handleMyCardClick} />
        <BottomNavigationAction label="About" icon={<InfoIcon />}
        onClick={handleAboutClick}/>
      </BottomNavigation>
    </Paper>
  );
};

export default FooterComponent;
