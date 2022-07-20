import Card from '@mui/material/Card';
import { Avatar, CardContent, CardHeader, Stack } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import AvatarBg from './user.jpg';

const TeamCategoryCard = () => {
    return (
        <Card sx={{ border: '2px solid #CECECE', minWidth: 345, margin: '1rem', borderRadius: '16px', minHeight: 245 }}>
            <CardHeader
                title="Web Dev Mobile"
                subheader={<Typography sx={{ color: 'blue', marginTop: 2 }}>100 members</Typography>}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <CardContent>
                <Box>
                    <Stack direction="row" spacing={-2}>
                        <Avatar alt="avtr" src={AvatarBg} />
                        <Avatar alt="avtr" src={AvatarBg} />
                        <Avatar alt="avtr" src={AvatarBg} />
                        <Avatar alt="avtr" src={AvatarBg} />
                        <Avatar sx={{ backgroundColor: '#1C3AFF', color: '#fff', fontSize: 14 }}>+15</Avatar>
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TeamCategoryCard;
