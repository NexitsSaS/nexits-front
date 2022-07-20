import { Grid } from '@mui/material';
import { useStyle } from 'hooks/useStyle';
import { ImagesProvider, URLEditor, ThumbnailOptionsProvider, Thumbnails } from 'react-thumbnails';
const StackedImages = ({
    thumbnailProfiles = [
        'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=634&q=80',
        'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=800&q=80',
        'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=658&q=80'
    ]
}) => {
    const classes = useStyle();
    return (
        <Grid container xs={4} style={{ marginLeft: '1rem' }}>
            {thumbnailProfiles.map(
                (urlProfile, i) => i < 2 && <img src={urlProfile} className={classes.overlayImage} alt="test for alt" />
            )}
            <div className={classes.circularDiv}>{`+${thumbnailProfiles.length}`}</div>
        </Grid>
    );
};

export default StackedImages;
