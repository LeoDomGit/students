import React from "react";

function TagNav(props) {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page_title_box d-flex align-items-center justify-content-between">
            <div className="page_title_left">
              <h3 className="f_s_30 f_w_700 text_white">{props.name}</h3>
              <ol className="breadcrumb page_bradcam mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Students </a>
                </li>
                <li className="breadcrumb-item active">{props.name}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TagNav;
