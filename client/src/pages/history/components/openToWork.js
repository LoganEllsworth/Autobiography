import WorkIcon from '@mui/icons-material/Work';
import TimelineEvent from './timelineEvent';
import { Link, Typography } from '@mui/material';

const OpenToWork = ({ onLeft }) => {
    return (
        <TimelineEvent
            onLeft={onLeft}
            subtitle={<Link href={'/connect'}>
                <Typography variant='subtitle1'>Connect with Me</Typography>
            </Link>}
            header={'Open to Work'}
            body={`As a result of our relocation to Washington, I was unable to continue my position at Sandhills Global. While it was a difficult decision,
                I am excited to see what the future brings. Feel free to contact me with any leads or connections, I'd be happy to chat!`}
            CustIcon={WorkIcon} />
    );
}

export default OpenToWork;