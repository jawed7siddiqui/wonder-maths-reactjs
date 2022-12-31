import * as React from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Box,
    CssBaseline,
    Toolbar,
    Typography,
    Button,
    Grid,
    Divider,
    useScrollTrigger,
    Dialog,
    DialogContent,
    DialogContentText,
    TextField
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// import ModalLogin from './modal/modalLogin';

//image path
import logo_img from '../assets/images/dashboard/logo.png';
import woman_img from '../assets/images/dashboard/woman.png';
import books_img from '../assets/images/dashboard/books.png';
import firstmedal_img from '../assets/images/dashboard/first-medal.png';
import graduationhat_img from '../assets/images/dashboard/graduation-hat.png';
import appstore_img from '../assets/images/dashboard/appstore.png';
import googleplay_img from '../assets/images/dashboard/googleplay.png';
import doodle_img from '../assets/images/dashboard/doodle.png';
import womandesk_img from '../assets/images/dashboard/woman_desk.png';
import boy_img from '../assets/images/dashboard/boy.png';

import './dashboard.css';

import { Link } from 'react-router-dom';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        style: {
            backgroundColor: trigger ? '#FFF' : '#FAFFF6'
        }
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func
};

function Dashboard(props) {
    const [open, setOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState('login');

    const handleClickOpen = (modal) => {
        setOpen(true);
        setModalContent(modal);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            {/* dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="sm"
                sx={{ borderRadius: '50%', p: '30px', '& .MuiPaper-root': { height: '500px', width: '600px', borderRadius: '20px' } }}
            >
                {(() => {
                    switch (modalContent) {
                        case 'login':
                            return (
                                <div>
                                    <Box id="alert-dialog-title" style={{ display: 'flex', padding: '10px' }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={4}>
                                                <img src={logo_img} alt="logo" />
                                            </Grid>
                                            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                                                <Typography variant="h1" className="dialogTitle">
                                                    Sign In
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4} sx={{ textAlign: 'right' }}>
                                                <CloseIcon onClick={handleClose} className="pointer" />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <DialogContent>
                                        <Box id="alert-dialog-description" width="100%">
                                            <div style={{ width: '100%', textAlign: 'center' }}>
                                                <img src={boy_img} alt="boy" style={{ width: '30%', margin: 'auto' }} />
                                            </div>
                                            <br />
                                            <TextField
                                                fullWidth
                                                placeholder="Enter PhoneNumber"
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        width: '100%',
                                                        fontSize: 'medium',
                                                        padding: '5px',
                                                        marginBottom: '20px',
                                                        borderRadius: '13px',
                                                        background: '#EFF2FC'
                                                    }
                                                }}
                                            />
                                            <Button
                                                className="primary mainButton fullwidth"
                                                onClick={() => setModalContent('signup')}
                                                style={{ margin: 'auto' }}
                                            >
                                                Sign in
                                            </Button>
                                            <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                                <Typography>Don't have an account?</Typography>
                                                <Typography
                                                    className="dialogLink pointer"
                                                    style={{ marginLeft: '10px' }}
                                                    onClick={() => setModalContent('signup')}
                                                >
                                                    create your account
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </DialogContent>
                                </div>
                            );
                            break;
                        case 'signup':
                            return (
                                <div>
                                    <Box id="alert-dialog-title" style={{ display: 'flex', padding: '10px' }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={4}>
                                                <img src={logo_img} alt="logo" />
                                            </Grid>
                                            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                                                <Typography variant="h1" className="dialogTitle">
                                                    Sign Up
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4} sx={{ textAlign: 'right' }}>
                                                <CloseIcon onClick={handleClose} className="pointer" />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description" width="100%">
                                            <Typography variant="h3">Register a new account</Typography>
                                            <Button
                                                className="primary mainButton fullwidth outlined"
                                                onClick={() => setModalContent('actCode')}
                                            >
                                                Activation code
                                            </Button>
                                            <Button
                                                className="primary mainButton fullwidth outlined"
                                                onClick={() => setModalContent('promoCode')}
                                            >
                                                Promo code
                                            </Button>
                                            <Button className="primary mainButton fullwidth outlined">Pay now</Button>
                                            <Button className="primary mainButton fullwidth outlined">Request for Demo</Button>
                                        </DialogContentText>
                                    </DialogContent>
                                </div>
                            );
                            break;
                        case 'actCode':
                            return (
                                <div>
                                    <Box id="alert-dialog-title" style={{ display: 'flex', padding: '10px' }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={4}>
                                                <ArrowBackIcon
                                                    fontSize="large"
                                                    className="pointer"
                                                    onClick={() => setModalContent('signup')}
                                                />
                                            </Grid>
                                            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                                                <Typography variant="h1" className="dialogTitle">
                                                    Sign Up
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4} sx={{ textAlign: 'right' }}>
                                                <CloseIcon onClick={handleClose} className="pointer" />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description" width="100%">
                                            <Typography variant="h3" sx={{ p: '10px 0px' }}>
                                                Activation code
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                placeholder="Enter Activation code"
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        width: '100%',
                                                        border: '#0183Ef 1px dashed',
                                                        backgroundColor: '#F1FCFF',
                                                        fontSize: 'medium',
                                                        padding: '5px',
                                                        borderRadius: '13px'
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: '0px'
                                                    }
                                                }}
                                                InputProps={{
                                                    endAdornment: <Button>Check</Button>
                                                }}
                                            />

                                            <Button className="primary mainButton fullwidth bottomButton">Activation</Button>
                                        </DialogContentText>
                                    </DialogContent>
                                </div>
                            );
                            break;
                        case 'promoCode':
                            return (
                                <div>
                                    <Box id="alert-dialog-title" style={{ display: 'flex', padding: '10px' }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={4}>
                                                <ArrowBackIcon
                                                    fontSize="large"
                                                    className="pointer"
                                                    onClick={() => setModalContent('signup')}
                                                />
                                            </Grid>
                                            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                                                <Typography variant="h1" className="dialogTitle">
                                                    Sign Up
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4} sx={{ textAlign: 'right' }}>
                                                <CloseIcon onClick={handleClose} className="pointer" />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description" width="100%">
                                            <Typography variant="h3" sx={{ p: '10px 0px' }}>
                                                Promo code
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                placeholder="Enter promo code"
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        width: '100%',
                                                        border: '#0183Ef 1px dashed',
                                                        backgroundColor: '#F1FCFF',
                                                        fontSize: 'medium',
                                                        padding: '5px',
                                                        borderRadius: '13px'
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: '0px'
                                                    }
                                                }}
                                                InputProps={{
                                                    endAdornment: <Button>Check</Button>
                                                }}
                                            />

                                            <Button className="primary mainButton fullwidth bottomButton">Activation</Button>
                                        </DialogContentText>
                                    </DialogContent>
                                </div>
                            );
                            break;
                        default:
                            break;
                    }
                })()}

                {/* Activation code */}
            </Dialog>
            {/* Main Content */}
            <CssBaseline />
            <ElevationScroll {...props}>
                {/* <AppBar component="nav" style={{ background: '#FAFFF6', boxShadow: 'none' }}> */}
                <AppBar component="nav" style={{}}>
                    <Toolbar>
                        <img src={logo_img} alt="logo" />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontSize: '30px', color: '#213052' }}
                        >
                            WonderMath
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Button className="menu" component={Link} to="home">
                                Home
                            </Button>
                            <Button component={Link} className="menu" to="classwise">
                                Package
                            </Button>
                            <Button className="menu">About Us</Button>
                            <Button className="menu">Blog</Button>
                            <Button
                                className="menu"
                                onClick={() => {
                                    handleClickOpen('login');
                                }}
                            >
                                Sign In
                            </Button>
                            <Button
                                className="primary menu"
                                onClick={() => {
                                    handleClickOpen('signup');
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Box sx={{ width: '100%' }} style={{}}>
                <Toolbar />
                <Grid container spacing={2} style={{ padding: '50px', background: '#FAFFF6' }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{}}>
                            <Typography variant="h1" style={{ color: '#213052' }}>
                                India’s #1 Online <br />
                                Math Learning <br />
                                Platfrom
                            </Typography>
                            <Typography style={{ color: '#576581', margin: '30px 0px' }}>
                                comprehensive, interactive and an irresistibly fun early learning experience through online videos classes.
                            </Typography>
                            <Button component={Link} to="home" className="primary mainButton">
                                Get started
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={woman_img} alt="wowan" className="bigImage" />
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ background: 'linear-gradient(#FAFFF6, #ffffff)', height: '50px' }}></Grid>
                {/* Package */}
                <Grid container spacing={3} style={{ padding: '50px', background: '#FFF' }}>
                    <Grid item xs={24} md={12}>
                        <Typography variant="h1" style={{ color: '#213052', textAlign: 'center' }}>
                            Exclusive Comprehensive <br />
                            Math Packages
                        </Typography>
                    </Grid>
                    <Grid item xs={8} md={4} style={{}}>
                        <Box sx={{ background: '#FFF8ED' }} className="packageItem">
                            <div style={{ textAlign: 'center' }}>
                                <img src={books_img} alt="book" className="cardImage" />
                            </div>
                            <Typography variant="h3" className="packageTitle">
                                Class Wise Package
                            </Typography>
                            <Typography className="primaryText">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={8} md={4} style={{}}>
                        <Box sx={{ background: '#F3F5FF' }} className="packageItem">
                            <div style={{ textAlign: 'center' }}>
                                <img src={graduationhat_img} alt="book" className="cardImage" />
                            </div>
                            <Typography variant="h3" className="packageTitle">
                                Scholarship Package
                            </Typography>
                            <Typography className="primaryText">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={8} md={4} style={{}}>
                        {/* ../../assets/images/dashboard/books.png */}
                        <Box sx={{ background: '#FFF6ED' }} className="packageItem">
                            <div style={{ textAlign: 'center' }}>
                                <img src={firstmedal_img} alt="book" className="cardImage" />
                            </div>
                            <Typography variant="h3" className="packageTitle">
                                Competitive Exams
                            </Typography>
                            <Typography className="primaryText">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                {/* Demo */}
                <Grid container spacing={2} style={{ background: 'linear-gradient(#ffffff, #FAFFF6)', height: '50px' }}></Grid>
                <Box sx={{ p: '50px' }} style={{ background: '#F9FDF5', paddingRight: '74px' }}>
                    <Grid
                        container
                        spacing={3}
                        style={{
                            background: 'radial-gradient(circle at 100% 0%, #55614B 0%, #2F363D 30%)',
                            borderRadius: '30px',
                            marginLeft: '0px',
                            padding: '30px 30px 0px 30px'
                        }}
                    >
                        <Grid item xs={12} md={6} style={{}}>
                            <Box sx={{}}>
                                <Typography variant="h1" style={{ color: '#ffffff' }}>
                                    Get started with <br />
                                    Wonder math <br />
                                    today
                                </Typography>
                                <Typography className="primaryText" style={{ margin: '40px 0px' }}>
                                    Get register & explore the math magic with great fun. <br />
                                    Watch our video sessions & experience our aptitude test.
                                </Typography>
                                <Button className="mainButton demo">Watch Demo</Button>
                                <br />
                                <img src={doodle_img} alt="doodle" width="100px" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} style={{}}>
                            <div style={{ textAlign: 'center' }}>
                                <img src={womandesk_img} alt="wowandesk" className="bigImage" />
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container spacing={2} style={{ background: 'linear-gradient(#FAFFF6, #ffffff)', height: '50px' }}></Grid>

                {/* Downlaod */}
                <Box sx={{ p: '50px' }} style={{ background: '#fff' }}>
                    <Box
                        style={{
                            borderRadius: '30px',
                            marginRight: '300px',
                            marginLeft: '0px',
                            padding: '30px',
                            width: '100%',
                            boxShadow: 'inset 0px 0px 5px #d0d0d0',
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="h1" style={{ color: '#000' }}>
                            Experince the <br />
                            “Wonder Math” on your mobile
                        </Typography>
                        <Typography variant="h6" style={{ margin: '50px 0px', color: '#000' }}>
                            Download the app from the “Google play” & “App store”
                        </Typography>
                        <Button className="primary mainButton">Download</Button>
                    </Box>
                </Box>
                {/* footer */}
                <Box sx={{ p: '30px 60px' }} style={{ background: '#30373E' }}>
                    {/* footer logo */}
                    <Box style={{ display: 'flex' }}>
                        <img src={logo_img} alt="logo" />
                        <Typography variant="h3" style={{ color: 'white', margin: '10px' }}>
                            Wonder Maths
                        </Typography>
                    </Box>
                    {/* footer summary */}
                    <Box style={{ margin: '20px 0px' }}>
                        <Typography style={{ color: 'white' }}>
                            Join Millions of students who started working <br />
                            with us & explore the “Real math”
                        </Typography>
                    </Box>
                    {/* footer link */}
                    <Box>
                        <Button className="link">
                            <img src={googleplay_img} alt="googleplay_img" />
                        </Button>
                        <Button className="link">
                            <img src={appstore_img} alt="appstore_img" />
                        </Button>
                        <Box style={{ display: 'flex', float: 'right' }}>
                            <Typography className="footerText footerNavItem">Home</Typography>
                            <Typography className="footerText footerNavItem">Packages</Typography>
                            <Typography className="footerText footerNavItem">About Us</Typography>
                            <Typography className="footerText footerNavItem">Blog</Typography>
                            <Typography className="footerText footerNavItem">Contract</Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Divider style={{ margin: '30px 0px' }} />
                    </Box>

                    {/* footer copyright */}
                    <Box style={{ display: 'flex', textAlign: 'left' }}>
                        <Typography className="footerText" style={{}}>
                            © Solo Inc copy right reserved{' '}
                        </Typography>
                        <Typography className="footerText" style={{ marginLeft: 'auto' }}>
                            Privacy Policy
                        </Typography>
                        <Typography className="footerText" style={{ marginLeft: '10px' }}>
                            •
                        </Typography>
                        <Typography className="footerText" style={{ marginLeft: '10px' }}>
                            Terms of Service
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func
};

export default Dashboard;
