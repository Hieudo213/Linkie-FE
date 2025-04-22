import React from 'react';
import Statistics from '../components/Statistics';
import { FaUser } from 'react-icons/fa';
import { HiUserGroup } from "react-icons/hi2";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import ChartPie from '../components/ChartPie';
import RevenueCard from '../components/RevenueCard';
import StatsCard from '../components/StatsCard';


const dataSta = [
    {
        name: 'User',
        number: 550000,
        icon: <FaUser />,
        color: '#000000',
        unit: ''
    },
    {
        name: 'Member',
        number: 10000,
        icon: <HiUserGroup />,
        color: '#000080',
        unit: ''
    },
    {
        name: 'Revenue',
        number: 30.49,
        icon: <ArrowUpOutlined />,
        color: '#3f8600',
        unit: '%'
    },
    {
        name: 'Interest Rate',
        number: 12.5,
        icon: < ArrowDownOutlined />,
        color: '#cf1322',
        unit: '%'
    },
]

const Dashboard = () => {
    return (
        <div className="w-full p-2  ">
            <Statistics data={dataSta} />
            <div className="w-full my-2 flex">
                <div className="w-1/3 pr-1">
                    <ChartPie />
                </div>
                <div className="w-2/3 pl-1">
                    <RevenueCard />
                </div>

            </div>

        </div>
    );
};

export default Dashboard;