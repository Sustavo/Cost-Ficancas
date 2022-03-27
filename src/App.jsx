import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Company from './Components/pages/Company';
import Contact from './Components/pages/Contact';
import Newproject from './Components/pages/NewProject';
import Project from './Components/pages/Project';

import Container from './Components/Layout/Container';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Projects from './Components/pages/Projects';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<Newproject />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
