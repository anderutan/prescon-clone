import Appoint from './sections/Appoint';
import Choose from './sections/Choose';
import Contact from './sections/Contact';
import FAQ from './sections/FAQ';
import Features from './sections/Features';
import Footer from './sections/Footer';
import Header from './sections/Header';
import RoleAndResponsibilities from './sections/RoleAndResponsibilities';
import Service from './sections/Service';

function App() {
  return (
    <main className='w-full h-full'>
      <Header />
      <Service />
      <Features />
      <RoleAndResponsibilities />
      <Appoint />
      <Choose />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
