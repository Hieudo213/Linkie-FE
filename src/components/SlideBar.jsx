import React, { useState } from 'react';

import { Layout, Menu, theme } from 'antd';
import { FaFlag, FaUsers } from 'react-icons/fa';
import { BiSolidPieChartAlt2 } from 'react-icons/bi';
import { FaChartColumn } from 'react-icons/fa6';
const { Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const item = [
    getItem('Dashboard', '1', <BiSolidPieChartAlt2 />),
    getItem('Users', 'sub1', <FaUsers />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Reports', 'sub2', <FaFlag />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Analytics', '9', <FaChartColumn />),
];
const SlideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Sider className='bg-white' width={"16.666666%"} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}  >
                <Menu className='bg-white' defaultSelectedKeys={['1']} mode="inline" items={item} />
            </Sider>

        </>


    )
}

export default SlideBar