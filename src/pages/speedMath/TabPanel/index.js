import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from '@mui/material';

// component
import VideoPanel from './videoPanel';
import AptitudPanel from './aptitudPanel';
import MentalPanel from './mentalPanel';

function TabPanel(props) {
    const { index, children, value, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export default function SimpleTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="class tabs" textColor="secondary" indicatorColor="secondary">
                    <Tab label="Video" {...a11yProps(0)} />
                    <Tab label="Aptitude" {...a11yProps(1)} />
                    <Tab label="Mental ability" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <VideoPanel />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AptitudPanel />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MentalPanel />
            </TabPanel>
        </Box>
    );
}
