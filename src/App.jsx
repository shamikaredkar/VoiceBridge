import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
        <section className='min-h-screen flex flex-col'>
          <Header />
          <Home />
        </section>
        <Footer />
      </div>
      ;
    </>
  );
}

export default App;
