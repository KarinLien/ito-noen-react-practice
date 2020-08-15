import React from "react";
import "./style.css";
/*------------------------------------------------------ */
import Img from "../../assets/common/txt_ito-noen.svg";
import mailImg from "../../assets/common/ico_mail.svg";
import facebookIcon from "../../assets/common/ico_facebook.svg";
import igIcon from "../../assets/common/ico_instagram.svg";
import menuIcon from "../../assets/common/txt_menu.svg";
import closeIconImg from "../../assets/common/txt_close.svg";
/*------------------------------------------------------- */
import MenuContainer from "../MenuContain";

class Header extends React.Component {
  state = {
    openMenu: false
  };
  openMenu = () => {
    this.setState({
      openMenu: !this.state.openMenu
    });
  };
  componentDidUpdate() {
    let { openMenu } = this.state;
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else if (!openMenu) {
      document.body.style.overflow = "";
    }
  }
  render() {
    const { openMenu } = this.state;

    return (
      <div className="main-header">
        <a
          href="##"
          className="toggleMenu typesquare_tags"
          onClick={this.openMenu}
        >
          <span
            style={{
              transform: openMenu ? "translateY(10px) rotate(45deg)" : "",
              width: openMenu ? "32px" : "35px"
            }}
          />
          <span style={{ opacity: openMenu ? "0" : "1" }} />
          <span
            style={{
              transform: openMenu ? "translateY(-10px) rotate(-45deg)" : "",
              width: openMenu ? "32px" : "25px"
            }}
          />
          {openMenu ? (
            <img src={closeIconImg} alt="menu" />
          ) : (
            <img src={menuIcon} alt="menu" />
          )}
        </a>
        <a href="/" className="headerTextLogo">
          <span className="typesquare_tags">伊藤農園</span>
          <img src={Img} alt="ITO NOEN" />
        </a>
        <ul className="headerNav pcOnly">
          <li>
            <a href="##">
              <img src={mailImg} alt="お問い合わせ" />
            </a>
          </li>
          <li>
            <img src={facebookIcon} alt="facebook" />
          </li>
          <li>
            <img src={igIcon} alt="ig" />
          </li>
        </ul>
        {openMenu ? <MenuContainer /> : ""}
      </div>
    );
  }
}
export default Header;
