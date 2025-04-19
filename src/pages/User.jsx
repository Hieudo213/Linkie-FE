

import Tables from '../components/Tables';
import ToolBar from '../components/ToolBar';
import React, { useState } from 'react';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        image: "https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg ",
        phone: "0123456789",
        gender: "Nữ",
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        image: "https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg ",
        phone: "0123456789",
        gender: "Nam",
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        image: "https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg ",
        phone: "0123456789",
        gender: "Nam",
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        image: "https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg ",
        phone: "0123456789",
        gender: "Nữ",
        age: 99,
        address: 'Sydney No. 1 Lake Park',
    },
];

const User = () => {

    return (
        <>
            <ToolBar />
            <div className="w-full p-5">

                <Tables datas={{
                    columns: columns,
                    value: data,
                }} />

            </div>

        </>
    );
};

export default User;