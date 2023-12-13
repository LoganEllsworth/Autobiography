import SchoolIcon from '@mui/icons-material/School';
import TimelineEvent from './timelineEvent';

const SandhillsGlobal = ({ onLeft }) => {
    return (
        <TimelineEvent
            onLeft={onLeft}
            subtitle={'New Position - Software Developer'}
            header={'Sandhills Global Internship'}
            body={`After my second year at ASU I acquired an internship position at Sandhills Global. I am currently a full stack developer working on a product called
            Fr8Star, an online shipping platform for heavy machinery. While I am not a full time employee, I function as such and am held to the same standards as such.
            I work to implement features requested from shareholders, attend daily scrum meetings, perform code reviews, and diagnose production level issues.
            It has been an incredible position and I attribute the majority of my skills and abilities to this position.`}
            CustIcon={SchoolIcon} />
    );
}

export default SandhillsGlobal;