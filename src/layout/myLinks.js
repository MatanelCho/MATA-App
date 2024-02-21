import ROUTES from "../routes/ROUTES";

const alwaysLinks = [
  { to: ROUTES.HOME, children: "Home" },
  { to: ROUTES.ABOUT, children: "About Us" },
]; 

const loginLinks = [
  { to: ROUTES.LIKEDCARDS, children: "My Fav Cards" },
];
const loggedInLinks = [{ to: "/profile", children: "Profile" }];

const bizLinks = [
  {to: ROUTES.CREATECARD, children: "Create"} ,
   {to: ROUTES.MY_CARDS, children: "My Cards" },
];

const adminLinks = [
  { to: ROUTES.EDIT_USER, children: "Edit User" },
  { to: ROUTES.CREATECARD, children: "Create Card" },
];

const loggedOutLinks = [
  { to: ROUTES.REGISTER, children: "Register" },
  { to: ROUTES.LOGIN, children: "Login" },
];


export {loggedInLinks , alwaysLinks,loggedOutLinks, bizLinks, loginLinks, adminLinks };
