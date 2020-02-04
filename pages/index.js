import React, { useState } from 'react';
import {
    FormControl,
    InputLabel,
    Input,
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';
import { getPlacesByTypeAndZip } from '../lib/google-places';

const HomePage = () => {
    const [state, setState] = useState({
        businessType: '',
        zipCode: '',
        businesses: []
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value })
    }

    const handleSubmitClick = async () => {
        let places = await getPlacesByTypeAndZip(state.businessType, state.zipCode)
        if (places.length > 0) {
            setState({ ...state, businesses: places })
        }
    }

    return (
        <React.Fragment>
            <Box p={2} component="div" display="inline">
                <FormControl>
                    <InputLabel htmlFor="business-type">Business Type</InputLabel>
                    <Input id="business-type" onChange={handleChange('businessType')} value={state.businessType} />
                </FormControl>
            </Box>

            <Box p={2} component="div" display="inline">
                <FormControl>
                    <InputLabel htmlFor="business-type">Zip Code</InputLabel>
                    <Input id="zip-code" onChange={handleChange('zipCode')} value={state.zipCode} />
                </FormControl>
            </Box>

            <Box p={2} alignItems="flex-end" component="div" display="inline">
                <Button variant="contained" onClick={handleSubmitClick} color="primary">
                    Submit
                </Button>
            </Box>

            <Box pt={4}>
                <Typography variant="h5">Business Listings</Typography>
                <TableContainer>
                    <Table size='small'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Business Name</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Website</TableCell>
                                <TableCell>Phone</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {state.businesses.length > 0 ? state.businesses.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell>
                                        {row.name}
                                    </TableCell>
                                    <TableCell>
                                        {row.address}
                                    </TableCell>
                                    <TableCell>
                                        <a href={row.website}>{row.website}</a>
                                    </TableCell>
                                    <TableCell>
                                        {row.phone}
                                    </TableCell>
                                </TableRow>
                            ))
                                : <TableRow key="no-records">
                                    <TableCell colSpan={5} align="center">
                                        No Records.  Please search above!
                                    </TableCell>
                                </TableRow>}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </React.Fragment>
    )
}

export default HomePage;