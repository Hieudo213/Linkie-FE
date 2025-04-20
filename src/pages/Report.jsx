import { Avatar, Collapse, Modal, Tooltip, Form, Switch } from 'antd';
import React, { useState } from 'react';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaHeart, FaPhoneAlt, FaTransgender } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { BsFillForwardFill } from "react-icons/bs";

const content = [
  "Vũ Văn B đã giả mạo tài khoản( Ảnh , Tên , thông tin cá nhân) của tôi ",
  "Vũ Văn B có hình ảnh không đúng chuẩn mực ",

]

const Item = ({ text }) => {


  return (
    <>
      <div className="w-full mx-auto cursor-pointer  p-5  border border-gray-200  rounded-[10px] shadow-xl my-2 " >
        <div className="w-full flex items-center justify-center my-3">
          <div className='w-2/3 h-[6rem] flex'>
            <div className="w-1/3 h-full ">
              <div className="h-full aspect-square bg-red-400 rounded-full">
                <img src="https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg " className='w-full  h-full rounded-full' alt="" />
              </div>
              <h1 className='font-bold text-center  text-[12px] '>Vũ Văn A</h1>
            </div>
            <div className="w-1/3 flex items-center justify-center font-bold text-black">
              <BsFillForwardFill size={25} />
            </div>
            <div className="w-1/3 h-full">
              <div className="h-full aspect-square bg-red-400 rounded-full float-right">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxWqwNtonchVf6eHPiXisfmHjarvVs84QhQ&s" className='w-full  h-full rounded-full' alt="" />
              </div>
              <h1 className='font-bold text-center  text-[12px] '>Vũ Văn B</h1>
            </div>
          </div>
        </div>
        <div className="w-full mt-6   ">
          <p className='text-[11px] text-center'>{text}</p>
        </div>
      </div>
    </>
  );
}

const UserHack = () => {

  return (
    <>
      <div className="w-full cursor-pointer  aspect-square  rounded-[5px]  border  border-gray-200   flex justify-center items-center hover:shadow-xl">
        <div>
          <img src="https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" className='w-2/3  aspect-square rounded-full mx-auto' alt="" />
          <h1 className='text-center  mt-2'>Vũ Tiến Đạt</h1>
        </div>

      </div>

    </>
  );
}

const Report = () => {
  const [open1, getOpen1] = useState(false);
  const [open2, getOpen2] = useState(false);
  const [open3, getOpen3] = useState(false);
  const items = [
    {
      key: '1',
      label: 'Giả mạo tài khoản',
      children:
        <div className='w-full  grid grid-cols-3 gap-2'>
          <div onClick={() => getOpen1(true)}>
            <Item text={content[0]} />
          </div>
          <div onClick={() => getOpen1(true)}>
            <Item text={content[0]} />
          </div>
          <div onClick={() => getOpen1(true)}>
            <Item text={content[0]} />
          </div>
          <div onClick={() => getOpen1(true)}>
            <Item text={content[0]} />
          </div>
          <div onClick={() => getOpen1(true)}>
            <Item text={content[0]} />
          </div>


        </div>
      ,
    },
    {
      key: '2',
      label: 'Tài khoản chứa nội dung không phù hợp ',
      children:
        <div className='w-full  grid grid-cols-3 gap-2'>
          <div onClick={() => getOpen2(true)}>
            <Item text={content[1]} />
          </div>
          <div onClick={() => getOpen2(true)}>
            <Item text={content[1]} />
          </div>
          <div onClick={() => getOpen2(true)}>
            <Item text={content[1]} />
          </div>
          <div onClick={() => getOpen2(true)}>
            <Item text={content[1]} />
          </div>
          <div onClick={() => getOpen2(true)}>
            <Item text={content[1]} />
          </div>
          <div onClick={() => getOpen2(true)}>
            <Item text={content[1]} />
          </div>
          <div onClick={() => getOpen2(true)}>
            <Item text={content[1]} />
          </div>
        </div>
      ,
    },
    {
      key: '3',
      label: 'Tài khoản Hack',
      children:
        <div className='w-full  grid grid-cols-6 gap-2'>
          <div onClick={() => getOpen3(true)}>
            <UserHack />
          </div>
          <div onClick={() => getOpen3(true)}>
            <UserHack />
          </div>
          <div onClick={() => getOpen3(true)}>
            <UserHack />
          </div>
          <div onClick={() => getOpen3(true)}>
            <UserHack />
          </div>
          <div onClick={() => getOpen3(true)}>
            <UserHack />
          </div>
        </div >
      ,
    },
  ];



  const onChange = key => {
    console.log(key);
  };
  return (
    <div className="w-full  p-5 ">
      <Collapse items={items} defaultActiveKey={['1']} />
      {/* onOk={handleOk}  */}
      <Modal title="Giả mạo tài khoản của tôi" onCancel={() => getOpen1(false)} width={'75%'} open={open1}>
        <hr />
        <div className="w-full flex h-auto ">
          <div className="w-1/2  h-full border-r border-gray-400 ">
            <div className='w-full   flex'>
              <div className="w-1/2  aspect-square mx-auto  my-2 flex justify-center items-center">
                <img src="https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg " className='w-3/4 mx-auto   aspect-square rounded-full ' alt="" />
              </div>
              <div className='w-1/2 py-4  '>
                <h1 className='text-center text-xl font-bold my-5'>Vũ Văn A</h1>
                <h1 className=' px-5 flex  justify-between items-center'>
                  <span className='flex'><LiaBirthdayCakeSolid /><span className='mx-1'>25</span><span></span> Tuổi</span>
                  <span className='flex'><FaTransgender className='mx-1' />Nam</span ></h1>
                <h1 className=' px-5 flex my-2'>
                  <FaPhoneAlt className='m-1 mr-2 ' />
                  0987654321</h1>
                <h1 className='flex px-5 my-3'><FaLocationDot className='m-1 mr-2 ' />Hà Nội</h1>
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

              </div>
            </div>

          </div>
          <div className="w-1/2 h-full p-1 ">
            <div className='w-full  flex'>
              <div className="w-1/2 p-0  aspect-square mx-auto  my-2  flex justify-center items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxWqwNtonchVf6eHPiXisfmHjarvVs84QhQ&s" className=' w-3/4 mx-auto aspect-square rounded-full ' alt="" />
              </div>
              <div className='w-1/2 py-4  '>
                <h1 className='text-center text-xl font-bold my-5'>Vũ Văn B</h1>
                <h1 className=' px-5 flex  justify-between items-center'>
                  <span className='flex'><LiaBirthdayCakeSolid /><span className='mx-1'>18</span><span></span> Tuổi</span>
                  <span className='flex'><FaTransgender className='mx-1' />Nam</span ></h1>
                <h1 className=' px-5 flex my-2'>
                  <FaPhoneAlt className='m-1 mr-2 ' />
                  01234546789</h1>
                <h1 className='flex px-5 my-3'><FaLocationDot className='m-1 mr-2 ' />Hải Dương</h1>
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

          </div>
        </div>

      </Modal >

      <Modal title="Tài khoản chứa nội dung không phù hợp" onCancel={() => getOpen2(false)} width={'75%'} open={open2}>
        <hr />
        <div className="w-full flex h-auto ">
          <div className="w-1/2  h-full border-r border-gray-400 ">
            <div className='w-full   flex'>
              <div className="w-1/2  aspect-square mx-auto  my-2 flex justify-center items-center">
                <img src="https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg " className='w-3/4 mx-auto   aspect-square rounded-full ' alt="" />
              </div>
              <div className='w-1/2 py-4  '>
                <h1 className='text-center text-xl font-bold my-5'>Vũ Văn A</h1>
                <h1 className=' px-5 flex  justify-between items-center'>
                  <span className='flex'><LiaBirthdayCakeSolid /><span className='mx-1'>25</span><span></span> Tuổi</span>
                  <span className='flex'><FaTransgender className='mx-1' />Nam</span ></h1>
                <h1 className=' px-5 flex my-2'>
                  <FaPhoneAlt className='m-1 mr-2 ' />
                  0987654321</h1>
                <h1 className='flex px-5 my-3'><FaLocationDot className='m-1 mr-2 ' />Hà Nội</h1>
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

          </div>
          <div className="w-1/2 h-full p-1 ">
            <h1 className='text-[16px] font-bold text-center my-3'>Hình ảnh bị báo cáo </h1>
            <img className='mx-auto' src="data:image/jpeg;base64,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" alt="" />
            <div className="w-full p-3 px-10">
              <h1>Người tố cáo: <span>Nguyễn Văn B</span></h1>
              <p><span>Nội dung :</span>Hình ảnh không đúng chuẩn mực. Vi phạm nguyên tắc của Linkie</p>
            </div>

          </div>
        </div>

      </Modal >
      <Modal title="Thông tin chi tiết" width={'45vw'} open={open3} okButtonProps={{ disabled: true }} onCancel={() => getOpen3(false)}>
        <hr />
        <div className='w-full  flex'>
          <div className="w-1/2 p-1 aspect-square mx-auto rounded-full border border-gray-200 my-2">
            <img src="https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg" className='rounded-full ' alt="" />
          </div>
          <div className='w-1/2 py-4  '>
            <h1 className='text-center text-xl font-bold my-5'>Vũ Tiến Đạt</h1>
            <h1 className=' px-5 flex  justify-between items-center'>
              <span className='flex'><LiaBirthdayCakeSolid /><span className='mx-1'>22</span><span></span> Tuổi</span>
              <span className='flex'><FaTransgender className='mx-1' />Nam</span ></h1>
            <h1 className=' px-5 flex my-2'>
              <FaPhoneAlt className='m-1 mr-2 ' />
              0123456789</h1>
            <h1 className='flex px-5 my-3'><FaLocationDot className='m-1 mr-2 ' />Hà Nội</h1>
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



      </Modal>
    </div >
  );
};

export default Report;