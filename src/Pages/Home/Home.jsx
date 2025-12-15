import Features from "../../Components/Features/Features";
import Hero_section from "../../Components/Hero section/Hero_section";
import Instructor_area from "../../Components/Instructor area/Instructor_area";
import Online_courses from "../../Components/Online courses/Online_courses";
import Partner from "../../Components/Partner/Partner";
import Popular_courses_two from "../../Components/Popular courses two/Popular_courses_two";
import Popular_Courses from "../../Components/Popular Courses/Popular_Courses";
import Start_success from "../../Components/Start Success/Start_success";
import Subscribe_section from "../../Components/Subscribe section/Subscribe_section";
import Top_articles from "../../Components/Top Articles/Top_articles";
import Top_categories from "../../Components/Top categories/Top_categories";
import Transform_area from "../../Components/Transform area/Transform_area";

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
