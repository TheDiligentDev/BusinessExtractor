import axios from 'axios';


export const getPlacesByTypeAndZip = async (type, zip) => {
    let searchTerm = `${type} ${zip}`;
    let { data } = await axios.post('/api/getGoogleBusinessDetails', { searchTerm });
    return data;
}

const scrapeEmails = async (places) => {
    let arrEmailPromises = [];

    places.forEach(place => {
        if (place.website) {
            arrEmailPromises.push(axios.post('/api/scrapeWebpageForEmails'))
        } else {
            arrEmailPromises.push(place);
        }

    })

}

