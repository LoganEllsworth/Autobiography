import TheatersIcon from '@mui/icons-material/Theaters';
import TimelineEvent from './timelineEvent';

const HarkinsTm = ({ onLeft }) => {
    return (
        <TimelineEvent
            onLeft={onLeft}
            subtitle={'New Job - Team Member'}
            header={'Harkins Theaters'}
            body={`When I turned 16 I got my first job as a Team Member with Harkins Theaters. I worked as an usher, box office attendant, and in concession sales,
            taking on any leadership opportunities I could. I quickly fell in love with both the culture and the position, and worked to grow within the company.`}
            CustIcon={TheatersIcon} />
    );
}

export default HarkinsTm;