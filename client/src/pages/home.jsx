import Banner from "../components/Home/Banner";
import CoursesCategories from "../components/Home/CoursesCategories";
import PopularCourses from "../components/Home/PopularCourses";
import Proud from "../components/Home/Proud";

function Home() {
  return (
    <div>
      <Banner />
      <Proud />
      <CoursesCategories />
      <PopularCourses />
    </div>
  );
}

export default Home;
