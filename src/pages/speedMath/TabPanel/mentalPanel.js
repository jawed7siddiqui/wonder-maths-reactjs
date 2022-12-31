import { useState } from 'react';
// material-ui
import { Typography, Grid, Select, MenuItem, FormControl, FormControlLabel, Button, Divider, Checkbox, FormGroup } from '@mui/material';

// project import

import HeaderCard from 'components/HeaderCard';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const [age, setAge] = useState(0);
    const handleChange = (event) => {
        setAge(event.target.value);
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
                <Typography variant="h5">here is problem</Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <HeaderCard>
                    <Typography variant="h3" style={{ margin: '20px' }}>
                        this is the title pf problem
                    </Typography>
                    <FormControl component="fieldset">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="problem 3"
                                        sx={{
                                            color: '#52c41a',
                                            '&.Mui-checked': {
                                                color: '#52c41a'
                                            }
                                        }}
                                    />
                                }
                                label="Gilad Gray"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="problem 3"
                                        sx={{
                                            color: '#52c41a',
                                            '&.Mui-checked': {
                                                color: '#52c41a'
                                            }
                                        }}
                                    />
                                }
                                label="Jason Killian"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="problem 3"
                                        sx={{
                                            color: '#52c41a',
                                            '&.Mui-checked': {
                                                color: '#52c41a'
                                            }
                                        }}
                                    />
                                }
                                label="Antoine Llorca"
                            />
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
