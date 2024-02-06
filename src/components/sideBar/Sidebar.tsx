
import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import menuItems from '../../jsonData/sideBarMenu.json'; 
import './Sidebar.css'; 
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
  updateBreadcrumb: (newItems: string[]) => void; 

}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse,updateBreadcrumb }) => {
  const location = useLocation();

  const [defaultSelectedKey, setDefaultSelectedKey] = useState<string>('1');

  useEffect(() => {
    const pathname = location.pathname;
    const menuItem = menuItems.find(item => `/${item.url}` === pathname);
    if (menuItem) {
      setDefaultSelectedKey(menuItem.key);
    }
  }, [location]);


  const onClick = (e: { key: any; }) => {
    setDefaultSelectedKey(e.key);
  };

  const handleMenuItemClick = (key: string) => {
    const breadcrumbItems = ['Home', menuItems.find(item => item.key === key)?.title ?? 'Dashboard'];
    updateBreadcrumb(breadcrumbItems); 
  };

  return (
    <Sider theme="light" collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ minHeight: '100vh' }}>
      <div className="sidebar-header">
        <h2>Logistics Menu</h2>
      </div>
      <Menu theme="light" onClick={onClick} selectedKeys={[defaultSelectedKey]} mode="inline">
        {menuItems.map((item: any) => (
           <Menu.Item key={item.key} icon={item.icon === 'PieChartOutlined' ? <PieChartOutlined /> : <DesktopOutlined />} onClick={() => handleMenuItemClick(item.key)}>
           <Link to={item.url}>{item.title}</Link> 
         </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
