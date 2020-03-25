import React, { useState, useEffect, useCallback } from "react";
import { getData } from "../utils/format-data";
import CovidInfo from "../components/CovidInfo";
import axios from "axios";
import { mockCovidAPI } from "../utils/mock-data";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";

import useDebounce from "../utils/useDebounce";

const _ = require("lodash");

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  searchContainer: {
    // padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 150,
    height: 39,
    marginLeft: "auto"
  },
  inputSearch: {
    padding: 10
  },
  bgAppBar: {
    backgroundColor: "#e0e0e0"
  },
  marginBtn: {
    marginRight: "10px",
    backgroundColor: "#fff"
  },
  title: {
    marginRight: "10px",
    color: "rgba(0, 0, 0, 0.87)",
    fontWeight: 500
  },
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    // marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

const drawerWidth = 200;

let covidAPI = [];

const Home = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [covid, setCovid] = useState({});
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = React.useState(10);
  const [search, setSearch] = React.useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    async function fetchData() {
      const rs = await axios.get(
        "https://gwfuix7x99.execute-api.us-east-1.amazonaws.com/prod/covid-19"
      );
      let { data } = rs.data;
      setCovid(getData("confirmed", data));
      covidAPI = data;
      setLoading(false);
    }
    fetchData();
    // setCovid(getData("confirmed", mockCovidAPI));
    // covidAPI = mockCovidAPI;
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

  const changeSearch = event => {
    const value = event.target.value;
    setSearch(value);
  };

  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    let getSort = "confirmed";
    if (sortBy === 10) getSort = "confirmed";
    else if (sortBy === 20) getSort = "recovered";
    else getSort = "deaths";
    if (search) {
      const data = [...covidAPI];
      const found = data.filter(function(item) {
        return (
          item.countryName.toLowerCase().indexOf(search.toLowerCase()) >= 0
        );
      });
      setCovid(getData(getSort, found));
    } else {
      setCovid(getData(getSort, covidAPI));
    }
  }, [debounceSearch]);

  const handleChange = event => {
    const value = event.target.value;
    if (value === 10) {
      sort("confirmed");
      setSortBy(10);
      return;
    }
    if (value === 20) {
      sort("recovered");
      setSortBy(20);
      return;
    }
    if (value === 30) {
      sort("deaths");
      setSortBy(30);
      return;
    }
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
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(
            classes.appBar,
            {
              [classes.appBarShift]: open
            },
            classes.bgAppBar
          )}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title}>Sắp xếp</Typography>
            <FormControl className={classes.margin}>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={sortBy}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value={10}>Nhiễm</MenuItem>
                <MenuItem value={20}>Bình phục</MenuItem>
                <MenuItem value={30}>Chết</MenuItem>
              </Select>
            </FormControl>
            <Paper className={classes.searchContainer}>
              <InputBase
                className={classes.inputSearch}
                placeholder="Search"
                onChange={changeSearch}
                value={search}
              />
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem
              button
              onClick={() => alert("Tính năng vẫn đang phát triển")}
            >
              <ListItemText primary={"Thống kế thế giới"} />
            </ListItem>
            <ListItem
              button
              onClick={() => alert("Tính năng vẫn đang phát triển")}
            >
              <ListItemText primary={"Thống kế Việt Nam"} />
            </ListItem>
            <ListItem
              button
              onClick={() =>
                alert(
                  `Ánh Nguyễn Văn - 0906.45.35.61 - nguyenvananh2111@gmail.com`
                )
              }
            >
              <ListItemText primary={"Giới thiệu tác giả"} />
            </ListItem>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <div>{render()}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Home;
