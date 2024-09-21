import { Chart } from "react-google-charts";


export const data = [
    ["Country", "Popularity"],
    ["india", 500],
    ["Canada", 500],
    ["bangladesh", 500],

];

const Geo24HorseChart = ({ chart24HourseData }) => {
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
                data={chart24HourseData}
            />
        </div>
    );
};

export default Geo24HorseChart;