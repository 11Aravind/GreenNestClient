import TextboxComponent from "../component/TextboxComponent"
import ButtonComponent from "../component/ButtonComponent"
import ClientCaptcha from "react-client-captcha";
import {Link} from "react-router-dom"
export default function Login() {
  return (
 <>
 <div className="logincontainer">

 <form className="form-container" action="">
<div className="form-content">
<h2 className="headding main-txt">Login</h2>
 <p className="headding"><small>or</small></p>
 <Link to="/register" className="main-txt"> <p className="headding"><small>Register</small></p></Link>
 <div className="space"></div>
 <TextboxComponent label="E-mail/Phone no" placeholder="E-mail/Phone no" type="text" name="" /> 
 <TextboxComponent label="Password"placeholder="password" type="password" name="password"/>

 {/* <TextboxComponent label="Phone no" type="text" name="phone_no"/> */}
 <div className="flex-row">
              <div className="half-width">
              <div className="captcha-div">
                {/* <div className="captchalabel">Captcha</div> */}
                <ClientCaptcha width="150" height="30"fontColor="green" charsCount="6" retryIcon="./image/refresh.png" captchaCode={code => console.log(code)} />
              </div>
              </div>
              <div className="half-width">
              <TextboxComponent  placeholder="Enter CAptcha" type="text" name="email" />

              </div>
            </div>
            <div className="space"></div>
 <div className="loginbtn">
 <ButtonComponent classs="comonbtn"text="Login"/>
 </div>
</div>
 </form>
 </div>
 </>
  )
}
