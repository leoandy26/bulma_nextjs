import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="LoginContainer">
        <Image
          src="/threerdoor.jpg"
          width={200}
          height={200}
          className="LoginImg"
        />
        <form className="Form">
          <input
            className="EmailInput"
            type="email"
            id="email"
            name="email"
            placeholder="メールアドレスを入力してください"
            required
          />

          <div className="password-input-container">
            <div className="EyeMarkBox">
              <input
                className="PasswordInput"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="パスワードを入力してください"
                required
              />

              <div className="EyeMark" type="button" onClick={togglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <button type="submit" class="button LoginBtn">
            <p class="LoginText">ログイン</p>
          </button>
          <p class="ForgotPassWord">パスワードをお忘れの方はこちら</p>

          <button type="submit" class="button CreateAccount">
            <p class="LoginText">新規会員登録はこちら</p>
          </button>
        </form>
        <Image
          src="/LoginBottomPic.jpg"
          width={200}
          height={200}
          className="BottomPic"
        />
      </div>
    </>
  );
}
