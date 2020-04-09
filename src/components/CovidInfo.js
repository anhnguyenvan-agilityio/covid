import React from "react";
import CovidItem from "./CovidItem";

const _ = require("lodash");

const CovidInfo = (props) => {
  return (
    <>
      {props.info.map((item, index) => {
        const visible = props.sortBy !== 40 ? true : index === 0 ? true : false;
        return <CovidItem key={item.sk} covid={item} visible={visible} />;
      })}
    </>
  );
};

export default React.memo(CovidInfo, (prev, next) => {
  if (_.isEqual(prev, next)) return true;
  return false;
});
