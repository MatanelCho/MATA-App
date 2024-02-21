import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import {
  Switch,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import Links from "./ui/Links";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterComponent from "./ui/FilterComponent";
import ROUTES from "../../routes/ROUTES";

const HeaderComponent = ({ isDarkTheme, onThemeChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate(ROUTES.LOGIN); 
  };

  const isLoggedIn = Boolean(localStorage.getItem('token'));


  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navigationLinks = [
    { title: "Home Page", path: ROUTES.HOME },
    { title: "Register", path: ROUTES.REGISTER },
    { title: "Login", path: ROUTES.LOGIN },
    { title: "About", path: ROUTES.ABOUT },
    { title: "Create", path: ROUTES.CREATECARD },
    { title: "My Cards", path: ROUTES.MY_CARDS },
 /*    { title: "profile", path: ROUTES.PROFILE }, */
  ];

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleThemeChange = (event) => {
    onThemeChange(event.target.checked);
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", padding: "20px" } }}
          >
        MATA
          </Typography>
          <Links />
          <FilterComponent />
          <Box
            sx={{
              my: 2,
              p: 1,
            }}
          >
            <Typography sx={{ display: { xs: "none", md: "inline" } }}>
              {isDarkTheme ? "Dark" : "Light"} Mode
            </Typography>
            <Switch checked={isDarkTheme} onChange={handleThemeChange} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
         { isLoggedIn && <Button color="inherit" onClick={handleLogout}>Logout</Button>}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            height: "%",
            maxHeight: "50vh",
            overflow: "auto",
          },
        }}
      >
        <List>
          {navigationLinks.map((link) => (
            <ListItem
              key={link.title}
              onClick={toggleDrawer}
              component={RouterLink}
              to={link.path}
            >
              <ListItemText
                primary={link.title}
                sx={{
                  color: isDarkTheme ? "grey.300" : "grey.800",
                  height: 20,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
export default HeaderComponent;
