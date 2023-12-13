import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TimelineEvent from './timelineEvent';

const SkillsUsa = ({ onLeft }) => {
    return (
        <TimelineEvent
            onLeft={onLeft}
            subtitle={'Technical Drafting - 1st Place'}
            header={'SkillsUSA Gold Medal'}
            body={`I picked up a passion for CAD drafting from my high school engineering program quickly. I was introduced to SkillsUSA, 
            a national organization dedicated to empowering students to become skilled professionals, and I enrolled in Arizona's Technical Drafting competition.
            I came in 1st place and was offered to attend that years national competition. It was an incredible experience.`}
            CustIcon={WorkspacePremiumIcon} />
    );
}

export default SkillsUsa;