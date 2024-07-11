import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { useAppStore } from "../../appStore";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import Highschool from "./components/highschool";
import HarkinsTm from "./components/harkinsTm";
import College from "./components/college";
import HarkinsAm from "./components/harkinsAm";
import HarkinsTl from "./components/harkinsTl";
import SkillsUsa from "./components/skillsUsa";
import HighschoolGrad from "./components/highschoolGrad";
import SandhillsGlobal from "./components/sandhillsGlobal";
import AwsCert from "./components/awsCert";
import CollegeGrad from "./components/collegeGrad";
import WashingtonMove from "./components/washingtonMove";
import OpenToWork from "./components/openToWork";
import BbgVolunteer from "./components/bbgVolunteer";

//Easily add and remove events from timeline in order of appearance
const events = [{ Component: BbgVolunteer, Date: 'July 2024' }, { Component: OpenToWork, Date: 'June 2024' }, { Component: WashingtonMove, Date: 'June 2024' }, { Component: CollegeGrad, Date: 'May 2024' },
{ Component: AwsCert, Date: 'Nov 2023' }, { Component: SandhillsGlobal, Date: 'May 2022' }, { Component: HarkinsAm, Date: 'May 2021' }, { Component: College, Date: 'August 2020' },
{ Component: HighschoolGrad, Date: 'May 2020' }, { Component: HarkinsTl, Date: 'March 2019' }, { Component: HarkinsTm, Date: 'March 2018' },
{ Component: SkillsUsa, Date: 'May 2017' }, { Component: Highschool, Date: 'Aug 2016' }];

//Dynamically created TimelineItem & sets applicable className based on side of timeline. TimelineConnector is only rendered between events.
//Various adjustments for mobile
const timelineItemTemplate = (event, index, isMobile) => {
    return (
        <TimelineItem key={index}>
            <TimelineOppositeContent
                color='text.secondary'
                sx={isMobile ? { m: 'auto 0', flex: .2 } : { m: 'auto 0' }}
                variant="body2"
            >
                {event.Date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                {index !== 0 ? <TimelineConnector /> : <TimelineConnector sx={{ backgroundColor: 'transparent' }} />}
                <TimelineDot />
                {index < events.length - 1 ? <TimelineConnector /> : <TimelineConnector sx={{ backgroundColor: 'transparent' }} />}
            </TimelineSeparator>
            <TimelineContent>
                <event.Component onLeft={!isMobile && index % 2 === 0} />
            </TimelineContent>
        </TimelineItem>
    );
};

//Render the timeline
const History = () => {
    const isMobile = useAppStore();
    const cardVariants = {
        offscreen: { y: '1000%' },
        onscreen: { y: 0, transition: { type: 'spring', bounce: .05, duration: 1.5 } },
    };

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "200% 0% -50% 0%" }}
            style={{ width: '100%' }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <motion.div
                    variants={cardVariants}
                >
                    <Timeline position={isMobile ? 'right' : 'alternate-reverse'} sx={{ display: 'flex' }}>
                        {events.map((event, index) => timelineItemTemplate(event, index, isMobile))}
                    </Timeline>
                </motion.div>
            </Box>
        </motion.div>
    );
};

export default History;