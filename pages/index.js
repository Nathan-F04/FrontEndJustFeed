import HomePageList from "../components/homePageComponents/HomePageList";
import { useContext } from "react";
import GlobalContext from "../store/globalContext";

function HomePage() {
  const globalCtx = useContext(GlobalContext);

  if (globalCtx.theGlobalObject.dataLoaded == true) {
    return (
      <HomePageList
        foods={
          Array.isArray(globalCtx.theGlobalObject.orders)
            ? globalCtx.theGlobalObject.orders
            : []
        }
      />
    );
  }
  return null;
}

export default HomePage;
