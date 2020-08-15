import React from "react";
import "./style.css";

class MenuContain extends React.Component {
  render() {
    return (
      <div className="overlayMenu">
        <div className="wrapper">
          <div className="inner">
            <div className="overlayMenuBlocks">
              <div className="overlayMenuBlock overlayMenuBlockAbout">
                <a className="overlayMenuBlockTitle" href="/about">
                  <span>
                    伊藤農園とは
                    <small>ABOUT</small>
                  </span>
                </a>
                <ul className="overlayMenuBlockList1">
                  <li>
                    <a href="/about">有田と、伊藤農園</a>
                  </li>
                  <li>
                    <a href="/philosophy">企業理念</a>
                  </li>
                  <li>
                    <a href="/outline">会社概要</a>
                  </li>
                  <li>
                    <a href="/business">事業内容</a>
                  </li>
                </ul>
                <ul className="overlayMenuBlockList2">
                  <li>
                    <a className="btn" href="/bussiness/plantation">
                      <span>生産部</span>
                    </a>
                  </li>
                  <li>
                    <a className="btn" href="##">
                      <span>製造部</span>
                    </a>
                  </li>
                  <li>
                    <a className="btn" href="##">
                      <span>販売部</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="overlayMenuBlock overlayMenuBlockLineup">
                <div className="inner">
                  <a
                    href="/products"
                    className="overlayMenuBlockTitle"
                    style={{ width: "90px" }}
                  >
                    <span>
                      商品紹介<small>Lineup</small>
                    </span>
                  </a>
                  <p className="overlayMenuBlockSubTitle">製品</p>
                  <ul
                    className="overlayMenuBlockList productsList"
                    style={{ padding: "0" }}
                  >
                    <li>
                      <a href="##">100%ピュアジュース</a>
                    </li>
                    <li>
                      <a href="##">ピュアフルーツ寒天ジュレ</a>
                    </li>
                    <li>
                      <a href="##">素材そのままマーマレード</a>
                    </li>
                    <li>
                      <a href="##">ぴゅあなドライかんきつ</a>
                    </li>
                    <li>
                      <a href="##">素朴ドリンク</a>
                    </li>
                    <li>
                      <a href="##">みかん茶</a>
                    </li>
                    <li>
                      <a href="##">有田みかんサイダー</a>
                    </li>
                    <li>
                      <a href="##">ぴゅあなピール</a>
                    </li>
                    <li>
                      <a href="##">伊藤農園 ギフトボックス</a>
                    </li>
                    <li>
                      <a href="##">業務用じゃばら果汁,じゃばらピール</a>
                    </li>
                    <li>
                      <a href="##">業務用レモン果汁,レモンピール</a>
                    </li>
                    <li>
                      <a href="##">業務用ゆず果汁,ゆずピール</a>
                    </li>
                  </ul>
                  <p className="overlayMenuBlockSubTitle">原料</p>
                  <div className="rawMaterialsSection">
                    <ul
                      className="overlayMenuBlockList rawMaterialsList"
                      style={{ padding: "0" }}
                    >
                      <li>
                        <a href="/purchase/fruit">青果</a>
                      </li>
                      <li>
                        <a href="/purchase/juice">原料果汁</a>
                      </li>
                      <li>
                        <a href="##">原料果皮</a>
                      </li>
                    </ul>
                    <a href="##" className="btn">
                      <span>
                        <i
                          className="iconCart"
                          style={{ marginRight: "12px" }}
                        />
                        オンラインショップはこちら
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlayMenuBlocks">
              <div className="overlayMenuBlock overlayMenuBlockRecruit">
                <a href="/recruit">
                  <div className="inner">採用情報</div>
                </a>
              </div>
              <div className="overlayMenuBlock overlayMenuBlockPurchase">
                <a href="/purchase">
                  <div className="inner">仕入れ希望の方へ</div>
                </a>
              </div>
              <div className="overlayMenuBlock overlayMenuBlockLinks">
                <ul className="overlayMenuBlockList">
                  <li>
                    <a href="##">催事情報</a>
                  </li>
                  <li>
                    <a href="##">お知らせ</a>
                  </li>
                  <li>
                    <a href="##">お問い合わせ</a>
                  </li>
                  <li>
                    <a href="##">プライバシーポリシー</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuContain;
