// material-ui
import { Typography, Grid, RadioGroup, FormControlLabel, FormControl, Radio, Divider } from '@mui/material';

// project import
import TabPanel from './TabPanel';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    // const classData = [{ level: '1' }, { level: '2' }, { level: '3' }, { level: '4' }, { level: '5' }];
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="h5">Select your School</Typography>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                        <FormControlLabel
                            value="middle"
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
                            label="Middle School"
                        />
                        <FormControlLabel
                            value="high"
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
                            label="High School"
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Divider />
            {/* row 2 */}
            <TabPanel />
        </Grid>
    );
};

export default SamplePage;
