import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;


const NavBar = () => {
    return (

        <Header style={{ padding: 0, display: 'flex', alignItems: 'center', backgroundColor: "white", borderBottom: '1px solid gray ', borderRadius: '5px' }}>
            <div className="w-1/6  text-2xl font-bold h-full flex items-center  rounded-[5px]  justify-center">Linkes Admin </div>
            <div className="w-2/3 h-full bg-red-500"></div>
            <div className="w-1/6 h-full bg-blue-500"></div>
        </Header>


    )
}

export default NavBar