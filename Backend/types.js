import z from 'zod';

const cardData = z.object({
    name : z.string(),
    description : z.string(),
    interests : z.array(z.string()),
    socials : z.array(z.string()),
})

const updateCardData = z.object({
    id : z.string(),
    name : z.string(),
    description : z.string(),
    interests : z.array(z.string()),
    socials : z.array(z.string()),
})

export { cardData, updateCardData }