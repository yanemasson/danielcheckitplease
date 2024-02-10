import './App.css';
import {Navbar} from './sections/Navbar';
import {Promotion} from './sections/Promotion';
import {Feature} from './sections/Feature';
import {Hero} from './sections/Hero';
import {Cta} from './sections/CTA';
import {Partner} from './sections/Partner';
import {Testimonails} from './sections/Testimonials';
import {Pricing} from './sections/Pricing';
import {Contact} from './sections/Contact';
import {Footer} from './sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className={'px-3 '}>
        <Feature />
        <Promotion />
        <Cta />
        <Partner />
        <Testimonails />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
