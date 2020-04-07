import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";

const _ = require("lodash");

const useStyles = makeStyles({
  cell: {
    padding: "10px",
    width: "150px",
  },
  visible: {
    display: "table-row",
  },
  invisible: {
    display: "none",
  },
  firstCell: {
    width: "150px",
    padding: "10px",
  },
});

const CovidItem = (props) => {
  // console.log("render covids item");
  const classes = useStyles();
  const visible = props.visible ? classes.visible : classes.invisible;
  return (
    <TableRow className={visible}>
      <TableCell
        component="th"
        scope="row"
        align="left"
        className={classes.firstCell}
      >
        {props.covid.sk}
      </TableCell>
      <TableCell align="left" className={classes.cell}>
        {props.covid.confirmed.toLocaleString()}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {props.covid.increaseConfirmed || props.covid.increaseConfirmed === 0
            ? ` (+${props.covid.increaseConfirmed.toLocaleString()})`
            : ""}
        </span>
      </TableCell>
      <TableCell align="left" className={classes.cell}>
        {props.covid.recovered.toLocaleString()}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {props.covid.increaseRecovered || props.covid.increaseRecovered === 0
            ? ` (+${props.covid.increaseRecovered.toLocaleString()})`
            : ""}
        </span>
      </TableCell>
      <TableCell align="left" className={classes.cell}>
        {props.covid.deaths.toLocaleString()}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {props.covid.increaseDeaths || props.covid.increaseDeaths === 0
            ? ` (+${props.covid.increaseDeaths.toLocaleString()})`
            : ""}
        </span>
      </TableCell>
      <TableCell align="left" className={classes.cell}>
        {(props.covid.deathRate * 100).toFixed(2)} %
      </TableCell>
    </TableRow>
  );
};

export default React.memo(CovidItem, (prev, next) => {
  if (_.isEqual(prev, next)) return true;
  return false;
});
