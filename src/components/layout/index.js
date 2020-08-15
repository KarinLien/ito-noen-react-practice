import React from "react";
import Header from "../Header";

const Layout = Component =>
  class extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <div style={{ paddingLeft: "95px", margin: "10px 10px" }}>
            <Component {...this.props} {...this.state} />
          </div>
        </div>
      );
    }
  };

export default Layout;
