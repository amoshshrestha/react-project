
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmain from './component/navbar';
import Footer from './component/footer';
import Corouselspec from './component/corouselowl';
import Home from './pages/home';
import BookAppointment from './pages/bookappointment';
const App=()=> {
  console.log("hello");

  return (
    <div className="App">
      {/* <Navmain/> */}
      {/* <Home/> */}
      <BookAppointment/>
      {/* <Corouselspec />
      <Footer /> */}

    </div>
  );
}

export default App;
