import partner_1 from "./partner-1.svg";
import partner_2 from "./partner-2.svg";
import partner_3 from "./partner-3.svg";
import partner_4 from "./partner-4.svg";
import partner_5 from "./partner-5.svg";
import partner_6 from "./partner-6.svg";
import partner_7 from "./partner-7.svg";
import feature_1 from "./feature_1.png";
import feature_2 from "./feature_2.png";
import feature_3 from "./feature_3.png";
import feature_4 from "./feature_4.png";
import winner from "./winner.png";
import home from "./home.png";
import solution from "./solution.png";
import badge from "./badge.png";
import Data_Competitive from "./Data_Competitive.jpg";
import Cinematography_Course from "./Cinematography_Course.jpg";
import Images_of_digital from "./Images_of_digital.jpg";
import SQL_Data_Analysis from "./SQL-Data Analysis.jpg";
import social_media from "../assets/social-media-marketing.png";
import camera from "../assets/camera.png";
import computer from "../assets/computer.png";
import brain from "../assets/brain.png";
import plan from "../assets/plan.png";
import shield from "../assets/shield.png";
import startup from "../assets/startup.png";
import user from "../assets/user.png";
import user_checked from "../assets/add-friend.png";
import user_white from "../assets/user-white.png";
import chart_bar from "../assets/bar-chart.png";
import double_tick from "../assets/double-tick.png";
import articlate_1 from "../assets/articlate_1.jpg";
import articlate_2 from "../assets/articlate_2.jpg";
import articlate_3 from "../assets/articlate_3.jpg";
import star from "../assets/star.png";
import moon from "../assets/moon.png";
import stack_line from "../assets/stack_line.png";

export const partner_info = [
  {
    img: partner_1,
  },
  {
    img: partner_2,
  },
  {
    img: partner_3,
  },
  {
    img: partner_4,
  },
  {
    img: partner_5,
  },
  {
    img: partner_6,
  },
  {
    img: partner_7,
  },
];

export const features_info = [
  {
    title: "Master Real-World Skills",
    desc: "Gain practical experience through interactive lessons designed to prepare you for real challenges.",
    shap: feature_1,
    icon: winner,
  },
  {
    title: "Build Your Future Career",
    desc: "Discover courses tailored to your goals and unlock new career opportunities.",
    shap: feature_2,
    icon: badge,
  },
  {
    title: "Learn Anytime, Anywhere",
    desc: "Study at your own pace with flexible online learning programs that fit your lifestyle.",
    shap: feature_3,
    icon: solution,
  },
  {
    title: "Turn Knowledge Into Action",
    desc: "Apply what you learn instantly through hands-on projects and real-life examples.",
    shap: feature_4,
    icon: home,
  },
];

export const courses = [
  {
    id: 1,
    title: "Data Competitive Strategy Law & Organization",
    instructor: "Mark Phillips",
    price: 75,
    category: "Business / Strategy",
    description:
      "Learn how to grow your business online using modern digital marketing tools like SEO, email campaigns, and social media strategy.",
    date: "27/12/22",
    students: 1,
    image: Data_Competitive,
  },
  {
    id: 2,
    title: "Cinematography Course: Shoot Better Video",
    instructor: "Sophia Carter",
    price: 0,
    priceType: "free",
    currency: "Free",
    category: "Media / Film",
    description:
      "Discover how to clean, visualize, and analyze data in Microsoft Excel. Learn formulas, charts, and pivot tables for smarter decisions.",
    date: "09/03/23",
    students: 10,
    image: Cinematography_Course,
  },
  {
    id: 3,
    title: "Adobe Lightroom Classic: Photo Editing",
    instructor: "Michael Brown",
    price: 55,
    category: "Photography / Design",
    description:
      "Master Adobe Lightroom Classic to professionally edit and enhance photos. Ideal for beginners and hobbyist photographers.",
    date: "21/12/22",
    students: 15,
    image: Images_of_digital,
  },
  {
    id: 4,
    title: "Canva Masterclass: Graphic Design for Beginners",
    instructor: "Lina Howard",
    price: 49,
    category: "Design / Creativity",
    description:
      "Unleash your imagination and learn to write engaging short stories, blogs, and scripts with expert creative writing guidance.",
    date: "05/03/23",
    students: 27,
    image: SQL_Data_Analysis,
  },
];

export const opportunities_cards_info = [
  {
    icon: "book-open",
    title: "Master real-world skills",
    description: "Turn your passion into expertise with hands-on courses.",
  },
  {
    icon: "clock",
    title: "Learn at your own time",
    description:
      "Study at your convenience no fixed schedules, steady progress.",
  },
];

export const categories_info = [
  {
    id: 1,
    title: "Creative Media",
    image: camera,
    description:
      "Master photo editing, video production, and visual storytelling for modern audiences.",
  },
  {
    id: 2,
    title: "Software Engineering",
    image: computer,
    description:
      "Build scalable apps and systems with hands-on coding and architecture design.",
  },
  {
    id: 3,
    title: "Personal Growth",
    image: user,
    description:
      "Learn techniques to boost focus, confidence, and productivity in everyday life.",
  },
  {
    id: 4,
    title: "Entrepreneurship",
    image: startup,
    description:
      "Turn your ideas into successful startups and learn business leadership essentials.",
  },
  {
    id: 5,
    title: "Cybersecurity",
    image: shield,
    description:
      "Protect systems and data with ethical hacking and digital defense strategies.",
  },
  {
    id: 6,
    title: "Artificial Intelligence",
    image: brain,
    description:
      "Explore AI, machine learning, and automation that power the future of innovation.",
  },
  {
    id: 7,
    title: "Nutrition & Wellness",
    image: plan,
    description:
      "Achieve a healthy balance through mindful eating, fitness, and mental well-being.",
  },
  {
    id: 8,
    title: "Digital Marketing",
    image: social_media,
    description:
      "Grow your online presence using smart SEO, content, and social media strategies.",
  },
];

export const seccess_box = [
  {
    id: 1,
    icon: user_checked,
    counter: "55,784",
    title: "Student enrolled",
    color: "color-1",
  },
  {
    id: 2,
    icon: double_tick,
    counter: "13,775",
    title: "Classes completed",
    color: "color-2",
  },
  {
    id: 3,
    icon: chart_bar,
    counter: "90%",
    title: "Learners report",
    color: "color-3",
  },
  {
    id: 4,
    icon: user_white,
    counter: "2,599",
    title: "Top instructors",
    color: "color-4",
  },
];

export const transform_box_info = [
  {
    id: 1,
    image: moon,
    title: "Earn certificates and degrees",
    desc: "Break into a new field like format technology or data science get started.",
  },
  {
    id: 2,
    image: stack_line,
    title: "Learn anything together",
    desc: "Break into a new field like format technology or data science get started.",
  },
  {
    id: 3,
    image: star,
    title: "Learn with experts",
    desc: "Break into a new field like format technology or data science get started.",
  },
];

export const articles_info = [
  {
    id: 1,
    title: "3D Healthcare Simulation with Unity: Building Real-Time Models",
    author: "Dr. Alan Wright",
    date: "21 Dec",
    category: "Medical Technology / Unity",
    description:
      "Explore how Unity can be used to create interactive 3D medical simulations for training and diagnostics. Learn how to build and deploy realistic environments used in healthcare visualization.",
    image: articlate_1,
  },
  {
    id: 2,
    title: "Creative Paper Sculpting: Light & Shadow Design Showcase",
    author: "Maya Thompson",
    date: "21 Dec",
    category: "Art & Creative Design",
    description:
      "Join the latest creative conference exploring the art of paper sculpting and light installations. Discover how light and shadow can transform your design storytelling.",
    image: articlate_2,
  },
  {
    id: 3,
    title: "Master UI Prototypes in Figma: From Idea to Interactive Design",
    author: "Ethan Blake",
    date: "21 Dec",
    category: "UI/UX / Product Design",
    description:
      "Learn to turn your design concepts into clickable prototypes using Figma. Understand layout, components, and responsive design principles for web and mobile interfaces.",
    image: articlate_3,
  },
];
