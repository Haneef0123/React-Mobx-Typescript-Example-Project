import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default observer(App) ;
