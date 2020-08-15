import React from "react";



class JumbotronTitle extends React.Component {
  render() {
    const { title, jumbotronTextImg, imgClassName } = this.props;
    return (
      <div className={`jumbotron ${imgClassName}`}>
        <div className="inner">
          <h1 className="title"> {title}</h1>
          <img src={jumbotronTextImg} alt="jumbotron" />
        </div>
      </div>
    );
  }
}
export default JumbotronTitle;
