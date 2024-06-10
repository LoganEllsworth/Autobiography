import WorkIcon from '@mui/icons-material/Work';
import TimelineEvent from './timelineEvent';

const HarkinsAm = ({ onLeft }) => {
    return (
        <TimelineEvent
            onLeft={onLeft}
            subtitle={'Promotion - Assistant Manager'}
            header={'Harkins Theaters Promotion'}
            body={`After the brief global 2020 hiatus, the theaters were back in business and I was ready. The promotion to Assistant Manager came with
            a variety of different job functions and responsibilities. My core responsibilities now included digital content management, book keeping, hiring,
            onboarding, inventory management, and extensive customer management. I had been working towards this position since I started as a Team Member and I was
            excited to see the hard work pay off.`}
            CustIcon={WorkIcon} />
    );
}

export default HarkinsAm;