import React from "react";
import Header from "../../components/Header";
import TopTitle from "../../components/TopTitle";
class Home extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <TopTitle />
      </div>
    );
  }
}

export default Home;
