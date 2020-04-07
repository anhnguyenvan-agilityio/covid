import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import CovidItem from "./CovidItem";
import CovidHeader from "./CovidHeader";
import { makeStyles } from "@material-ui/core/styles";

const _ = require("lodash");

const useStyles = makeStyles((theme) => ({
  removeBoxShadowBorderRadius: {
    boxShadow: "none",
    borderRadius: "0px",
  },
}));

const CovidInfo = (props) => {
  const classes = useStyles();
  return (
    <TableContainer
      component={Paper}
      className={classes.removeBoxShadowBorderRadius}
    >
      <Table aria-label="simple table">
        <CovidHeader countryName={props.info[0].countryName} />
        <TableBody>
          {props.info.map((item, index) => {
            const visible =
              props.sortBy !== 40 ? true : index === 0 ? true : false;
            return <CovidItem key={item.sk} covid={item} visible={visible} />;
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
