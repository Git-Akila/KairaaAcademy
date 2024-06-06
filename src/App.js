import Footer from "./Components/Footer";

import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";

import GalleryPage from "./pages/GalleryPage";


import HomePage from "./pages/HomePage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SelfPacedCourses from "./pages/SelfPacedCourses";
import Blockchain from "./pages/Top_courses/Blockchain";

import BootCamp from "./pages/BootCamp";
import ViewCourseDetails from "./pages/Top_courses/ViewCourseDetails";
import ViewCourseDetails1 from "./pages/Top_courses/ViewCourseDetails1";

import InternshipProgram from "./pages/Top_courses/Blockchain1";
import OtherCourse from "./pages/Top_courses/OtherCourses";
import CourseRegistration from "./pages/CourseRegistration";
import BlockChainCertification from "./pages/BlockChainCertification";
import ContactPage from "./pages/ContactPage";
import SelfBlockChainDev from "./pages/SelfBlockChainDev";

import Newnav from "./Components/Newnav";

import Terms_and_cond from "./pages/Terms_and_cond";




import ScrollToTop from './Components/ScrollToTop';

function AppLayout() {
  return (
    <div className="App overflow-hidden">
      <ScrollToTop />
      <Newnav />
      <Outlet />
      <Footer />
    </div>
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-kairaa-blockchain-academy",
        element: <AboutPage />,
      },
      {
        path: "/resources",
        element: <BlogPage />
      },
      {
        path: "/gallery",
        element: <GalleryPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/payment-terms-condition",
        element: <Terms_and_cond />
      },

      {
        path: '/course/selfpaced-course',
        element: <SelfPacedCourses />
      },
      {
        path: '/course/blockchain',
        element: <Blockchain />
      },
      {
        path: '/course/othercourse',
        element: <OtherCourse />
      },
      {
        path: '/course/bootcamp',
        element: <BootCamp />
      },
      {
        path: '/course/internship-program',
        element: <InternshipProgram />

      },
      {
        path: '/course/bockchaincertification',
        element: <BlockChainCertification />,

      },
      {
        path: '/courseregistration',
        element: <CourseRegistration />,

      },
      {
        path: '/courses/:id',
        element: <ViewCourseDetails />,

      },
      {
        path: "/course/selfpaced-course/:id",
        element: <SelfBlockChainDev />
      },
      {
        path: "/course/:id",
        element: <ViewCourseDetails1 />
      }


    ],

  },
]);
export default appRouter;
