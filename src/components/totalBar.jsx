import React from "react";

const TotalBar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div>
        <span className="navbar-brand mb-0 h1">
          Total: <span className="badge m-2 badge-info">{totalCount}</span>
        </span>
      </div>
    </nav>
  );
};

export default TotalBar;
