import React from "react";
import "./style.css";

class BtnStyleTwo extends React.Component {
  render() {
    const { container,name } = this.props;
    return (
      <div className={`btnStyle02 ${container}`}>
        <a href="##" className="btn nextBtn">
          <span>{name}</span>
        </a>
      </div>
    );
  }
}

export default BtnStyleTwo;
