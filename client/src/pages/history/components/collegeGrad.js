import SchoolIcon from '@mui/icons-material/School';
import TimelineEvent from './timelineEvent';

const Graduation = ({ onLeft }) => {
    return (
        <TimelineEvent
            onLeft={onLeft}
            subtitle={'Graduation - Bachelors'}
            header={'B.S. in Computer Science'}
            body={`2024 marked the end of my 4 year degree program at Arizona State University. I graduated with a B.S. in Computer Science, as well as a minor in Business.
                While I enjoyed my time in college, I am ready to enter a new stage of life and with that, a new career.`}
            CustIcon={SchoolIcon} />
    );
}

export default Graduation;