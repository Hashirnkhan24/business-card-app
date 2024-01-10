import { useState } from "react"

function CreateCard() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [interest, setInterest] = useState([]);
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
                onChange={(e) => setInterest(e.target.value)}
            /><br />
            <button>Add Card</button>
        </div>
        </>
    )
}

export { CreateCard }