import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ROUTES from "./ROUTES";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutUsPage from "./../pages/AboutUsPage";
import CreateCardPage from "../pages/CreateCardPage/CreateCardPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import LikedCardsPage from "../pages/LikedCardsPage";
import ProfilePage from "../pages/ProfilePage";
import AuthGuard from "../guard/AuthGuard";
import BizGuard from "../guard/BizGuard";
import SearchResultsPage from "../layout/header/ui/SearchResultsPage";
import MyCardsPage from "../pages/MyCardsPage";
import ViewCardComponent from "../components/ViewCardComponent";


const Router = () => {
  //http://localhost:3000/
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutUsPage />} />
      <Route path={ROUTES.CREATECARD} element={<CreateCardPage/>} />
      <Route path={ROUTES.LIKEDCARDS} element={<LikedCardsPage/>} />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage/>} /> 
      <Route path="/search" element={<SearchResultsPage />} />
      <Route
        path={`${ROUTES.EDITCARD}/:id`}
        element={
          <BizGuard>
            <EditCardPage />
          </BizGuard>
        }
      />
      <Route
           path={ROUTES.PROFILE} 
           element={
          <AuthGuard>
            <ProfilePage />
          </AuthGuard>
        }
      />
     
      <Route path="*" element={<NotFoundPage />} />,
     <Route    path = {`${ROUTES.VIEWCARD}/:id`} element= {<ViewCardComponent/> } />
    </Routes>
  );
};
export default Router;
