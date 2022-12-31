import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// material-ui
import { Box, useMediaQuery, Typography } from '@mui/material';

// project import
// import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

import navigation from 'menu-items';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
    const location = useLocation();
    const [main, setMain] = useState();
    const [item, setItem] = useState();

    // set active item state
    const getCollapse = (menu) => {
        if (menu.children) {
            menu.children.filter((collapse) => {
                if (collapse.type && collapse.type === 'collapse') {
                    getCollapse(collapse);
                } else if (collapse.type && collapse.type === 'item') {
                    if (location.pathname === collapse.url) {
                        setMain(menu);
                        setItem(collapse);
                    }
                }
                return false;
            });
        }
    };

    let itemContent;

    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

    useEffect(() => {
        navigation?.items?.map((menu) => {
            if (menu.type && menu.type === 'group') {
                getCollapse(menu);
            }
            return false;
        });
    });

    if (item && item.type === 'item') {
        const Icon = item.icon;
        const itemIcon = item.icon ? <Icon style={{ fontSize: '20px', color: '#3F4D67' }} /> : false;
        item.title;
        itemContent = (
            <Box sx={{ width: '100%', display: 'flex' }}>
                {itemIcon}
                <Typography variant="subtitle1" color="textPrimary" style={{ marginLeft: '10px', color: '#3F4D67' }}>
                    {item.title}
                </Typography>
            </Box>
        );
    }

    return (
        <>
            {/* {!matchesXs && <Search />} */}
            <Box sx={{ width: '100%', ml: 1 }}>
                <Typography>{itemContent}</Typography>
            </Box>
            <Notification />
            {!matchesXs && <Profile />}
            {matchesXs && <MobileSection />}
        </>
    );
};

export default HeaderContent;
