
import { Routes , Route } from 'react-router-dom';
import PageAuthors from './components/author/PageAuthors';
import PageBlogs from './components/blogs/PageBlogs';
import Homepage from './components/Homepage';
import Layuot from './components/Layuot';
import ScrollToTop from './components/Scrolltotop';

function App() {
  return (
    <div>
      <Layuot>
        <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/blogs/:slug" element={<PageBlogs/>}/>
      <Route path="/authors/:slug" element={<PageAuthors/>}/>
    </Routes>
    </Layuot>
    
    
    </div>
    
   
 );
}

export default App;
