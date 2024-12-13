import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";


export default function GroupedBarChart() {

    const [data] = useState(
        {

            series: [
                {
                    data: [44, 55, 41, 64, 22, 43, 21, 33, 56, 22, 14, 25],
                    color: "#238781"
                },
                {
                    data: [53, 32, 33, 52, 13, 44, 32, 45, 34, 23, 12, 34],
                    color: "#55aba6"
                }

            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 430
                },
                plotOptions: {
                    bar: {
                        horizontal: false,

                        dataLabels: {
                            position: 'top',
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    offsetX: -6,
                    style: {
                        fontSize: '12px',
                        colors: ['#fff']
                    }
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                },
                tooltip: {
                    shared: true,
                    intersect: false
                },
                xaxis: {
                    categories: ['Yan', "Fev", "Apr", 'Mar', "May", "Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek"],
                },
            },


        })


    return (
        <div>
            <div id="chart">
                <ReactApexChart options={data.options as ApexOptions} series={data.series} type="bar" height={350} />
            </div>
            <div id="html-dist" ></div>
        </div>
    )
}



