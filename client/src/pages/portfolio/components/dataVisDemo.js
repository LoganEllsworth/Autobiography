import { CircularProgress, FormControl, Grid, InputLabel, Link, MenuItem, Paper, Select, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ConstructionOutlined } from "@mui/icons-material";
import dayjs from "dayjs";

const tempData = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
]

const DataVisDemo = ({ variants, isMobile }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [earliestDate, setEarliestDate] = useState(dayjs().subtract(6, 'years'));
    const [filterType, setFilterType] = useState(null);

    useEffect(() => {
        getData();
    })

    useEffect(() => {
        getData();
    }, [earliestDate, filterType])

    const getData = async () => {
        setLoading(true);
        setData(tempData);
        setLoading(false);
    }

    return (
        <Grid item xs sx={{ width: '100%' }}>
            <motion.div
                variants={variants}
            >
                <Paper className={'basicPaper'}>
                    <Grid container direction='row'>
                        {/* <Typography variant='h4'>WIP <ConstructionOutlined/> - Data Visualization Demo</Typography> */}
                        <Typography variant='subtitle1'>More Coming Soon... in the meantime, check it out here:
                            <Link target="_blank" href={'https://docs.google.com/document/d/e/2PACX-1vTl9CD7aS1BNgubXk1ugr8xkq03qdqclL10JolcAF8DXjT7ibYHbk5BDl9Dw7yJ7JLzEg3_uPocRXPR/pub'}>
                                <Typography variant='subtitle1'>Google Portfolio</Typography>
                            </Link>
                        </Typography>
                    </Grid>
                    {/* <Grid container direction='row' spacing={2} justifyContent={'space-around'}>
                        <Grid item xs={12} lg={6}>
                            <Typography variant='subtitle1' textAlign={'center'} padding={2}>
                                During my time at Sandhills, I had the opportunity to create a new data visualization dashboard for users. I had the freedom to select the resources
                                of my choosing and found Recharts. It is a free, open source DV package that I enjoyed using.
                            </Typography>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                                <Select
                                    id="demo-simple-select-label"
                                    value={filterType}
                                    label={"Filter"}
                                    onChange={e => setFilterType(e.target.value)}
                                    sx={{ margin: 1 }}
                                >
                                    <MenuItem value={"skills"}>Skills</MenuItem>
                                    <MenuItem value={"experience"}>Positions</MenuItem>
                                    <MenuItem value={"projects"}>Projects</MenuItem>
                                </Select>
                            </FormControl>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Basic date picker" value={earliestDate} onChange={setEarliestDate} sx={{ margin: 1 }} />
                            </LocalizationProvider>
                        </Grid>
                        <Grid container xs={12} lg={6} justifyContent={'center'}>
                            {!loading ? <LineChart
                                width={isMobile ? 400 : 600}
                                height={350}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                            : <CircularProgress />}
                        </Grid>
                    </Grid> */}
                </Paper>
            </motion.div>
        </Grid>
    );
}

export default DataVisDemo;