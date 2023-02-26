
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmain from './component/navbar';
import Footer from './component/footer';
import Corouselspec from './component/corouselowl';
import Home from './pages/home';
import BookAppointment from './pages/bookappointment';
import Form from './pages/addnewrecord';

function App() {
  return (
    <div className="App">
        {/* <BookAppointment/> */}
        {/* <Home/> */}
        <Form/>

    </div>
  );
}

export default App;
