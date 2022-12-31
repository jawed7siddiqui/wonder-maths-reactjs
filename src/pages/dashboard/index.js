// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import VideoItem from 'components/VideoItem';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
    const item = {
        title: 'hello world'
    };
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} md={12} lg={12}>
                <VideoItem item={item} />
            </Grid>
            {/* row 2 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Other videos</Typography>
            </Grid>
            <Grid item xs={16} sm={8} md={4} lg={4}>
                <VideoItem item={item} />
            </Grid>
            <Grid item xs={16} sm={8} md={4} lg={4}>
                <VideoItem item={item} />
            </Grid>
            <Grid item xs={16} sm={8} md={4} lg={4}>
                <VideoItem item={item} />
            </Grid>
        </Grid>
    );
};

export default DashboardDefault;
