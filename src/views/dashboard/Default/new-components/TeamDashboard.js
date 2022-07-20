import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
// import EarningCard from './EarningCard';
// import PopularCard from './PopularCard';
import Newboxcharts from './NewBoxCharts';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from '../TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import TitleAndText from './TitleAndText';
import OrderMiniLeftCard from './OrderMiniLeftCard';
import TopBuyCard from './TopBuyCard';
import TeamCardPreview from './TeamCardPreview';
// ==============================|| DEFAULT TeamDashboard ||============================== //
function createData(name, members) {
    return { name, members };
}

const teams = [
    createData('Web development Mobil', 100),
    createData('Création logiciels', 255),
    createData('UI/UX Design', 6),
    createData('Référencement SEO / SMO', 126),
    createData('Développement Web Mobile', 13)
];
const TeamDashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            {/* {middle/main side } */}
            <Grid item xs={9}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <Newboxcharts title={'total user'} isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <Newboxcharts title={'total spent'} isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <Newboxcharts title={'orders placed'} isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <Newboxcharts title={'total licenses'} isLoading={isLoading} />
                    </Grid>
                </Grid>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={'100%'} mt={'2rem'}>
                        <TitleAndText title="Teams Category" relatedInfo="this part is mainly the dashboard for the teams" />
                    </Grid>
                    <Grid container xs={12} md={'100%'} mt={'2rem'} spacing={2} ml={0}>
                        {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
                        {/* team main cards */}
                        {teams.map((team) => (
                            <Grid item xs={4} md={'100%'}>
                                <TeamCardPreview team={`${team.members} members`} name={team.name} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={'100%'} mt={'2rem'}>
                        <TitleAndText title="All teams" relatedInfo="200 Member" />
                    </Grid>
                    <Grid item xs={12} md={'100%'} mt={'2rem'}>
                        {/* table content for multiple team views */}
                    </Grid>
                </Grid>
            </Grid>
            {/* {left side } */}

            <Grid item xs={3}>
                {/* the information component */}
                <Grid container spacing={gridSpacing}>
                    {/* approved component */}
                    <Grid item lg={12} md={6} sm={6} xs={12}>
                        <TitleAndText title={'Approved'} relatedInfo={'5 demande en cours'} />
                    </Grid>

                    <Grid item lg={12} md={6} sm={6} xs={12}>
                        {/* order miniLeftCardComponenet */}
                        <OrderMiniLeftCard />
                    </Grid>
                    {/* top buyer component */}
                    <Grid item lg={12} md={6} sm={6} xs={12}>
                        <TitleAndText title={'Top Buyer'} relatedInfo={'5 demande en cours'} />
                    </Grid>
                    <Grid item lg={12} md={6} sm={6} xs={12}>
                        {/* order miniLeftCardComponenet */}
                        <TopBuyCard />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TeamDashboard;
