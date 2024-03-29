import React, { useState, Suspense, lazy } from 'react';
import { NavigationBar } from "./components";
import { Spinner } from 'react-bootstrap';

const Home = lazy(() => import("./pages/Home/Home"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Publications = lazy(() => import("./pages/Publications/Publications"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Achievements = lazy(() => import("./pages/Achievements/Achievements"));
const Certifications = lazy(() => import("./pages/Certifications/Certifications"));
const Involvements = lazy(() => import("./pages/Involvements/Involvements"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const Loading = () => {
  return (
    <div className="center outer-structure" style={{ display: "flex", flexDirection: "column" }}>
      <Spinner animation="border" variant="dark" />
    </div>
  );
};

const App = () => {
  const [currentTab, setCurrentTab] = useState("home");

  const renderSwitch = (param) => {
    switch (param) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "involvements":
        return <Involvements />;
      case "achievements":
        return <Achievements />;
      case "publications":
        return <Publications />;
      case "certifications":
        return <Certifications />;
      default:
        return <NotFound />
    }
  }

  return (
    <div className="App">
      <NavigationBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Suspense fallback={Loading()}>{renderSwitch(currentTab)}</Suspense>
    </div>
  );
}

export default App;
