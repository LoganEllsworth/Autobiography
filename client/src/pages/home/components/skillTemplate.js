import { Paper, Typography } from "@mui/material";

const SkillTemplate = ({ data }) => {
    return (
        <Paper elevation={1} className={'innerPaperTag'}>
            <Typography variant='h6'>{data}</Typography>
        </Paper>
    )
}

export default SkillTemplate;