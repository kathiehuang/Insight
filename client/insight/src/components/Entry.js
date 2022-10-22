import React, {useEffect, useState} from "react";
import EntryCard from './EntryCard';

export default function Card(){
    const [entryResponse, setEntryResponse] = useState("")
    const [date, setDate] = useState("")
    const [journalForm, setJournalForm] = useState([]);

    const handleChange1 = (e) =>{
        setEntryResponse(e.target.value);
    }

    const handleChange2 = (e) =>{
        setDate(e.target.value);
    }

    const handleSubmit = (e) => {
        const element = <EntryCard key = {Math.random()} date = {date} entryResponse = {entryResponse}/>;
        setJournalForm(([element, ...journalForm]))

        setDate("");
        setEntryResponse("");
    }

    return(
        <div style = {{"display":"flex", "flexDirection":"column", "align-items":"center", "padding":"30px"}}>
            <h1 style = {{"marginTop":"40px", "textAlign": "center", "padding":"30px"}}>Journal</h1>
            <p>Date</p>
            <div>
                <form>
                    <textarea 
                        onChange = {handleChange2}
                        type = {"text"}
                        placeholder = {"Enter date"}
                        style = {{"maxHeight":"150px","minHeight":"30px","lineHeight":"1", "minWidth":"30vw", "maxWidth":"30vw"}}
                        value = {date}/>
                </form>
            </div>
            <p>What was the highlight of your day?</p>
            <div>
                <form>
                    <textarea 
                        onChange = {handleChange1}
                        type = {"text"}
                        placeholder = {"Enter highlight"}
                        style = {{"maxHeight":"150px","minHeight":"30px","lineHeight":"1", "minWidth":"30vw", "maxWidth":"30vw"}}
                        value = {entryResponse}/>
                </form>
                <button style = {{"width":"30.5vw"}} onClick = {handleSubmit}>
                    Submit</button>
            </div>
            {journalForm}
        </div>
    )
}