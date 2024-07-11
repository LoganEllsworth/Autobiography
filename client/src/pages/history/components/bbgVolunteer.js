import LocalFlorist from '@mui/icons-material/LocalFlorist';
import TimelineEvent from "./timelineEvent";

const BbgVolunteer = ({ onLeft }) => {
	return (
        <TimelineEvent
            onLeft={onLeft}
            subtitle={'Volunteer - Bellevue Botanical Gardens'}
            header={'Garden Assistant'}
            body={`I'm thrilled to have started volunteering at the Bellevue Botanical Gardens! While I'm actively seeking new job opportunities,
                I've decided to invest my free time in something I'm passionate about - plants and gardening. This role has allowed me to become
                more connected with my community, learn more about horticulture, and develop new skills. Working alongside individuals with similar interests 
                and a variety of backgrounds has been an incredible experience I am looking forward to continuing.`}
            CustIcon={LocalFlorist} />
    );
}

export default BbgVolunteer;