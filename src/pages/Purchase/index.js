import React from "react";
import Layout from "../../components/layout";
import "./style.css";
/*---------------------------------------------- */
// import TitleImg from "../../assets/purchase/mainimg_purchase_pc.jpg";
import JumbotronTextImg from "../../assets/purchase/txt_for-sales.svg";
import JumbotronTitle from "../../components/JumbotronTitle";
/*---------------------------------------------- */

import pic_advantage01 from "../../assets/purchase/pic_advantage01.jpg";
import pic_advantage02 from "../../assets/purchase/pic_advantage02.jpg";
import pic_advantage03 from "../../assets/purchase/pic_advantage03.jpg";
/*--------------------------------------------- */

class Purchase extends React.Component {
  render() {
    return (
      <div>
        <article>
          <JumbotronTitle
            title="仕入れ希望の方へ"
            jumbotronTextImg={JumbotronTextImg}
            imgClassName="jumbotronPurchaseTop"
          />
          <div style={{ marginTop: "30%" }}>
            <p className="purchaseTopIntro">
              温暖な和歌山の有田では、先人達が山に石をつみ段々畑をつくっては木を植え、
              <br />
              おいしい有田みかんを大切に育て守ってきました。やがてみかんの里となったこの地では、
              <br />
              季節ごとに美味しいみかんがたくさん採れるようになりました。
              <br />
              <br />
              そんな有田で120年の歴史を持つ伊藤農園。
              <br />
              和歌山で獲れる柑橘そのままのおいしさを味わっていただくため、
              <br />
              添加物を使わない製法で加工品をつくり続けています。
            </p>
            <div className="blockModule01 purchaseModule01 ourAdvanteges">
              <div className="inner">
                <h2 className="heading2">伊藤農園の強み</h2>
                <ul className="purchaseModule01List">
                  <li>
                    <div className="title">
                      <span className="number">1</span>
                      <span className="purchase-text">
                        取り扱い柑橘は約20種類
                      </span>
                    </div>
                    <div>
                      <figure>
                        <img src={pic_advantage01} alt="" />
                      </figure>
                    </div>
                    <p className="description">
                      温州みかん、きよみ、八朔、あまなつ…。お馴染みの柑橘から、あまり市場に出回らないものまで、季節ごとに様々な種類の柑橘を扱っています。
                    </p>
                    <a className="link" href="##">
                      詳しくはこちら
                    </a>
                  </li>
                  <li>
                    <div className="title">
                      <span className="number">2</span>
                      <span className="purchase-text">
                        柑橘はすべて和歌山産
                      </span>
                    </div>
                    <div>
                      <figure>
                        <img src={pic_advantage02} alt="" />
                      </figure>
                    </div>
                    <p className="description">
                      温暖な気候と黒潮から吹く潮風に恵まれ、みかんやはっさくなど日本一の生産量を誇る和歌山県。伊藤農園では、地元である和歌山県産の柑橘のみ、取り扱っています。
                    </p>
                    <a className="link" href="##">
                      詳しくはこちら
                    </a>
                  </li>
                  <li>
                    <div className="title">
                      <span className="number">3</span>
                      <span className="purchase-text">
                        添加物を使わず
                        <br />
                        自然の味を生かした製造方法
                      </span>
                    </div>
                    <div>
                      <figure>
                        <img src={pic_advantage03} alt="" />
                      </figure>
                    </div>
                    <p className="description">
                      和歌山産柑橘の味そのままを届けたいから、化学添加物を使わずに製造しています。また素材のおいしさを損なわないよう、弊社で独自開発した機械を使い、搾汁を行っています。
                    </p>
                    <a className="link" href="##">
                      詳しくはこちら
                    </a>
                  </li>
                </ul>
                <div className="advantageText">
                  <span>
                    弊社だからこそできる、安心・安全で、良質なものをご提供したい。
                  </span>
                  <br />
                  <span>
                    その思いが届き、今では数多くのお客様から取引いただいています。
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Layout(Purchase);
