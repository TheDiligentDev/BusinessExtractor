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


const HomePage = () => {
    const [state, setState] = useState({
        businessType: '',
        zipCode: '',
        businesses: []
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value })
    }

    const handleSubmitClick = () => {
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
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Business Name</TableCell>
                                <TableCell align="right">Street Address</TableCell>
                                <TableCell align="right">City</TableCell>
                                <TableCell align="right">State</TableCell>
                                <TableCell align="right">Zip</TableCell>
                                <TableCell align="right">Website</TableCell>
                                <TableCell align="right">Phone</TableCell>
                                <TableCell align="right">Email(s)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {state.businesses.length > 0 ? state.businesses.map(row => { })
                                : <TableRow key="no-records">
                                    <TableCell colSpan={8} align="center">
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