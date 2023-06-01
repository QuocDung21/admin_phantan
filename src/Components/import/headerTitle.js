import React from "react";

const headerTitle = ({ title }) => {
  return (
    <div>
      <div className="flex text-center items-center justify-center">
        <h2>ADD {title}</h2>{" "}
      </div>
      <hr />
    </div>
  );
};

export default headerTitle;
