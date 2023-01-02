import { React, useEffect, useState } from 'react';
import axios from 'axios';

// material-ui
import { Typography, Grid, Button, Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

// project import
import TabPanel from './TabPanel';
import '../dashboard.css';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    // const classData = [{ level: '1' }, { level: '2' }, { level: '3' }, { level: '4' }, { level: '5' }];
    const [value, setValue] = useState('');
    const [classname, setClassname] = useState('');
    const handleChange= (e) => {
        setValue(e.target.value);      
    };

    const handleClick= (std) => {
        setClassname(std);      
    };
  
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="h5">Select your class - State syllabul</Typography>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" defaultValue="top"
                    value={value}
                     onChange={handleChange}>
                        <FormControlLabel
                            value="State"
                            control={
                                <Radio
                                    sx={{
                                        color: '#52c41a',
                                        '&.Mui-checked': {
                                            color: '#52c41a'
                                        }
                                    }}
                                />
                            }
                            label="State"
                        />
                        <FormControlLabel
                            value="CBSE"
                            control={
                                <Radio
                                    sx={{
                                        color: '#52c41a',
                                        '&.Mui-checked': {
                                            color: '#52c41a'
                                        }
                                    }}
                                />
                            }
                            label="CBSE"
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>
            {/* row 1 */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="h5">Select your class - State syllabul </Typography>
                <Box>
                    <Button className={(classname == 5)?'primary mainButton mr10':'primary mainButton outlined mr10'} onClick={() => handleClick(5)}>Class 5</Button>
                    <Button className={(classname == 6)?'primary mainButton mr10':'primary mainButton outlined mr10'} onClick={() => handleClick(6)}>Class 6</Button>
                    <Button className={(classname == 7)?'primary mainButton mr10':'primary mainButton outlined mr10'} onClick={() => handleClick(7)}>Class 7</Button>
                    <Button className={(classname == 8)?'primary mainButton mr10':'primary mainButton outlined mr10'} onClick={() => handleClick(8)}>Class 8</Button>
                    <Button className={(classname == 9)?'primary mainButton mr10':'primary mainButton outlined mr10'} onClick={() => handleClick(9)}>Class 9</Button>
                    <Button className={(classname == 10)?'primary mainButton mr10':'primary mainButton outlined mr10'} onClick={() => handleClick(10)}>Class 10</Button>
                </Box>
            </Grid>
            {/* row 2 */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="h5"></Typography>
            </Grid>
            <TabPanel dataclassname ={classname} datavalue={value}/>
        </Grid>
    );
};

export default SamplePage;
