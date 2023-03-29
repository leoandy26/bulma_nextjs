import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div>
        <div className="SideToggle">
          <div className="ProfileBox">
            <div className="ProfileImageBox">
              <Image
                src="/threerdoor.jpg"
                width={200}
                height={200}
                className="ProfileImg"
              />
            </div>
            <div className="ProfileDetails">
              <div className="ProfileID">123456789</div>
              <div className="ProfileName">John Doe</div>
            </div>
          </div>
          <p>プロフィール充実度100%</p>
          <progress class="progress is-danger" value="99" max="100">
            90%
          </progress>
          <div className="SNSBox">
            <div className="SNSIcon">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
              <FontAwesomeIcon icon={["fab", "twitter"]} />
              <FontAwesomeIcon icon={["fab", "instagram"]} />
              <FontAwesomeIcon icon={["fab", "youtube"]} />
              <FontAwesomeIcon icon={["fab", "tiktok"]} />
            </div>
          </div>
          <div className="Menu">
            <div className="MenuList">
              <div className="ProfileSetting ListFlex">
                <p className="ProfileSettingText">プロフィール設定</p>
                <p>→</p>
              </div>
              <div className="SnsConnect ListFlex">
                <p className="SnsConnectText">SNSアカウント連携</p>
                <p>→</p>
              </div>
              <div className="Campain ListFlex">
                <p className="CampainText">応募したキャンペーン</p>
                <p>→</p>
              </div>
              <div className="View ListFlex">
                <p className="ViewText">閲覧したキャンペーン</p>
                <p>→</p>
              </div>
              <div className="BankTransfer ListFlex">
                <p className="BankTransferText">振り込み予定の確認</p>
                <p>→</p>
              </div>
              <div className="Contact ListFlex">
                <p className="ContactText">お問い合わせ</p>
                <p>→</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
