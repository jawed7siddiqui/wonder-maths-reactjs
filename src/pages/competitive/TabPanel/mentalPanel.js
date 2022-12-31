import { useState } from 'react';
// material-ui
import { Typography, Grid, Select, MenuItem, FormControl, Button, Divider, FormGroup } from '@mui/material';

// component import
import Checkbox from 'components/CheckBoxItem';

import HeaderCard from 'components/HeaderCard';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const [age, setAge] = useState(0);
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const dataSet = [
        { label: 'Jason Killian', name: 'Jason Killian' },
        { label: 'Gilad Gray', name: 'Gilad Gray' },
        { label: 'Antoine Llorca', name: 'Antoine Llorca' }
    ];
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={3} sm={3} md={3} lg={2}>
                <Typography variant="h5">Select Mental ability list</Typography>
                <FormControl style={{ minWidth: '150px' }}>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange}>
                        <MenuItem value={0}>Select</MenuItem>
                        <MenuItem value={10}>Test 1: Fractions</MenuItem>
                        <MenuItem value={20}>Test 2: Fractions</MenuItem>
                        <MenuItem value={30}>Test 3: Fractions</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {/* row 2 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h3">here is problem</Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <HeaderCard>
                    <Typography variant="h5" style={{ margin: '20px' }}>
                        this is the title pf problem
                    </Typography>
                    <FormControl component="fieldset">
                        <FormGroup>
                            {dataSet.map((data, idx) => {
                                return <Checkbox item={data} key={idx} />;
                            })}
                        </FormGroup>
                    </FormControl>
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
