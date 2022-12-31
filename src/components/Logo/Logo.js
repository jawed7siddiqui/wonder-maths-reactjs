// material-ui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

//image path
import logo_img from '../../assets/images/dashboard/logo.png';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Mantis" width="100" />
         *
         */
        <>
            <img src={logo_img} alt="logo" />
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontSize: '30px', color: '#ffffff' }}
            >
                WonderMath
            </Typography>
        </>
    );
};

export default Logo;
