import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import SearchScreen from './screens/SearchScreen';
import BookmarkedScreen from './screens/BookmarkedScreen';
import { style } from './styles/App.Style';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(style);

function App() {

  const classes = useStyles();

  return (
    <div>

      <header className="header">
        Recipe Search
      </header>

      <Router>
        <div className={classes.root}>
          <Sidebar/>
          <Switch>
            <Route exact path="/bookmarked" component={BookmarkedScreen} /> {/*Bookmarked recipes screen*/}
            <Route exact path="/" component={SearchScreen} /> {/*Search recipes screen*/}
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
