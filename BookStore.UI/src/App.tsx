import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./assets/css/style.css";
import { theme } from "./utils/theme";
import MainNavigation from "./components/MainNavigation";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<></>}>
        <BrowserRouter>
          <div className="wrapper">
          <Header />
            <main>
              <MainNavigation />
            </main>
            <Footer />
          </div>
          <ToastContainer />
        </BrowserRouter>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
