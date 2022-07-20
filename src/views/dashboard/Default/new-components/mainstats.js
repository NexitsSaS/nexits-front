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
// ==============================|| DEFAULT MainStats ||============================== //

const MainStats = () => {
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
                    <Grid item xs={12} md={'100%'}>
                        <TotalGrowthBarChart isLoading={isLoading} />
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

export default MainStats;
