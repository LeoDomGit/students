import React from 'react'

function Menu() {
  return (
    <>
       <div className="container-fluid g-0">
  <div className="row">
    <div className="col-lg-12 p-0 ">
      <div className="header_iner d-flex justify-content-between align-items-center">
        <div className="sidebar_icon d-lg-none">
        <i className='bx bx-menu-alt-left' ></i>
        </div>
        <div className="serach_field-area d-flex align-items-center">
          <div className="search_inner">
            <form action="#">
              <div className="search_field">
                <input type="text" placeholder="Search here..." />
              </div>
              <button type="submit">
              <i className='bx bx-search-alt' ></i>
              </button>
            </form>
          </div>
          <span className="f_s_14 f_w_400 ml_25 white_text text_white">
            Apps
          </span>
        </div>
        <div className="header_right d-flex justify-content-between align-items-center">

          <div className="profile_info">
                <img src="https://cdn-icons-png.flaticon.com/512/3048/3048127.png" alt="" />
            <div className="profile_info_iner">
              <div className="profile_author_name">
                <p>Neurologist </p>
                <h5>Dr. Robar Smith</h5>
              </div>
              <div className="profile_info_details">
                <a href="#">My Profile </a>
                <a href="#">Settings</a>
                <a href="#">Log Out </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 
    </>
  )
}

export default Menu