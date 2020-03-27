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

const CovidInfo = props => {
  // console.log("render" + props.info[0].countryName);
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead className={classes.headColor}>
          <TableRow>
            <TableCell className={classes.firstCell}>
              {props.info[0].countryName}
            </TableCell>
            <TableCell className={classes.cell}>Nhiễm</TableCell>
            <TableCell className={classes.cell}>Phục hồi</TableCell>
            <TableCell className={classes.cell}>Chết</TableCell>
            <TableCell className={classes.cell}>Tỷ lệ chết</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.info.map(item => {
            return (
              <TableRow key={item.sk}>
                <TableCell component="th" scope="row" align="left">
                  {item.sk}
                </TableCell>
                <TableCell align="left" className={classes.cell}>
                  {item.confirmed.toLocaleString()}
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {item.increaseConfirmed || item.increaseConfirmed === 0
                      ? ` (+${item.increaseConfirmed.toLocaleString()})`
                      : ""}
                  </span>
                </TableCell>
                <TableCell align="left" className={classes.cell}>
                  {item.recovered.toLocaleString()}
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {item.increaseRecovered || item.increaseRecovered === 0
                      ? ` (+${item.increaseRecovered.toLocaleString()})`
                      : ""}
                  </span>
                </TableCell>
                <TableCell align="left" className={classes.cell}>
                  {item.deaths.toLocaleString()}
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {item.increaseDeaths || item.increaseDeaths === 0
                      ? ` (+${item.increaseDeaths.toLocaleString()})`
                      : ""}
                  </span>
                </TableCell>
                <TableCell align="left" className={classes.cell}>
                  {(item.deathRate * 100).toFixed(2)} %
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
