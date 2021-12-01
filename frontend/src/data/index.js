import axios from 'axios';
require('dotenv').config({ path: '../../../.env' });

// const url = 'https://3.140.201.84:5000/';
const url = process.env.URL || 'https://3.138.246.150:5000/';

export const fetchData = async (category) => {
    let dataUrl = `${url}`

    if (category) {
        dataUrl = `${url}${category.toLowerCase()}`;
    }

    try {
        const { data } = await axios.get(dataUrl)

        return data
    } catch (error) {
        console.error(`Woops fetch: ${error}`)
    }
}