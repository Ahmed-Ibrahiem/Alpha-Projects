import Features from "../../Components/Features/Features";
import Hero_section from "../../Components/hero-section/Hero_section";
import Instructor_area from "../../Components/instructor-area/Instructor_area";
import Online_courses from "../../Components/online-courses/Online_courses";
import Partner from "../../Components/Partner/Partner";
import Popular_courses_two from "../../Components/popular-courses-two/Popular_courses_two";
import Popular_Courses from "../../Components/popular-courses/Popular_Courses";
import Start_success from "../../Components/start-success/Start_success";
import Subscribe_section from "../../Components/subscribe-section/Subscribe_section";
import Top_articles from "../../Components/top-articles/Top_articles";
import Top_categories from "../../Components/top-categories/Top_categories";
import Transform_area from "../../Components/transform-area/Transform_area";

const Home = () => {
  return (
    <>
      <Hero_section />
      {/* Start Partner Area */}
      <Partner />
      {/* Start Features Area */}
      <Features />
      {/* Start Popular Courses */}
      <Popular_Courses />
      {/* Start Online Courses */}
      <Online_courses />
      {/* Start Top Categories */}
      <Top_categories />
      {/* Start To Success */}
      <Start_success />
      {/* Start Popular Courses Two */}
      <Popular_courses_two />
      {/* Start Instructor Area */}
      <Instructor_area />
      {/* Start Transform Your Life */}
      <Transform_area />
      {/* Start Top Articles */}
      <Top_articles />
      {/* Start Subscribe part */}
      <Subscribe_section />
    </>
  );
};

export default Home;
