import MapIcon from '@mui/icons-material/Map';
import TimelineEvent from './timelineEvent';

const WashingtonMove = ({ onLeft }) => {
    return (
        <TimelineEvent
            onLeft={onLeft}
            subtitle={'Relocation'}
            header={'Move to Washington'}
            body={`After graduating, my partner and I had the option to move to Bellevue, Washington. Between her career opportunities, the natural beauty of the state,
                and the opportunity to explore new a new home, we made the decision to go. I have been an Arizona native my whole life, and welcomed the change (especially 
                in the climate). It was a great decision and we are thoroughly enjoying Washington.`}
            CustIcon={MapIcon} />
    );
}

export default WashingtonMove;