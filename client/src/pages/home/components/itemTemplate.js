import { Grid, Link, Paper, Typography } from "@mui/material";

const ItemTemplate = ({data, isMobile}) => {
    return (
        <Paper elevation={1} className={'innerPaper'}>
            <Grid container spacing={1} sx={{ display: 'flex' }}>
                <Grid item container spacing={isMobile ? 0 : 1} sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <Grid item xs={12} lg={'auto'} >
                        {data.titleUrl ?
                            <Link target="_blank" href={data.titleUrl}><Typography variant='h6' sx={{ fontWeight: 'bold' }}>{data.title}</Typography></Link> :
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{data.title}</Typography>
                        }
                    </Grid>
                    <Grid item sx={!isMobile ? { display: 'flex', flexDirection: 'row', alignItems: 'center' } : null}>
                        <Typography variant='subtitle1'>{data.company}</Typography>
                    </Grid>
                    <Grid item xs sx={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right' }}>
                        <Typography variant='body2' color='text.secondary' sx={{ alignSelf: 'center' }}>{data.dateRange}</Typography>
                    </Grid>
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