import React, { useState } from 'react';
import { AiFillPieChart } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from "react-router-dom";
import { FaFlag, FaUserAlt } from 'react-icons/fa';
const { Sider } = Layout;

function getItem(label, key, icon, children) {
    // navigate(url);
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Dashboard', '1', <AiFillPieChart />),
    getItem('Users', '2', <FaUserAlt />),

    getItem('Reports', '3', <FaFlag />),
    getItem('Analytics', '4', <SiGoogleanalytics />),
    getItem('Setting', '5', <IoSettings />),
];


const SlideBar = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        const url = ["/", "/users", "/report", "/analytics", "/settings"];
        navigate(url[e.key - 1]);
    };
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },


    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '90vh' }}>
            <Sider className='bg-white py-3' width={"16.666666%"} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}  >
                <div className="demo-logo-vertical" />
                <Menu onClick={handleClick} className='bg-white' defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className='h-[92vh] overflow-y-auto'>
                <Outlet />
            </Layout>
        </Layout>
    )
}

export default SlideBar