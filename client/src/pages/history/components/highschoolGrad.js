import SchoolIcon from '@mui/icons-material/School';
import TimelineEvent from './timelineEvent';

const HighschoolGrad = ({ onLeft }) => {
    return (
        <TimelineEvent
            onLeft={onLeft}
            subtitle={'Graduation - Diploma'}
            header={'High school Graduation'}
            body={`I may not have walked across a stage in 2020, but I did graduate! In the top of my class with a 4.0, I completed high school and received  my
            college acceptance. I spent the summer working before transferring down to Tempe, Arizona.`}
            CustIcon={SchoolIcon} />
    );
}

export default HighschoolGrad;