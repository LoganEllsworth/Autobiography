import TheatersIcon from '@mui/icons-material/Theaters';
import TimelineEvent from './timelineEvent';

const HarkinsTl = ({ onLeft }) => {
    return (
        <TimelineEvent
            onLeft={onLeft}
            subtitle={'Promotion - Team Leader'}
            header={'Harkins Theaters Promotion'}
            body={`After a year of dedication and personal growth, I earned a promotion to become a Team Leader with Harkins.
            This position worked in the same areas, and additionally I was responsible for managing a team of 2-15. This included delegating tasks,
            scheduling breaks, and working more directly with management to ensure needs were addressed. This was also a major introduction to customer management.`}
            CustIcon={TheatersIcon} />
    );
}

export default HarkinsTl;