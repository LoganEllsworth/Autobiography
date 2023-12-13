import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import TimelineEvent from './timelineEvent';

const Highschool = ({ onLeft }) => {
	return (
        <TimelineEvent
            onLeft={onLeft}
            subtitle={'High school Education'}
            header={'Boulder Creek High school'}
            body={`When I promoted to high school, I knew I wanted to take on an engineering profession and education. As such, I elected to enroll in a 4yr engineering program
            that covered various disciplines including software, robotics, aerospace, and CAD drafting. I also completed a 2yr graphic design sequence.`}
            CustIcon={HistoryEduIcon} />
    );
}

export default Highschool;