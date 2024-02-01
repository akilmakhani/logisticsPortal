
import React from 'react';
import { Avatar, Dropdown, Menu, Space } from 'antd';
import { UserOutlined,DownOutlined } from '@ant-design/icons';
import './Header.css'; 
import menuItems from '../../jsonData/headerMenuItems.json'; 


interface HeaderProps {
  title: string;
  avatarUrl: string;
}

const Header: React.FC<HeaderProps> = ({ title, avatarUrl }) => {
  const menu = (
    <Menu>
      {menuItems.map((item: any) => (
        <Menu.Item key={item.key}>
          {item.link ? (
            <a href={item.link}>{item.label}</a>
          ) : (
            <span>{item.label}</span>
          )}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img src="../logistics-truck.svg" alt="Logo" />
        </div>
        <h1 className="title">{title}</h1>
      </div>
      <div className="avatar-container">
      
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <span>Select Region {<DownOutlined />}</span>
          </a>
        </Dropdown>
        <Space size={16} wrap>
          <Avatar size={45} icon={<UserOutlined />} src={avatarUrl} />
        </Space>
      </div>
    </div>
  );
};

export default Header;
