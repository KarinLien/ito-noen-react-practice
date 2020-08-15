import React from "react";
import Layout from "../../components/layout";
import BtnStyleTwo from "../../components/BtnStyleTwo";

import JumbotronTitle from "../../components/JumbotronTitle";
import JumbotronTextImg from "../../assets/product/txt_lineup.svg";

import "./style.css";

class Product extends React.Component {
  render() {
    return (
      <div>
        <article>
          <JumbotronTitle
            title="商品紹介"
            jumbotronTextImg={JumbotronTextImg}
            imgClassName="jumbotronProduct"
          />
          <div style={{ marginTop: "15%" }} className="productIndexIntro">
            <p className="productIndexIntroText">
              使っているのは和歌山産の果実だけ。混じりっけなしの美味しさをお届けします。
              <br />
              和歌山産の「みかん」そのままの美味しさを楽しんで欲しい。
              <br />
              その思いから、みかん山から採れたての柑橘で、化学添加物を使用せずに商品づくりを行っています。
              <br />
              伊藤農園のジュースをはじめ、ジュレやマーマレードなど全ての商品は、
              <br />
              手間ひまと愛情をたっぷりこめてつくり上げた〝ぴゅあ〟な美味しさに溢れています。
            </p>
          </div>
          <BtnStyleTwo
            container="productIndexIntro"
            name="オンラインショップはこちら"
          />
        </article>
      </div>
    );
  }
}

export default Layout(Product);
