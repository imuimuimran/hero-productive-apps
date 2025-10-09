import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const RatingsBarChart = ({ ratings }) => {
    const data = ratings.map((rating, index) => ({
        name: `${index + 1} Star`,
        count: rating.count,
    }));

    return (
        <div className="w-full h-[300px] mt-5">
            <h3 className="text-sm font-bold mb-3">Ratings Distribution</h3>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ top: 10, bottom: 10 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis
                        type="category"
                        dataKey="name"
                        tick={{ fontSize: 12 }}
                        width={70}
                        reversed={true}
                    />
                    <Tooltip />
                    <Bar
                        dataKey="count"
                        fill="#ff8811"
                        barSize={25}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingsBarChart;
