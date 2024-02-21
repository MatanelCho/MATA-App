import { useState } from "react";
import LayoutComponent from "./layout/LayoutComponent";
import Router from "./routes/Router";
import LoginContext from "./store/loginContext";
import { LikedCardsProvider } from "./store/likedCardsContext"; 
import { ToastContainer } from "react-toastify";



function App() {
  
  const [login, setLogin] = useState(null);
  


  return (
 
      <LoginContext.Provider value={{ login, setLogin }}>
      <LikedCardsProvider> 
        <ToastContainer />
        <LayoutComponent>
          <Router />
        </LayoutComponent>
        </LikedCardsProvider>
      </LoginContext.Provider>
  );
}

export default App;
