import { useState } from "react"

var Home=()=>{
    var[count,setcount]=useState(0);
    return (
    <div>
        {/* <h1>Home</h1>
        <h1>Count:{count}</h1>
        <button onClick={()=>setcount(count+1)}>Add 1</button> */}
        <center>
            <h1 className="CompanyName">WhiteBeard Technologies</h1>
            <h2>Build The Innovation.</h2>
        </center>
    </div>
)
}
export default Home