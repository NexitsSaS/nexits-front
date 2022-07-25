import { Typography } from '@mui/material';
const TitleAndText = ({ title = 'Main title', relatedInfo = 'some information' }) => {
    return (
        <>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h3">{relatedInfo}</Typography>
        </>
    );
};
export default TitleAndText;
