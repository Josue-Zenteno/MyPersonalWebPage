import { Container, Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

import "./App.css";

export default function App() {
  return (
    <Container className={"mt_60"}>
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
                <Route path='/'>
                  <Resume />
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
