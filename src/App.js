// import logo from "./logo.svg";
import {Provider} from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchContainer from "./components/WatchContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch/:id",
        element: <WatchContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App ">
        <Header />

        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
