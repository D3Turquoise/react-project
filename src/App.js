import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Contact from './pages/Contact';
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Header from './Components/Header';

import Homepage from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Header from './Components/Header';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<About />}
          />
          <Route path="/projects" element={<Projects />}
          />
          <Route path="/contact" element={<Contact />}
          />
        </Routes>
      </Container>
    </Router>
  );
}


export default App;


// <Router>
//             {/* <Header /> */}
//             <div>
//                 {/* Wrap Route elements in a Routes component */}
//                 <Routes>
//                     {/* Define routes using the Route component to render different page components at different paths */}
//                     {/* Define a default route that will render the Home component */}
//                     {/* <Route path="/" element={<Home />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/projects" element={<Projects />} /> */}
//                 </Routes>
//             </div>
//         </Router>
