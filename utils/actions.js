'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessages) => {
    try {
        const response = await openai.chat.completions.create({
            messages: [
                // what the AI is going to be
                { role: 'system', content: 'You are a helpful assistant.' },
                ...chatMessages,
            ],
            model: "gpt-3.5-turbo",
            temperature: 0,
        });

        return response.choices[0].message;
    } catch (e) {
        return null;
    }

};