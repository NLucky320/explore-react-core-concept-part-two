import { useState } from "react"

export default function Team() {
    const [team, seatTeam] = useState(11);
    const handleAdd = ()=>{
        const newTeam = team + 1;
        seatTeam(newTeam);
    }
    const handleRemove=() => {
        const newTeam = team - 1;
        seatTeam(newTeam);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius:'20px'
}

    return (
        <div style={teamStyle}> 
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
         <button onClick={handleRemove}>Remove</button>
        </div>
    )
}