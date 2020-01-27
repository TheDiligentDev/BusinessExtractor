import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import Header from '../components/Header';

const MyApp = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <Header />
            <Container maxWidth="lg">
                <Paper elevation={3}>
                    <Box my={2}>
                        <Component {...pageProps} />
                    </Box>
                </Paper>
            </Container>
        </React.Fragment>
    )
}

export default MyApp;