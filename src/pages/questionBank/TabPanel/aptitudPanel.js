import { useState } from 'react';
// material-ui
import { Typography, Grid, Select, MenuItem, FormControl, Button, Divider } from '@mui/material';

// component import
import RadioGroup from 'components/RadioItem';

import HeaderCard from 'components/HeaderCard';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const [age, setAge] = useState(0);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const dataSet = [
        { label: 'this is option 1', value: '111' },
        { label: 'this is option 2', value: '222' },
        { label: 'this is option 3', value: '333' },
        { label: 'this is option 4', value: '444' }
    ];
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={3} sm={3} md={3} lg={2}>
                <Typography variant="h5">Select Aptitude list</Typography>
                <FormControl style={{ minWidth: '150px' }}>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" color="success" value={age} onChange={handleChange}>
                        <MenuItem value={0}>Select</MenuItem>
                        <MenuItem value={10}>Test 1: LinearEquations</MenuItem>
                        <MenuItem value={20}>Test 2: LinearEquations</MenuItem>
                        <MenuItem value={30}>Test 3: LinearEquations</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {/* row 2 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">here is problem</Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <HeaderCard>
                    <Typography variant="h3" style={{ margin: '20px' }}>
                        this is the title pf problem
                    </Typography>
                    <RadioGroup dataSet={dataSet} name="answer" />
                    <Divider />
                    <Button variant="outlined" size="large" color="success">
                        Check your answer
                    </Button>
                </HeaderCard>
                <HeaderCard>
                    <Typography variant="h3" style={{ margin: '20px' }}>
                        answer
                    </Typography>
                    <Typography variant="body2" style={{ margin: '20px' }}>
                        this is the answer pf problem this is the answer pf problem this is the answer pf problem
                    </Typography>
                    <Typography variant="h5" style={{ margin: '20px' }}>
                        description
                    </Typography>
                    <Typography variant="body2" style={{ margin: '20px' }}>
                        this is the answer pf problem this is the answer pf problem this is the answer pf problem
                    </Typography>
                </HeaderCard>
            </Grid>
        </Grid>
    );
};

export default SamplePage;
