import { Grid, Link, Paper, Typography } from "@mui/material";

const ItemTemplate = ({data, isMobile}) => { //IMPLEMENT ISMOBILE
    return (
        <Paper elevation={1} className={'innerPaper'}>
            <Grid container spacing={1} sx={{ display: 'flex' }}>
                <Grid item>
                    {data.titleUrl ?
                        <Link target="_blank" href={data.titleUrl}><Typography variant='h6' sx={{ fontWeight: 'bold' }}>{data.title}</Typography></Link> :
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{data.title}</Typography>
                    }
                </Grid>
                <Grid item xs sx={{ alignItems: 'end', display: 'flex' }}>
                    <Typography variant='subtitle1' sx={{ alignSelf: 'flex-end' }}>{data.company}</Typography>
                </Grid>
                <Grid item xs={5} sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    <Typography variant='body2' color='text.secondary' sx={{ alignSelf: 'center' }}>{data.dateRange}</Typography>
                </Grid>
                {data.bullets?.map((bullet, index) =>
                    <Grid item xs={12} key={index}>
                        <Typography variant='body1'>&#x2022; {bullet}</Typography>
                    </Grid>
                )}
            </Grid>
        </Paper>
    )
}

export default ItemTemplate;