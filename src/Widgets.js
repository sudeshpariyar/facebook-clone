import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Freact%2Fposts%2F2408710402540686&width=340"
        width="340"
        height="100%"
        style={{
          border: "none",
          overflow: "hidden",
          marginTop: "15px",
          marginRight: "10px",
        }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
