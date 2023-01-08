import { useState } from 'react';
// material-ui
import { Typography, Grid, Select, MenuItem, FormControl } from '@mui/material';

import VideoItem from 'components/VideoItem';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const [age, setAge] = useState(0);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const item = {
        title: 'hello world'
    };
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={3} sm={3} md={3} lg={2}>
                <Typography variant="h5">classes</Typography>
                <FormControl style={{ minWidth: '150px' }}>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange}>
                        <MenuItem value={0}>Select</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {/* row 2 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Other videos</Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <VideoItem item={item} />
            </Grid>
        </Grid>
    );
};

export default SamplePage;
