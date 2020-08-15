import React from "react";

class PurchaseJumbotronTitle extends React.Component {
  render() {
    const {
      className,
      title,
      titleImg
    } = this.props;
    return (
    
        <div className={`purchaseJumbotron pageSeika ${className}`}>
          <div className="title">
            <h1>{title}</h1>
            <img src={titleImg} alt="FandV" />
          </div>
        </div>
    
    );
  }
}

export default PurchaseJumbotronTitle;
