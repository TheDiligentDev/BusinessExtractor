const next = require('next');
const express = require('express');
const axios = require('axios');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

const googleApiKey = 'YOUR_GOOGLE_PLACES_API_KEY';
const googlePlacesBaseUrl = 'https://maps.googleapis.com/maps/api/place';
const fields = 'name,formatted_address,formatted_phone_number,website'

app.prepare().then(() => {
    const server = express();

    //middleware to get json body on post methods
    server.use(express.json());

    // Our api call to google places
    server.post('/api/getGoogleBusinessDetails', async (req, res) => {
        const searchTerm = encodeURI(req.body.searchTerm);

        //get our initial places from Google
        const { data } = await axios.get(`${googlePlacesBaseUrl}/textsearch/json?query=${searchTerm}&key=${googleApiKey}`);

        const { status, results } = data;

        //Drill down further to get more information
        let arrPlacePromises = [];
        if (status == "OK") {
            results.forEach((r) => {
                arrPlacePromises.push(axios.get(`${googlePlacesBaseUrl}/details/json?place_id=${r.place_id}&fields=${fields}&key=${googleApiKey}`));
            })

            let arrPromiseResults = await Promise.all(arrPlacePromises);

            let placesDetails = [];
            arrPromiseResults.forEach(pr => {
                let data = pr.data.result;

                placesDetails.push({ name: data.name, address: data.formatted_address, phone: data.formatted_phone_number, website: data.website });
            })

            res.json(placesDetails);
        }
    })

    //defualt catch all for next.js
    server.get('*', (req, res) => {
        return handle(req, res);
    })

    server.listen(port, err => {
        if (err) throw err;
        console.log(`Listening on port ${port}`);
    })
})