import React from 'react';
import Statistics from '../components/Statistics';

import { ArrowUpOutlined } from '@ant-design/icons';
import StatsCard from '../components/StatsCard';
import ChartPie from '../components/ChartPie';
import { Table, Space } from 'antd';



const columns = [
    {
        title: 'ID',
        dataIndex: 'key',

    },
    {
        title: 'Tài khoản bị báo cáo',
        dataIndex: 'accused',
        key: 'accused',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Tài khoản báo cáo',
        dataIndex: 'plaintiff',
        key: 'plaintiff',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Lý do',
        dataIndex: 'reason',
        key: 'reason',
    },
    {
        title: 'Thời gian ',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Trạng thái ',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Xác nhận </a>
                <a>Đơn giác</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        accused: 'John Brown',
        plaintiff: "Nguyễn Văn A",
        reason: "Brown đang dùng thông tin của tôi",
        time: "15:20|28/04/2025",
        status: 'Chờ xác nhận',

    },
    {
        key: '2',
        accused: 'Jim Green',
        plaintiff: "Nguyễn Văn B",
        reason: "Brown đang dùng thông tin của tôi",
        time: "15:20|28/04/2025",
        status: 'Chờ xác nhận',
    },
    {
        key: '3',
        accused: 'Joe Black',
        plaintiff: "Nguyễn Văn C",
        reason: "Brown đang dùng thông tin của tôi",
        time: "15:20|28/04/2025",
        status: 'Chờ xác nhận',
    },
];

const dataSta = [
    {
        name: 'Doanh thu hôm nay',
        number: 550000,
        icon: "",
        color: '#000000',
        unit: 'đ'
    },
    {
        name: 'Doanh thu tháng này ',
        number: 10000,
        icon: "",
        color: '#000080',
        unit: 'đ'
    },
    {
        // < ArrowDownOutlined />
        name: 'Tăng trưởng theo tháng',
        number: 30.49,
        icon: <ArrowUpOutlined />,
        color: '#3f8600',
        unit: '%'
    },
    {
        name: 'Số người dùng đăng ký gói ',
        number: 120000,
        icon: "",
        color: '#3333FF',
        unit: ''
    },
]

const Analytics = () => {
    return (
        <div className="w-full p-2  ">
            <Statistics data={dataSta} />
            <div className="w-full  mt-5 flex ">
                <div className="w-1/2 h-full px-3  ">
                    <div className="w-full  shadow-xl border border-gray-200 bg-white  rounded-[10px] ">
                        <h1 className='text-center text-xl my-3 font-bold'>Tỷ lệ chuyển đổi</h1>
                        <ChartPie />
                    </div>
                </div>
                <div className="w-1/2  bg-white rounded-[10px] p-2  shadow-xl ">
                    <h1 className='text-center text-xl my-3 font-bold'>Loại giao dịch</h1>
                    <div className="flex justify-between mb-5">
                        <div className="grid gap-4 grid-cols-2">
                            <div>
                                <h5 className="inline-flex items-center text-gray-500 dark:text-gray-400 font-normal mb-2">
                                    Revenue
                                </h5>
                                <p className="text-gray-900  text-2xl font-bold">42,3k</p>
                            </div>
                            <div>
                                <h5 className="inline-flex items-center text-gray-500 dark:text-gray-400 font-normal mb-2">
                                    Interest Rate
                                </h5>
                                <p className="text-gray-900  text-2xl font-bold">$5.40</p>
                            </div>
                        </div>

                    </div>
                    <StatsCard />

                </div>
            </div>
            <div className="w-[98%] mt-5 rounded-xl p-3 shadow-xl  mx-auto bg-white">
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Analytics;