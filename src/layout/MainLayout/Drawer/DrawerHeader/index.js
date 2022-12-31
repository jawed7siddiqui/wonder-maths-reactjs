import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/Logo';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
    const theme = useTheme();

    return (
        // only available in paid version
        <DrawerHeaderStyled theme={theme} open={open} style={{ height: '90px', padding: '0px', boxShadow: '0px 5px 5px #0005' }}>
            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                style={{ width: '100%', height: '70px', boxShadow: '0px 5px 5px #0005', position: 'absolute', top: '0px' }}
            >
                <Logo />
                {/* <Chip
                    label={process.env.REACT_APP_VERSION}
                    size="small"
                    sx={{ height: 16, '& .MuiChip-label': { fontSize: '0.625rem', py: 0.25 } }}
                    component="a"
                    href="https://github.com/codedthemes/mantis-free-react-admin-template"
                    target="_blank"
                    clickable
                /> */}
            </Stack>
        </DrawerHeaderStyled>
    );
};

DrawerHeader.propTypes = {
    open: PropTypes.bool
};

export default DrawerHeader;
