import React from "react";
import "./style.css";
import Layout from "../../components/layout";
import txt_production_department from "../../assets/plantation/txt_production-department.svg";

class Plantation extends React.Component {
  render() {
    return (
      <div className="contents">
        <article>
          <div className="industryIntro productionDept">
            <div className="industryJumbotron" />
            <div className="industryBoard">
              <div className="inner">
                <h1>生産部</h1>
                <img
                  src={txt_production_department}
                  alt=""
                  className="subtitle"
                />
              </div>
            </div>
            <div className="productionDeptBlock01">
              <p>
                和歌山有田を中心に、
                <br />
                和歌山県内で約40箇所の畑で、
                <br />
                温州みかんやきよみ、はっさくなどの
                <br />
                柑橘類を育てています。
                <br />
                少子化や高齢化により深刻化する、
                <br />
                みかん農家の後継者不足問題に
                <br />
                歯止めをかけたいという
                <br />
                思いから積極的に自社農地を所有し、
                <br />
                より品質の良いみかんを生産し、
                <br />
                収穫できるよう努力し続けます。
              </p>
            </div>
            <div className="productionDeptBlock02">
              <p>
                黒潮の潮風と温暖な気候により、
                <br />
                柑橘の大生産地である和歌山。
                <br />
                伊藤農園は有田みかんの産地である
                <br />
                有田市を中心とした和歌山県内で、
                <br />
                10ha（東京ドーム約3個分）の園地を管理し、
                <br />
                様々な柑橘を育てています。
              </p>
              <dl>
                <dt>自社農場での栽培品目</dt>
                <dd>
                  温州ミカンを主とし、その他に八朔・伊予柑・
                  <br />
                  不知火・清見・なつみ・セミノール・甘夏を栽培
                </dd>
              </dl>
            </div>
          </div>
          <div className="productionCalendarHeading ">
            <span>生産部のカレンダー</span>
          </div>
          <div className="productionCalendar">
            <div className="inner">
              <div className="months">
                <div>
                  <span className="month">10月</span>
                  <span className="block" />
                </div>
                <div>
                  <span className="month">11月</span>
                  <span className="block" />
                </div>
                <div>
                  <span className="month">12月</span>
                  <span className="block" />
                </div>
                <div>
                  <span className="month">1月</span>
                  <span className="block" />
                </div>
                <div>
                  <span className="month">2月</span>
                  <span className="block" />
                </div>
                <div>
                  <span className="month">3月</span>
                  <span className="block" />
                </div>
                <div>
                  <span className="month">4月</span>
                  <span className="block" />
                </div>
                <div>
                  <span className="month">5月</span>
                  <span className="block" />
                </div>
                <div>
                  <span className="month">6月</span>
                  <span className="block" />
                </div>
                <div>
                  <span className="month">7月</span>
                  <span className="block" />
                </div>
                <div>
                  <span className="month">8月</span>
                  <span className="block" />
                </div>
                <div>
                  <span className="month">9月</span>
                  <span className="block" />
                </div>
              </div>
              <div className="item item01">温州みかん</div>
              <div className="item item02">清見</div>
              <div className="item item03">セミノール</div>
              <div className="item item04"> はっさく</div>
              <div className="item item05">甘夏</div>
              <div className="item item06">除草(草刈)</div>
              <div className="item item07">剪定</div>
              <div className="item item08">薬かけ</div>
              <div className="item item09">薬かけ</div>
              <div className="item item10">肥料やり</div>
              <div className="item item11">摘果</div>
              <div className="item item12">潅水(水やり)</div>
            </div>
          </div>
          <div className="outlineModule industryInterview" />
        </article>
      </div>
    );
  }
}
export default Layout(Plantation);
