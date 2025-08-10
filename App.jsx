import Header from './components/Header';
import HeaderSection from './components/HeaderSection';
import MainOfferings from './components/MainOfferings';
import AboutBusinessSection from './components/AboutBusiness';
import ImagesSection from './components/ImageSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans w-full"> {/* No padding here */}
      <Header />
      <main className="pt-[90px]"> {/* Compensate for fixed header */}
        <HeaderSection/>
        <MainOfferings/>
        <AboutBusinessSection/>
        <ImagesSection/>
        </main>
      <Footer /> {/* Now spans full width */}
    </div>
  );
}

export default App;