import { useSelector } from "react-redux";
import '../css/Home.css'
import Todo from "./Todo";

function Home() {

    return(
        <>
        {/* {arr.map((item)=>(
            <div key={item.id} className="home-container">
                <h1>{item.name}</h1>
                <h2>{item.email}</h2>
                <h3>{item.city}</h3>
            </div>
        ))} */}

            <Todo/>
        </>
    )
    
}

export default Home;