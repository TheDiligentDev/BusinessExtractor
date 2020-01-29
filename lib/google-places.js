import axios from 'axios';


export const getPlacesByTypeAndZip = async (type, zip) => {
    let searchTerm = `${type} ${zip}`;
    let { data } = await axios.post('/api/getGoogleBusinessDetails', { searchTerm });
    debugger;
    return data;
}

