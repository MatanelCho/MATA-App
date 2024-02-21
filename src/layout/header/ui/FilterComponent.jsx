

import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search";
import ROUTES from "../../../routes/ROUTES";
import SearchIconWrapper from "./SearchIconWrapper";
import StyledInputBase from "./StyledInputBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FilterComponent = () => {
  const [txt, setTxt] = useState("");
  const navigate= useNavigate


   const searchMappings = {
    "home": ROUTES.HOME,
    "login": ROUTES.LOGIN,
    "register": ROUTES.REGISTER,
    "about": ROUTES.ABOUT,
    "likedCards": ROUTES.LIKEDCARDS,
    "profile": ROUTES.PROFILE,
    "myCards": ROUTES.MY_CARDS,
    "create": ROUTES.CREATECARD,

  };



  const handleInputChange = (e) => {
    setTxt(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchQuery = txt.toLowerCase(); 
    const pathMatch = searchMappings[searchQuery];
  
    if (pathMatch) {
      navigate(pathMatch);
    } else {
      navigate('/404'); 
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={txt}
        onChange={handleInputChange}
      />
    </Search> 
    </form>
  );
};

export default FilterComponent;
