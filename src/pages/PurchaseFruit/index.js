import React from "react";
import Layout from "../../components/layout";
import FandV from "../../assets/purchase/fruit/txt_fruit-and-vegetables.svg";
import "./style.css";
/*-------------------------------------------- */
import Pic_seika_intro from "../../assets/purchase/fruit/pic_seika-intro_pc.jpg";
import txt_citrus_calendar from "../../assets/purchase/fruit/txt_citrus-calendar.svg";
import { liData } from "./data";
import PurchaseJumbotronTitle from "../../components/PurchaseJumbotronTitle";
/*-------------------------------------------- */
import img_citrus01 from "../../assets/purchase/fruit/img_citrus01.png";
import img_citrus02 from "../../assets/purchase/fruit/img_citrus02.png";
import img_citrus03 from "../../assets/purchase/fruit/img_citrus03.png";
/*-------------------------------------------- */
class PurchaseFruit extends React.Component {
  render() {
    return (
      <div className="contents">
        <article>
          <PurchaseJumbotronTitle
            title="青果"
            titleImg={FandV}
            className="PurchaseFruit"
          />
          <div className="purchaseIntro pageSeika">
            <strong className="text02">
              和歌山産のみかんが
              <br />
              おいしい理由。
            </strong>
            <p className="text03">
              紀州の温暖な気候と黒潮から吹くミネラル豊富な潮風に恵まれ、みかんの生産量日本一を誇る和歌山。
              <br />
              中でも古くから栽培が行われていた有田は、品質の良いみかんをつくる産地として有名です。
            </p>
            <figure className="picture">
              <picture>
                <img src={Pic_seika_intro} alt="pic_seika_intro" />
              </picture>
            </figure>
          </div>
          <div className="purchaseSeika01">
            <h2 className="purchaseSeikaHeading orange01">
              <span>
                最高の環境がおいしい
                {/* <br /> */}
                みかんを育てます
              </span>
            </h2>
            <div className="blockModule01">
              <div className="inner">
                <h3 className="heading">
                  <small>400年以上の歴史を持つみかんの名産地</small>
                  <span>和歌山県有田</span>
                </h3>
                <ul className="purchaseSeika02">
                  {liData.map((item, index) => (
                    <li key={index}>
                      <figure>
                        <picture>
                          <img
                            src={require(`../../assets/purchase/fruit/pic_seika-environment0${index +
                              1}.jpg`)}
                            alt={item.picName}
                          />
                        </picture>
                        <figcaption>{item.title}</figcaption>
                      </figure>
                      <p>{item.content}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="citrusCalendar">
            <div className="citrusCalendarHeading">
              <h2>
                <small>伊藤農園の取り扱い</small>柑橘カレンダー
              </h2>
              <img src={txt_citrus_calendar} alt="txt_citrus_calendar" />
            </div>
            <div className="inner">
              <ul className="citrusCalendarList">
                <li className="citrus01">
                  <dl>
                    <dt>
                      <img src={img_citrus01} alt="img_citrus01" />
                      <span>温州みかん</span>
                    </dt>
                    <dd>
                      紀州有田の代表銘柄「温州みかん」。
                      <br />
                      収穫時期により酸味と甘味のバランスが変わります。
                    </dd>
                  </dl>
                  <div className="citrusSeason">
                    <span className="citrusSeason-text">食べごろ：</span>
                    <span className="label">10月～2月</span>
                  </div>
                </li>
                <li className="citrus02">
                  <dl>
                    <dt>
                      <img src={img_citrus02} alt="img_citrus02" />
                      <span>ゆず</span>
                    </dt>
                    <dd>
                      独特の華やかな香りが特徴。果汁は焼魚やポン酢に、
                      <br />
                      皮は刻んで料理のアクセントに最適。
                    </dd>
                  </dl>
                  <div className="citrusSeason">
                    <span className="citrusSeason-text">食べごろ：</span>
                    <span className="label">
                      11月～
                      <br />
                      1月中旬
                    </span>
                  </div>
                </li>
                <li className="citrus03">
                  <dl>
                    <dt>
                      <img src={img_citrus03} alt="img_citrus03" />
                      <span>レモン</span>
                    </dt>
                    <dd>
                      お料理やジュース、砂糖漬けしておやつにも。
                      <br />
                      苦みが少ないのでいろんな用途で大活躍です。
                    </dd>
                  </dl>
                  <div className="citrusSeason">
                    <span className="citrusSeason-text">食べごろ：</span>
                    <span className="label">11月～4月下旬</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Layout(PurchaseFruit);
