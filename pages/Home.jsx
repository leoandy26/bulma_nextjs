import Head from "next/head";
import { Inter } from "next/font/google";
import Styles from "./Home.module.scss";
import Script from "next/script";
import { faHouse, faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope as faEnvelopeRegular } from "@fortawesome/free-regular-svg-icons";
import { faBell as faBellRegular } from "@fortawesome/free-regular-svg-icons";
library.add(faHeartRegular, faEnvelopeRegular, faBellRegular);

const inter = Inter({ subsets: ["latin"] });

const campain_list = [
  {
    id: 1,
    title: "ゲーム",
    url: String,
  },
  {
    id: 2,
    title: "グルメ",
    url: String,
  },
  {
    id: 3,
    title: "トラベル",
    url: String,
  },
  {
    id: 4,
    title: "レジャー",
    url: String,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script src="https://kit.fontawesome.com/f7881610ec.js" />
      </Head>

      <main>
        <hero className={Styles.Hero}>
          <div className="HamBurgerBox">
            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <header className={Styles.Header}>
            <p className={Styles.HeaderText}>3rDOOR</p>
            <div class="field is-grouped ">
              <p class="control is-expanded Searchbar">
                <FontAwesomeIcon className="HeaderSearchIcon" icon={faSearch} />
                <input
                  class="input HeaderInput"
                  type="text"
                  placeholder="       キーワードを入力して検索しますか？"
                />
                <FontAwesomeIcon className="HeaderFilterIcon" icon={faFilter} />
              </p>
            </div>
          </header>
        </hero>
        <div>
          <div class="box FlexPickUP">
            <button class="button is-danger PickUpBtn">PICKUP</button>
            <p class="PIckUPText">神泉駅５分 アフタヌーンティーのPRをお願･･･</p>
          </div>
          <div class="box UnreadCard">
            <p className="UnreadTitle">未読あり |</p>
            <div className="UnreadRight">
              <p class="Time">５時間前</p>
              <p class="UnreadText">
                最高級の豆を使った完全オリジナルコーヒーの･･･
              </p>
            </div>
          </div>
          <div className="CampainContainer">
            <div className="CampainText">カテゴリーでキャンペーンを探す</div>
            <div className="CampainPicBox">
              {campain_list.map((item) => (
                <div key={item.id} className="CampainCard">
                  <hero className={Styles.CampainPicture}>
                    <div className="CategoryCenterTitle">{item.title}</div>
                  </hero>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="Footer">
          <div className="FooterNav">
            <ul className="NavList">
              <li className="NavItem">
                <FontAwesomeIcon icon={faHouse} />
              </li>
              <li className="NavItem">
                <FontAwesomeIcon icon={faSearch} />
              </li>
              <li className="NavItem">
                <FontAwesomeIcon icon={faEnvelopeRegular} />
              </li>
              <li className="NavItem">
                <FontAwesomeIcon icon={faHeartRegular} />
              </li>
              <li className="NavItem">
                <FontAwesomeIcon icon={faBellRegular} />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
