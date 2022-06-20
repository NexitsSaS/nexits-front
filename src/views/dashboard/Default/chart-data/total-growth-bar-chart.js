// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //

import { NoEncryption } from "@mui/icons-material";

const chartData = {
    height: 480,
    type: 'area',
    options: {
        stroke: {
            curve: 'smooth'
          },
        chart: {
            id: 'spline',
            stacked: true,
         
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%'
            }
        },
        xaxis: {
            type: 'category',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis:{
            show:false
        },
        legend: {
            show: false,
            fontSize: '14px',
            fontFamily: `'Roboto', sans-serif`,
            position: 'bottom',
            offsetX: 20,
            labels: {
                useSeriesColors: false
            },
            markers: {
                width: 16,
                height: 16,
                radius: 5
            },
            itemMargin: {
                horizontal: 15,
                vertical: 8
            }
        },
       
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false
        }
    },
    series: [
        {
            name: 'Investment',
            data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75]
        },
        // {
        //     name: 'Loss',
        //     data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75]
        // },
        // {
        //     name: 'Profit',
        //     data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10]
        // },
        // {
        //     name: 'Maintenance',
        //     data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0]
        // }
    ]
};
export default chartData;
