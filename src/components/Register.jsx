var Regform=()=>{
    return(
        <form>
            <label className="form-label">Full Name</label>
            <input className="form-control" placeholder="Enter your name"></input>
            <label className="form-label">Email</label>
            <input className="form-control" placeholder="Enter your email"></input>
            <label className="form-label">Password</label>
            <input className="form-control" placeholder="Password"></input>
            <label className="form-label">Confirm Password</label>
            <input className="form-control" placeholder="Re-enter password"></input>
            <label className="form-label">Date of Birth</label>
            <input className="form-control" placeholder="DOB" type="date"></input>
            <label className="form-label">Phone Number</label>
            <input className="form-control" placeholder="Enter your Contact number"></input>
            <label className="form-label">Address</label>
            <textarea className="form-control" placeholder="Enter you address"></textarea>
            <label className="form-label">Gender</label><br></br>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender"></input>
                <label className="form-check-label">Male</label><br></br>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender"></input>
                <label className="form-check-label">Female</label><br></br>
            </div>
            
            <label className="form-label">Country</label>
            <select className="form-select">
                <option></option>
            </select>
            <button className="btn btn-primary regButton">Register</button>
        </form>
    );
}
export default Regform