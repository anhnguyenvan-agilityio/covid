import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";
const _ = require("lodash");

const useStyles = makeStyles({
  firstCell: {
    width: "150px",
    fontSize: "1rem",
    padding: "10px"
  },
  cell: {
    padding: "10px",
    width: "150px"
  },
  headColor: {
    backgroundColor: "#e8e4e3",
    padding: "10px"
  }
});

const CovidHeader = props => {
  const classes = useStyles();
  return (
    <TableHead className={classes.headColor}>
      <TableRow>
        <TableCell className={classes.firstCell}>{props.countryName}</TableCell>
        <TableCell className={classes.cell}>Nhiễm</TableCell>
        <TableCell className={classes.cell}>Phục hồi</TableCell>
        <TableCell className={classes.cell}>Chết</TableCell>
        <TableCell className={classes.cell}>Tỷ lệ chết</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default React.memo(CovidHeader, (prev, next) => {
  if (_.isEqual(prev, next)) return true;
  return false;
});
