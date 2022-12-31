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
                <Typography variant="h5">Select your level</Typography>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                        <FormControlLabel
                            value="Basic"
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
                            label="Basic"
                        />
                        <FormControlLabel
                            value="Medium"
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
                            label="Medium"
                        />
                        <FormControlLabel
                            value="Advanced"
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
                            label="Advanced"
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
