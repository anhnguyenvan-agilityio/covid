import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";
const _ = require("lodash");

const useStyles = makeStyles({
  firstCell: {
    width: "150px",
    padding: "10px",
    textAlign: "center",
  },
  headColor: {
    backgroundColor: "#e8e4e3",
    padding: "10px",
  },
});

const CovidHeader = (props) => {
  const classes = useStyles();
  return (
    <TableHead className={classes.headColor}>
      <TableRow>
        <TableCell className={classes.firstCell} colSpan={5}>
          {props.countryName}
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default React.memo(CovidHeader, (prev, next) => {
  if (_.isEqual(prev, next)) return true;
  return false;
});
