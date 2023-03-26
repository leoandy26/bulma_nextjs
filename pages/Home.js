import Head from "next/head";
import { Inter } from "next/font/google";
import Styles from "./Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <hero class="Hero">
          <header className={Styles.Header}>
            <p className={Styles.HeaderText}>3rDOOR</p>
            <div class="field is-grouped ">
              <p class="control is-expanded Searchbar">
                <input
                  class="input HeaderInput"
                  type="text"
                  placeholder="キーワードを入力して検索しますか？"
                />
              </p>
            </div>
          </header>
        </hero>
        <div class="PickUp">
          <div class="box FlexPickUP">
            <button class="button is-danger PickUpBtn">PICKUP</button>
            <p class="PIckUPText">神泉駅５分 アフタヌーンティーのPRをお願･･･</p>
          </div>
        </div>
      </main>
    </>
  );
}