import PropTypes from 'prop-types';
import { forwardRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';

// project import
import { activeItem } from 'store/reducers/menu';

import navigation from 'menu-items';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

const NavItem = ({ item, level }) => {
    const location = useLocation();
    // const [main, setMain] = useState();
    // const [itemc, setItemc] = useState();
    const theme = useTheme();
    const dispatch = useDispatch();
    const menu = useSelector((state) => state.menu);
    const { drawerOpen, openItem } = menu;

    // // set active item state
    // const getCollapse = (menuc) => {
    //     console.log('menuc');
    //     console.log(menuc);
    //     if (menuc.children) {
    //         menuc.children.filter((collapse) => {
    //             console.log(collapse);
    //             if (collapse.type && collapse.type === 'collapse') {
    //                 getCollapse(collapse);
    //             } else if (collapse.type && collapse.type === 'item') {
    //                 if (location.pathname === collapse.url) {
    //                     setMain(menuc);
    //                     setItemc(collapse);
    //                 }
    //             }
    //             return false;
    //         });
    //     }
    // };

    // if (itemc && itemc.type === 'item') {
    //     // console.log(itemc.title);
    //     // console.log('Title is');
    // }

    let itemTarget = '_self';
    if (item.target) {
        itemTarget = '_blank';
    }

    // if (location.pathname === item.url) {
    //     console.log(item.id);
    //     dispatch(activeItem({ openItem: [item.id] }));
    // }

    let listItemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />) };
    if (item?.external) {
        listItemProps = { component: 'a', href: item.url, target: itemTarget };
    }

    const itemHandler = (id) => {
        dispatch(activeItem({ openItem: [id] }));
    };

    const Icon = item.icon;
    const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '25px' : '25px' }} /> : false;

    const isSelected = openItem.findIndex((id) => id === item.id) > -1;

    // active menu item on page load
    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === item.id);
        if (location.pathname === item.url) {
            // console.log(item.id);
            dispatch(activeItem({ openItem: [item.id] }));
        }
        if (currentIndex > -1) {
            // console.log('zzz');
            dispatch(activeItem({ openItem: [item.id] }));
        }
        // eslint-disable-next-line
    }, []);

    const textColor = '#ffffff';
    const textSelectedColor = '#3F4D67';
    const iconSelectedColor = '#3F4D67';

    return (
        <ListItemButton
            {...listItemProps}
            disabled={item.disabled}
            onClick={() => itemHandler(item.id)}
            selected={isSelected}
            sx={{
                zIndex: 1201,
                pl: 1.5,
                py: !drawerOpen && level === 1 ? 1.25 : 1,
                ...{
                    '&:hover': {
                        bgcolor: 'dark'
                    },
                    '&.Mui-selected': {
                        borderLeft: `3px solid ${theme.palette.success.main}`,
                        color: iconSelectedColor,
                        bgcolor: '#3F4D67',
                        '&:hover': {
                            color: iconSelectedColor,
                            bgcolor: 'dark'
                        }
                    },
                    '&.MuiButtonBase-root': {
                        padding: '0px 10px',
                        marginTop: '10px'
                    }
                }
            }}
        >
            <Box
                sx={{
                    borderRadius: '4px',
                    bgcolor: 'none',
                    minWidth: 28,
                    color: isSelected ? iconSelectedColor : textColor,
                    width: '100%',
                    padding: '5px 2px',
                    display: 'inline-flex',
                    ...(isSelected && {
                        bgcolor: '#ffffff'
                    })
                }}
            >
                {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
                    <Chip
                        color={item.chip.color}
                        variant={item.chip.variant}
                        size={item.chip.size}
                        label={item.chip.label}
                        avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
                    />
                )}
                {itemIcon && (
                    <ListItemIcon
                        sx={{
                            width: 30,
                            margin: '3px 5px',
                            color: isSelected ? iconSelectedColor : textColor,
                            ...(!drawerOpen && {
                                width: 30,
                                height: 30
                            }),
                            ...(!drawerOpen &&
                                isSelected && {
                                    bgcolor: 'primary.lighter',
                                    '&:hover': {
                                        bgcolor: 'primary.lighter'
                                    }
                                })
                        }}
                    >
                        {itemIcon}
                    </ListItemIcon>
                )}
                {(drawerOpen || (!drawerOpen && level !== 1)) && (
                    <ListItemText
                        primary={
                            <Typography
                                variant="h6"
                                sx={{
                                    padding: '0px 5px',
                                    color: isSelected ? textSelectedColor : textColor
                                }}
                            >
                                {item.title}
                            </Typography>
                        }
                    />
                )}
            </Box>
        </ListItemButton>
    );
};

NavItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number
};

export default NavItem;
