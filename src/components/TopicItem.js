// import material-ui
import { ImageListItemBar, ImageListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// assets
import background from 'assets/images/background/topic.png';
import './style.css';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const TopicItem = (item) => {
    return (
        <ImageListItem component={Link} to={`/topic/${item.item.name}`} className="topicItem">
            <img className="topicImage" src={background} alt={item.item.name} style={{ borderRadius: '25px' }} />
            <div className="topicName">
                <Typography variant="h1" style={{ color: '#fff' }}>
                    {item.item.name}
                </Typography>
            </div>
        </ImageListItem>
    );
};

export default TopicItem;
