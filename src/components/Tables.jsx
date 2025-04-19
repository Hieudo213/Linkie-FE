import React, { useState } from 'react'
import { Avatar, Form, Modal, Switch, Table, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaHeart, FaPhoneAlt, FaTransgender } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },

};
function Tables({ datas }) {

    const [opendata, Setopen] = useState({
        status: false,
        data: null
    });


    const [selectionType, setSelectionType] = useState('checkbox');
    return (
        <>
            <Table
                rowSelection={Object.assign({ type: selectionType }, rowSelection)}
                columns={datas.columns}
                dataSource={datas.value}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: () => {
                            Setopen({
                                status: true,
                                data: datas.value[rowIndex]
                            })

                        }
                    };
                }}
            />
            {opendata.status ? (<Modal title="Thông tin chi tiết" width={'45vw'} open={opendata.status} okButtonProps={{ disabled: true }} onCancel={() => Setopen({ status: false, data: null })}>
                <hr />
                <div className='w-full  flex'>
                    <div className="w-1/2 p-1 aspect-square mx-auto rounded-full border border-gray-200 my-2">
                        <img src={opendata.data.image} className='rounded-full ' alt="" />
                    </div>
                    <div className='w-1/2 py-4  '>
                        <h1 className='text-center text-xl font-bold my-5'>{opendata.data.name}</h1>
                        <h1 className=' px-5 flex  justify-between items-center'>
                            <span className='flex'><LiaBirthdayCakeSolid /><span className='mx-1'>{opendata.data.age}</span><span></span> Tuổi</span>
                            <span className='flex'><FaTransgender className='mx-1' />{opendata.data.gender}</span ></h1>
                        <h1 className=' px-5 flex my-2'>
                            <FaPhoneAlt className='m-1 mr-2 ' />
                            {opendata.data.phone}</h1>
                        <h1 className='flex px-5 my-3'><FaLocationDot className='m-1 mr-2 ' />{opendata.data.address}</h1>
                        <div className="w-5/6 mx-auto flex">
                            <span className='my-1 mr-1 flex '><FaHeart className='m-1 mr-2 ' />40 ghép đôi</span>
                            <Avatar.Group
                                max={{
                                    count: 3,
                                    style: { color: '#f56a00', backgroundColor: '#fde3cf' },
                                }}
                            >
                                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                </Tooltip>
                                <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                                <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                                <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                                <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                            </Avatar.Group>
                        </div>
                        <div className="w-full px-5  mt-9   ">
                            <Form
                                initialValues={{
                                    trangThai: true,
                                }}
                            >
                                <Form.Item label="Trạng thái" name="trangThai" valuePropName="checked">
                                    <Switch />
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>



            </Modal>) : ""}

        </>

    )
}

export default Tables