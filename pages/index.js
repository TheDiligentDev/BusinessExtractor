import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Box, FormLabel, FormGroup, FormControlLabel, TextField, Button } from '@material-ui/core';


const HomePage = () => {
    const [state, setState] = useState({
        businessType: '',
        zipCode: ''
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value })
    }

    return (
        <React.Fragment>
            <Box m={4}>
                <FormControl>
                    <InputLabel htmlFor="business-type">Business Type</InputLabel>
                    <Input id="business-type" onChange={handleChange('businessName')} value={state.businessType} />
                </FormControl>
            </Box >
        </React.Fragment>
        // <FormControl>
        //     <FormLabel component="legend">Enter a Business Type and Zip Code to Search</FormLabel>
        //     <FormGroup>
        //         <TextField onChange={handleChange('businessType')} value="" />

        //         <TextField onChange={handleChange('zipCode')} value="" />

        //         <Button>
        //             Submit
        //         </Button>
        //     </FormGroup>
        // </FormControl>
    )
}

export default HomePage;