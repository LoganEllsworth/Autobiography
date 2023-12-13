import CloudIcon from '@mui/icons-material/Cloud';
import TimelineEvent from "./timelineEvent";

const AwsCert = ({ onLeft }) => {
	return (
        <TimelineEvent
            onLeft={onLeft}
            subtitle={'Certification - AWS Certified Cloud Practitioner'}
            header={'AWS Certification'}
            body={`Looking for more real world skills and experiences, I found myself learning about cloud computing. That led me to seek out
            becoming AWS certified, which is what I have done. Part of the reason I created this website, hosted on AWS, is because I wanted to
            experiment with the services and exercise the knowledge I acquired during the certification process.`}
            CustIcon={CloudIcon} />
    );
}

export default AwsCert;