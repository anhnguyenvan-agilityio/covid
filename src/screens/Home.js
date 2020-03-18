import React, { useState, useEffect } from "react";
import { getData } from "../utils/format-data";
import CovidInfo from "../components/CovidInfo";
import axios from "axios";
import { mockCovidAPI } from "../utils/mock-data";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bgAppBar: {
    backgroundColor: "#fff"
  },
  marginBtn: {
    marginRight: "20px"
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Home = props => {
  const classes = useStyles();
  const [covid, setCovid] = useState({});
  const [loading, setLoading] = useState(true);
  const [covidAPI, setCovidAPI] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const rs = await axios.get(
        "https://gwfuix7x99.execute-api.us-east-1.amazonaws.com/prod/covid-19"
      );
      let { data } = rs.data;
      setCovid(getData("confirmed", data));
      setCovidAPI(data);
      setLoading(false);
    }
    fetchData();
    // setCovid(getData("confirmed", mockCovidAPI));
    // setCovidAPI(mockCovidAPI);
    // setLoading(false);
  }, []);

  const render = () => {
    let temp = [];
    for (let key in covid) {
      temp.push(
        <div key={key}>
          <CovidInfo info={formatData(covid[key])} />
        </div>
      );
    }
    return temp;
  };
  const formatData = data => {
    let rs = [];
    for (let i = 0; i < data.length; i++) {
      if (i !== data.length - 1) {
        const item = {
          ...data[i],
          increaseRecovered: data[i].recovered - data[i + 1].recovered,
          increaseConfirmed: data[i].confirmed - data[i + 1].confirmed,
          increaseDeaths: data[i].deaths - data[i + 1].deaths
        };
        rs.push(item);
      } else {
        rs.push(data[i]);
      }
    }
    return rs;
  };
  const sort = type => {
    const data = getData(type, covidAPI);
    setCovid(data);
  };
  if (loading)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CircularProgress disableShrink size={200} thickness={4} />
      </div>
    );
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.bgAppBar}>
          <Toolbar>
            <Button
              onClick={() => sort("confirmed")}
              variant="outlined"
              color="primary"
              className={classes.marginBtn}
            >
              Sort theo số người nhiễm
            </Button>
            <Button
              onClick={() => sort("deaths")}
              variant="outlined"
              color="primary"
              className={classes.marginBtn}
            >
              Sort theo số người chết
            </Button>
            <Button
              onClick={() => sort("recovered")}
              variant="outlined"
              color="primary"
              className={classes.marginBtn}
            >
              Sort theo số người bình phục
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>{render()}</Container>
    </React.Fragment>
  );
};

export default Home;
