import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const _ = require("lodash");

const useStyles = makeStyles({
  firstCell: {
    minWidth: "150px"
  }
});

const CovidInfo = props => {
  console.log("render" + props.info[0].countryName);
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.firstCell}>
              {props.info[0].countryName}
            </TableCell>
            <TableCell>Số người nhiễm</TableCell>
            <TableCell>Số người phục hồi</TableCell>
            <TableCell>Số người chết</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.info.map(item => {
            return (
              <TableRow key={item.sk}>
                <TableCell component="th" scope="row">
                  {item.sk}
                </TableCell>
                <TableCell align="left">
                  {item.confirmed.toLocaleString() +
                    `${
                      item.increaseConfirmed || item.increaseConfirmed === 0
                        ? `(+${item.increaseConfirmed})`
                        : ""
                    }`}
                </TableCell>
                <TableCell align="left">
                  {item.recovered.toLocaleString() +
                    `${
                      item.increaseRecovered || item.increaseRecovered === 0
                        ? `(+${item.increaseRecovered})`
                        : ""
                    }`}
                </TableCell>
                <TableCell align="left">
                  {item.deaths.toLocaleString() +
                    `${
                      item.increaseDeaths || item.increaseDeaths === 0
                        ? `(+${item.increaseDeaths})`
                        : ""
                    }`}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(CovidInfo, (prev, next) => {
  if (_.isEqual(prev, next)) return true;
  return false;
});
