var Login=()=>{
    return(
        <form>
            <div className="Logd">
                <label className="form-label">Username/Email</label>
                <input className="form-control" placeholder="Enter mail/username"></input>
                <label className="form-label">Password</label>
                <input className="form-control" placeholder="enter your password"></input>
                <button className="btn btn-primary regButton">Login</button>
            </div>
        </form>
    )
}
export default Login