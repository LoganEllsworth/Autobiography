import WorkIcon from '@mui/icons-material/Work';
import TimelineEvent from './timelineEvent';

const SandhillsGlobal = ({ onLeft }) => {
    return (
        <TimelineEvent
            onLeft={onLeft}
            subtitle={'New Position - Software Developer'}
            header={'Sandhills Global'}
            body={`After my second year at ASU I acquired a position at Sandhills Global. It was a full stack developer role working on a product called
            Fr8Star, an online shipping platform for heavy machinery. I worked to implement features requested from shareholders, attended daily scrum meetings,
            performed code reviews, and diagnosed production level issues. It was an incredible position and I attribute the majority of my skills and abilities
            to this position.`}
            CustIcon={WorkIcon} />
    );
}

export default SandhillsGlobal;