import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget__article">
      <div className="widgets__articleleft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget__articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkdin news</h2>
        <InfoIcon />
      </div>
      {newsArticle("React js", "React js i a good and fast library")}
    </div>
  );
}

export default Widgets;
