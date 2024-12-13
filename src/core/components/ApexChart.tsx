import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';

type Props = {
    series: number;
    fontSizeName: string;
    fontSizeValue: string;
    color: string;
    label: string;
    labelValue: string;
    height: number;
}


export default function ApexChart({ series, fontSizeName, fontSizeValue, color, label, labelValue, height }: Props) {
    const [data] = useState({
        series: [series],
        options: {
            chart: {
                type: "radialBar",
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: fontSizeName,
                        },
                        value: {
                            fontSize: fontSizeValue,
                        },
                        total: {
                            show: true,
                            label: label,
                            formatter: () => {
                                return labelValue;
                            },
                        },
                    },
                },
            },
            labels: ["Progress"],
            colors: [color],

        },
    })
    return (
        <div >
            <div id="chart">
                <ReactApexChart
                    options={data.options as ApexOptions}
                    series={data.series}
                    type="radialBar"
                    height={height}

                />
            </div>
            <div id="html-dist"></div>
        </div>
    )
}
