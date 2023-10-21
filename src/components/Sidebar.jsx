import React from "react";
import Swal from "sweetalert2";
function Sidebar() {
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
    const logOut=()=>{
        if(localStorage.getItem('id')){
            localStorage.removeItem('id');
            Toast.fire({
                icon: "success",
                title: "Tạm biệt !",
              }).then(()=>{
                window.location.replace('/');
              })
        }
    }
  return (
    <>
      <nav className="sidebar vertical-scroll dark_sidebar  ps-container ps-theme-default ps-active-y">
        <div className="logo d-flex justify-content-between">
          <a href="#">

          </a>
          <div className="sidebar_close_icon d-lg-none">
            <i className="ti-close" />
          </div>
        </div>
        <ul id="sidebar_menu">
          <li className="mm-active">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="icon_menu">
              <i className='bx bx-home'></i>
              </div>
              <span>Dashboard</span>
            </a>
            <ul>
              {/* <li>
                <a className="active" href="index-2.html">
                  Sales
                </a>
              </li> */}
              
            </ul>
          </li>
          <li className="mm-active">
          <a className="has-arrow" href="#" onClick={(e)=>logOut()} aria-expanded="false">
              <div className="icon_menu">
              <i class='bx bx-log-out'></i>
              </div>
              <span>Đăng xuất</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
