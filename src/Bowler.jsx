import { useState } from "react"

export default function Bowler (){
    const [balls, setBalls] = useState(0);
    const [wide, setWide] = useState(false);
    const handleBowling = () =>{
        const updatedBalls = balls + 1;
        setBalls(updatedBalls);
        setWide(false);
    }
    const handleWidBowling = () =>{
        setWide(true);
    }
    return(
        <div>
            <h3>Balls: {balls}</h3>
            {
                balls >= 6 && <p>Over</p>
            }
            {
                wide && <p>Wide ball</p>
            }
            
            <button onClick={handleBowling}>Ball</button>
            <button onClick={handleWidBowling}>Wide Ball</button>
        </div>
    )
}