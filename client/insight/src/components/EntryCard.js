import React from "react";
import '../styles.css';

export default function MovieInfoCard(prop){
    return(
        <div className = "card">
            <h1>{prop.date}</h1>
            <hr/>
            <p>Response : {prop.entryResponse}</p>
        </div>

    )
}