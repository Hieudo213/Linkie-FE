import React from 'react'

import { Space, Table, Tag } from 'antd';

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

function Report() {
  return (
    <>
      <h1 className='mx-5 text-[16px] font-bold mt-5'> Danh sách báo cáo</h1>
      <div className="w-[98%] mt-2  mx-auto  bg-white  p-2  rounded-[10px] border border-gray-200 shadow-xl">

        <Table columns={columns} dataSource={data} />
      </div>
    </>

  )
}

export default Report