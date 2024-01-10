import axios from "axios";
import { useState } from "react"


function CreateCard() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [interest, setInterest] = useState([]);

    async function onAddCardHandle() {

        // await axios.post('http://localhost:8000/card', {
        //     name : name,
        //     description : description,
        //     interest : interest
        // }, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        await fetch('http://localhost:8000/card', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                name : name,
                description : description,
                interests: interest
            })
        })
    }
    return (
        <>
        <div>
            <input 
                type="text" 
                placeholder="Person Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            /><br />
            <input 
                type="text" 
                placeholder="Short Description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
            /><br />
            <input 
                type="text" 
                placeholder="Interest1, Interest2, Interest3" 
                value={interest} 
                onChange={(e) => setInterest(e.target.value.split(","))}
            /><br />
            <button onClick={onAddCardHandle}>Add Card</button>
        </div>
        </>
    )
}

export { CreateCard }