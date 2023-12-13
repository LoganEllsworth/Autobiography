import SchoolIcon from '@mui/icons-material/School';
import TimelineEvent from "./timelineEvent";

const College = ({ onLeft }) => {
	return (
        <TimelineEvent
            onLeft={onLeft}
            subtitle={'Undergraduate Program - BS in Computer Science'}
            header={'Arizona State University'}
            body={`In the fall of 2020 I began by undergraduate program. Between the introduction to remote learning, moving, and starting my degree,
            there was a lot to juggle. But even so, I met many amazing people my freshman year and it truly was an incredible experience.`}
            CustIcon={SchoolIcon} />
    );
}

export default College;