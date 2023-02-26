import React, { useState } from "react";
import './style.css';
import Navmain from "../component/navbar";
import Footer from "../component/footer";


function Form() {
    const [hospital, setHospital] = useState("");
    const [reportNo, setReportNo] = useState("");
    const [disease, setDisease] = useState("d1");
    const [medicine, setMedicine] = useState("");
    const [report, setReport] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [otherDisease, setOtherDisease] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      // Add record logic here
    }
  
    return (
        <div>
             <Navmain/>
        
      <div className="col p-2 border border-transparent" style={{width:"90%",marginTop:"90px",backgroundColor:"aliceblue"}}>
        <div style={{fontSize:"30px",fontWeight:"bold",color:"rgb(51, 82, 120)"}}>Medical Form</div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="Hospital" className="form-label">
            Hospital Name:
          </label>
          <select
            className="form-select"
            id="Hospital" 
            placeholder="select hospital"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
          >
            <option value="h1">Norvic Hospital</option>
            <option value="h2">Civil Hospital</option>
            <option value="h3">Star Hospital</option>
            <option value="h4">Hams Hospital</option>
            <option value="h5">Kritipur Hospital</option>
            <option value="h6">Other</option>
          </select>

          <label htmlFor="ReportNo" className="form-label">
            ReportNo:
          </label>
          <input
            type="text"
            className="form-control"
            id="ReportNo"
            placeholder="eg. 12345"
            value={reportNo}
            onChange={(e) => setReportNo(e.target.value)}
          />
  
          <label htmlFor="Disease" className="form-label">
            Disease:
          </label>
          <select
            className="form-select"
            id="Disease"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
          >
            <option value="d1">Pneumonia</option>
            <option value="d2">Novel CoronaVirus(COVID-19)</option>
            <option value="d3">Common Cold</option>
            <option value="d4">Measles</option>
            <option value="d5">Others</option>
          </select>
          {disease === "d5" && (
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Enter disease name"
            value={otherDisease}
            onChange={(e) => setOtherDisease(e.target.value)}
          />
        )}
  
          <label htmlFor="Medicine" className="form-label">
            Medicine Prescribed
          </label>
          <input
            type="text"
            className="form-control"
            id="Medicine"
            placeholder="eg. ABCD"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />
  
          <div className="form-group">
            <label htmlFor="Report" className="form-label">
              Scan Copy of Report:
            </label>
            <br />
            <input
              type="file"
              className="form-control-file"
              id="Report"
              value={report}
              onChange={(e) => setReport(e.target.value)}
            />
          </div>
  
          <label htmlFor="date" className="form-label">
            Followup date:
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
  
          <label htmlFor="time" className="form-label">
            Followup time:
          </label>
          <input
            type="time"
            className="form-control"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
  
          <div className="mt-3">
            <button type="submit" className="btn btn-secondary">
              Add Record
            </button>
          </div>
        </form>
      </div>
      <Footer/>
      </div>
    
    );
  }
  
  export default Form;