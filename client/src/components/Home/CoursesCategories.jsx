import "../Home/coursesCategories.css";
//import WOW from "react-wow";

import cat1 from "../Assets/imgs/cat-1.jpg";
import cat2 from "../Assets/imgs/cat-2.jpg";
import cat3 from "../Assets/imgs/cat-3.jpg";
import cat4 from "../Assets/imgs/cat-4.jpg";

function CoursesCategories() {
  return (
    <div className="container-xxl py-5 category">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h4 className="section-title bg-white text-center text-primary px-3 rounded-pill py-2 mb-4">
            Categories
          </h4>

          <h1 className="mb-5">Courses Categories</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              <div
                className="col-lg-12 col-md-12 wow zoomIn"
                data-wow-delay="0.1s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img className="img-fluid" src={cat1} alt="" />
                  <div
                    className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: "1px" }}
                  >
                    <h5 className="m-0">Web Design</h5>
                    <small className="text-primary">49 Courses</small>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.3s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img className="img-fluid" src={cat2} alt="" />
                  <div
                    className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: "1px" }}
                  >
                    <h5 className="m-0">Graphic Design</h5>
                    <small className="text-primary">49 Courses</small>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.5s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img className="img-fluid" src={cat3} alt="" />
                  <div
                    className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: "1px" }}
                  >
                    <h5 className="m-0">Video Editing</h5>
                    <small className="text-primary">49 Courses</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 wow zoomIn"
            data-wow-delay="0.7s"
            style={{ minHeight: "350px" }}
          >
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href=""
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={cat4}
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: "1px" }}
              >
                <h5 className="m-0">Online Marketing</h5>
                <small className="text-primary">49 Courses</small>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesCategories;
