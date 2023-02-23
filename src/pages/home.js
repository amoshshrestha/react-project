
import 'bootstrap/dist/css/bootstrap.min.css';
import Homecard from '../component/homecard';
const Home=()=>{
    return(
        <div className='d-flex'>
      <Homecard imgsrc="images/med_appointment.png" name="Book an Appointment" description="Appointment with Best Doctors"/>
      <Homecard imgsrc="images/onlineconsultation.png" name="Online Consultation" description="Consult with best Doctors."/>
      </div>
    )
}
export default Home;