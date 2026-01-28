import { createBrowserRouter } from "react-router";
import LandingPage from "@/app/pages/LandingPage";
import MeetKavishPage from "@/app/pages/MeetKavishPage";
import AboutPage from "@/app/pages/AboutPage";
import PhotoPage from "@/app/pages/PhotoPage";
import DatesPage from "@/app/pages/DatesPage";
import RelationshipPage from "@/app/pages/RelationshipPage";
import PromisePage from "@/app/pages/PromisePage";
import QuizPage from "@/app/pages/QuizPage";
import QuizResultsPage from "@/app/pages/QuizResultsPage";
import LoveLetterPage from "@/app/pages/LoveLetterPage";
import ScrollToTop from "@/app/components/ScrollToTop";

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <LandingPage />
      </Layout>
    ),
  },
  {
    path: "/meet-kavish",
    element: (
      <Layout>
        <MeetKavishPage />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: "/photo",
    element: (
      <Layout>
        <PhotoPage />
      </Layout>
    ),
  },
  {
    path: "/dates",
    element: (
      <Layout>
        <DatesPage />
      </Layout>
    ),
  },
  {
    path: "/relationship",
    element: (
      <Layout>
        <RelationshipPage />
      </Layout>
    ),
  },
  {
    path: "/promise",
    element: (
      <Layout>
        <PromisePage />
      </Layout>
    ),
  },
  {
    path: "/quiz",
    element: (
      <Layout>
        <QuizPage />
      </Layout>
    ),
  },
  {
    path: "/quiz-results",
    element: (
      <Layout>
        <QuizResultsPage />
      </Layout>
    ),
  },
  {
    path: "/love-letter",
    element: (
      <Layout>
        <LoveLetterPage />
      </Layout>
    ),
  },
]);