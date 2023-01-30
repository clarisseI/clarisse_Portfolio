import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import CoursesPage from "./components/CoursesPage";
import MySkillsPage from "./components/MySkillsPage";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        {/* For framer-motion animation on page change! */}

        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route exact path="/" element={<Main />} />

            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/courses" element={<CoursesPage />} />
            <Route exact path="/work" element={<WorkPage />} />
            <Route exact path="/skills" element={<MySkillsPage />} />

            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
