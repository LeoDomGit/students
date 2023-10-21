import React, { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Swal from "sweetalert2";
function Login() {
  const [user, setUser] = useState([]);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  console.log(user);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1700,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "https://api.trungthanhweb.com/api/";
  const checkEmail = (e) => {
    if (e.match(/(.+)@(gmail+)\.(com)/i)) {
      setEmail(e);
    }
  };
  const submitLogin = () => {
    if (email != "" && password != "") {
      axios({
        method: "post",
        url: url + "checkLogin",
        data: {
          email: email,
          password: password,
        },
      }).then((res) => {
        if (res.data.check == true) {
          Toast.fire({
            icon: "success",
            title: "Đăng nhập thành công",
          }).then(() => {
            localStorage.setItem("token", res.data.token);
            window.location.replace("/edu");
          });
        } else if (res.data.check == false) {
          if (res.data.msg.email) {
            Toast.fire({
              icon: "error",
              title: res.data.msg.email,
            });
          } else if (res.data.msg.password) {
            Toast.fire({
              icon: "error",
              title: res.data.msg.password,
            });
          } else if (res.data.msg) {
            Toast.fire({
              icon: "error",
              title: res.data.msg,
            });
          }
        }
      });
    } else {
      console.log(email, password);
      Toast.fire({
        icon: "error",
        title: "Chưa nhập đủ thông tin tài khoản",
      });
    }
  };
  useEffect(() => {
    localStorage.removeItem("token");
  });
  useEffect(() => {
    if (user && user.length!=0) {
      axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          })
          .then((res) => {
              var email = res.data.email;
              console.log(email);
              axios.post(url + "checkStudent", {
                  email: email,
                })
                .then((res) => {
                  if(res.data.check==true){
                    localStorage.setItem('id',res.data.id);
                    window.location.replace('/home')
                  }else{
                    Toast.fire({
                      icon: "error",
                      title: "Vui lòng đăng nhập bằng tài khoản giảng viên",
                    });
                  }
                 
                });
          })
          .catch((err) => console.log(err));
  }
},
[ user ]);
  return (
    <>
<div className="white_box mb_30 ">
  <div className="row justify-content-center">
    <div className="col-lg-6">
      <div className="modal-content cs_modal">
        <div className="modal-header justify-content-center theme_bg_1">
          <h5 className="modal-title text_white">Log in</h5>
        </div>
        <div className="modal-body">
            <div className>
              <input type="text" className="form-control"  onChange={(e) => checkEmail(e.target.value)} placeholder="Enter your email" />
            </div>
            <div className>
              <input type="password" className="form-control"  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <a href="#" className="btn_1 full_width text-center"  onClick={() => submitLogin()}>Log in</a>


            <div className="text-center mt-5">
            <button
                    className="btn btn-warning text-center "

                    onClick={(e)=>login()}
                  >
                    <i className="bx bxl-gmail"></i>
                  </button>
            </div>
           
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Login;
