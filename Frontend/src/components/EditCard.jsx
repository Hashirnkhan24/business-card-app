import { useState } from "react";

function EditCard({ id }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [interests, setInterests] = useState([]);
    const [socials, setSocials] = useState([]);
    const [saveCardbtn, setSaveCardbtn] = useState('Save Card')

    async function onEditCardHandle() {
        try {
            const response = await fetch('http://localhost:8000/updateCard', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    name: name,
                    description: description,
                    interests: interests,
                    socials: socials
                }),
            });
            console.log(response)

        } catch (error) {
            console.error('An error occurred while adding the card:', error);
        }
        setSaveCardbtn("Card Saved")
    }
    return (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <input
                type="text"
                placeholder="Person Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <input
                type="text"
                placeholder="Short Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <input
                type="text"
                placeholder="Interest1, Interest2, Interest3"
                value={interests}
                onChange={(e) => setInterests(e.target.value.split(","))}
                className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <input
                type="text"
                placeholder="Instagram Handle"
                value={socials}
                onChange={(e) => setSocials(e.target.value.split(","))}
                className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button
                onClick={onEditCardHandle}
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            >
                {saveCardbtn}
            </button>
        </div>
    );
}

export { EditCard }