import { Chart } from "react-google-charts";

const GeoMonthChart = ({ chartMonthData }) => {
    return (
        <div className="className='w-full h-80'">
            <Chart
                chartEvents={[
                    {
                        eventName: "select",
                        callback: ({ chartWrapper }) => {
                            const chart = chartWrapper.getChart();
                            const selection = chart.getSelection();
                            if (selection.length === 0) return;
                            const region = data[selection[0].row + 1];
                            console.log("Selected : " + region);
                        },
                    },
                ]}
                chartType="GeoChart"
                width="100%"
                // height="400px"
                className="h-[336px]"
                data={chartMonthData}
            />
        </div>
    );
};

export default GeoMonthChart;