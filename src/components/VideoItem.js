// import material-ui
import { ImageListItemBar, ImageListItem } from '@mui/material';

// assets
import background from 'assets/images/background/player.png';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const VideoItem = (item) => {
    return (
        <ImageListItem>
            <img src={background} alt={item.item.title} />
            <ImageListItemBar
                title={item.item.title}
                style={{ background: 'linear-gradient(to Top, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)' }}
            />
        </ImageListItem>
    );
};

export default VideoItem;
