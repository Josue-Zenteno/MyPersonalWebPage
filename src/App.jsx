import { Container, Grid } from "@mui/material";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from "./pages/Home/Home";


import "./App.css";

export default function App() {
  return (
    <Container className={"mt_60"} maxWidth='xl'>
      <Grid container spacing={4}>
        {/* Profile section*/}
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>

        {/* Information section */}
        <Grid item xs>
          <Router>
            {/* NavBar */}
            <Header />

            {/* Resume and Portfolio */}
            <div className='main_content container_shadow'>
              <Switch>
                {/* Portfolio */}
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>

                {/* Resume */}
                <Route path='/resume'>
                  <Resume />
                </Route>

                {/* Resume */}
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>

          {/* Footer */}
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
