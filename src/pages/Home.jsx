import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Menu from "../components/Menu";
import TagNav from "../components/TagNav";
import Swal from "sweetalert2";
function Home() {
  const [tag, setTag] = useState("");
  const [id, setID] = useState("");
  const [classes, setClass] = useState([]);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1700,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  
  const url = "https://api.trungthanhweb.com/api/";
  useEffect(() => {
    setTag("Home");
    if (localStorage.getItem("id")) {
      setID(localStorage.getItem("id"));
    } else {
      window.location.replace("/");
    }
  }, []);
  useEffect(() => {
    fetch(url + "getClassListStudent?id=" + id)
      .then((res) => res.json())
      .then((res) => setClass(res));
  }, [id]);
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Menu />
        <div className="main_content_iner overly_inner">
          <TagNav name={tag} />
          {classes.length> 0 && (
            <div className="table-responsive">
              <table className="table table-success">
                <thead>
                  <tr>
                    <th scope="col">Lớp</th>
                    <th scope="col">Lịch học</th>
                    <th scope="col">Giáo viên</th>
                    <th scope="col">Số buổi học</th>
                    <th scope="col">Số buổi đã học</th>
                  </tr>
                </thead>
                <tbody>
                  {classes.length > 0 &&
                    classes.map((item, index) => (
                      <tr key={index} className>
                        <td scope="row">
                          <a href="#">
                            {item.name}
                          </a>
                        </td>
                        <td scope="row">
                          <a href="#">
                            {item.schedules}
                          </a>
                        </td>
                        <td scope="row">
                          <a href="#">
                            {item.teacher}
                          </a>
                        </td>
                        <td>{item.duration}</td>
                        <td>{item.pass}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}


        </div>
      </section>
    </>
  );
}

export default Home;
