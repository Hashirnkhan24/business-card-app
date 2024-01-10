import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDb, Card } from './db.js';
import { cardData, updateCardData } from './types.js';

const app = express();
dotenv.config();
connectDb();
app.use(express.json());
app.use(cors());

app.post('/card', async (req, res) => {
    const { name, description, interests } = req.body;
    const parsedCardData = cardData.safeParse({ name, description, interests });

    if(parsedCardData.success) {
        const userCard = await Card.create({
            name: name,
            description: description,
            interests : interests || []
        })
        res.status(200).json({
            message : "Card created successfully",
            card: userCard
        })
    }
})

app.get('/cards', async (req, res) => {
    const cards = await Card.find({})
    res.status(200).json(cards)
})

app.put('/updateCard', async (req, res) => {
    try {
        const { id, name, description, interests } = req.body
        const parsedUpdateCard = updateCardData.safeParse({ id, name, description, interests })

        if(!name && !description && !interests) {
            res.status(400).json({
                message : "Atleast one field required for update"
            })
        }

        if(parsedUpdateCard.success) {
            const filter = {
                _id : id
            }

            const update = {}
            if (name) update.name = name;
            if ( description) update.description = description;
            if (interests) update.interests = interests;

            const result = await Card.updateOne(filter, update);

            res.status(200).json({
                message : "Updated successfully"
            })
            console.log(result);
        }
    } catch (error) {
        res.status(500).json({
            message : "Internal Server Error"
        })
        console.log(error)
    }   
})

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port ', process.env.PORT || 3000);
});