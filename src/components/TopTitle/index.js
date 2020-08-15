import React from "react";
import "./style.css";
/*------------------------------------------------------------------------ */
import scrollImg from "../../assets/common/txt_scroll03.svg";
import logoImg from "../../assets/common/logo.svg";
import LinkOne from "../../assets/common/img_top-links01.jpg";
import LinkTwo from "../../assets/common/img_top-links02.jpg";
import LinkThree from "../../assets/common/img_top-links03.jpg";
import btn_event_information_pc from "../../assets/common/btn_event-information_pc.jpg";
import firstIgImg from "../../assets/common/65949332_117840526172007_4175605790505356161_n.jpg";
import secIgImg from "../../assets/common/65267055_406987883494234_6048098447165202273_n.jpg";
import thirIgImg from "../../assets/common/65387881_2301991716513677_8885352376445171097_n.jpg";
import forIgImg from "../../assets/common/65121129_1755779994525017_990489922039949572_n.jpg";
import fivIgImg from "../../assets/common/65304050_175082266831835_2124207931412743498_n.jpg";
import sixIgImg from "../../assets/common/62240209_688754034930536_70096267514115635_n.jpg";
/*---------------------------------------------------------------------------------------- */

class TopTitle extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    var pageScroll = window.pageYOffset;
    if (pageScroll >= 500) {
      document.getElementById("topContentsWrap").classList.add("widthshow");
    } else {
      document.getElementById("topContentsWrap").classList.remove("widthshow");
    }
  };
  render() {
    return (
      <div className="contents">
        <article className="">
          <div className="topVideoWrapper  typesquare_tags">
            <div className="forVideo" />
            <div className="scroll">
              <img src={scrollImg} alt="scroll" />
            </div>
          </div>
          <div className="topContentsWrap" id="topContentsWrap">
            <div className="topTitle isVisited phase2">
              <div className="inner" style={{ textAlign: "center" }}>
                <h1 className="text typesquare_tags" id="titleH1">
                  育んだのは、有田の風と土。
                  <br />
                  素材の味をそのままに。
                </h1>
                <img src={logoImg} alt="logo" className="logo" />
              </div>
            </div>
            <div className="inner">
              <div className="topContents">
                <section className="topIntroSection">
                  <div className="inner" style={{ padding: "10px" }}>
                    <div className="headingWrap">
                      <h2 className="heading typesquare_tags">
                        素材は
                        <span className="typesquare_tags">みかん</span>
                        だけ。
                      </h2>
                    </div>
                    <strong className="subHeading">
                      和歌山有田から、 <br />
                      ぴゅあなおいしさお届けします。
                    </strong>
                    <p className="text-in-subHeading">
                      紀州の温暖な気候と黒潮から吹く潮風に恵まれた和歌山県有田市で、
                      柑橘類の生産、搾汁、加工、販売までを手掛けています。
                      いち早く農業の六次産業化に取り組み、地元産の有田みかんを始めとする柑橘を使った加工商品を国内外へ発信。
                      地元農家の方々と共に歴史あるみかん畑を絶やさないよう、和歌山産みかんの美味しさ、価値を届けていきます。
                    </p>
                    <div style={{ textAlign: "right" }}>
                      <a className="link" href="##########">
                        有田と、伊藤農園
                      </a>
                    </div>
                  </div>
                </section>
                <div className="topLinksSection">
                  <ul className="topLinksList" style={{ listStyle: "none" }}>
                    <li>
                      <a href="######" style={{ display: "block" }}>
                        <figure className="picture">
                          <img src={LinkOne} alt="LinkOne" />
                        </figure>
                        <span className="link">
                          <span>商品紹介</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#########" style={{ display: "block" }}>
                        <figure className="picture">
                          <img src={LinkTwo} alt="LinkOne" />
                        </figure>
                        <span className="link">
                          <span>仕入れ希望の方へ</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="##" style={{ display: "block" }}>
                        <figure className="picture">
                          <img src={LinkThree} alt="LinkOne" />
                        </figure>
                        <span className="link">
                          <span>採用情報</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <section
                  className="topNewsSection"
                  style={{ maxWidth: "445px" }}
                >
                  <div className="inner">
                    <h2 className="heading" style={{ paddingLeft: "10%" }}>
                      お知らせ <small>NEWS</small>
                    </h2>
                    <ul className="topNewsList">
                      <li>
                        <a href="#####">
                          <time datatime="2019-03-06T15:25:18+00:00">
                            2019.03.06
                          </time>
                          <span>＃03「 ピュアな美味しさお届けします」</span>
                        </a>
                      </li>
                      <li>
                        <a href="#####">
                          <time datatime="2019-03-06T15:25:18+00:00">
                            2019.03.06
                          </time>
                          <span>
                            ＃02　[きくちゃん登場　みかんしぼりが好きすぎて」
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#####">
                          <time datatime="2019-03-05T15:25:18+00:00">
                            2019.03.05
                          </time>
                          <span>
                            ＃01「お碗搾りにびっくり」和歌山　みかんジュース
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#####">
                          <time datatime="2018-09-03T15:25:18+00:00">
                            2018.09.03
                          </time>
                          <span>
                            伊藤農園のコーポレートサイトができました。
                          </span>
                        </a>
                      </li>
                    </ul>
                    <a href="##" className="link">
                      もっと見る
                    </a>
                  </div>
                </section>
                <a className="topEventInformation" href="###">
                  <figure style={{ margin: "15% 0" }}>
                    <img
                      src={btn_event_information_pc}
                      alt="btn_event_information_pc"
                    />
                  </figure>
                </a>
                <section className="topInstagramSection">
                  <h2 className="heading" style={{ position: "relative" }}>
                    INSTAGRAM
                  </h2>
                  <a href="###" className="instagramLink">
                    <span>@ito_noen</span>
                  </a>
                  <ul className="topInstagramList">
                    <li>
                      <a href="https://www.instagram.com/p/B0GDqWABtiV/">
                        <div
                          style={{
                            backgroundImage: `url(${firstIgImg})`
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/p/B0GDqWABtiV/">
                        <div
                          style={{
                            backgroundImage: `url(${secIgImg})`
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/p/B0GDqWABtiV/">
                        <div
                          style={{
                            backgroundImage: `url(${thirIgImg})`
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/p/B0GDqWABtiV/">
                        <div
                          style={{
                            backgroundImage: `url(${forIgImg})`
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/p/B0GDqWABtiV/">
                        <div
                          style={{
                            backgroundImage: `url(${fivIgImg})`
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/p/B0GDqWABtiV/">
                        <div
                          style={{
                            backgroundImage: `url(${sixIgImg})`
                          }}
                        />
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
export default TopTitle;
