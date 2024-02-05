
import React, {  useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import Header from './components/header/Header'; 
import Sidebar from './components/sideBar/Sidebar'; 
import Dashboard from "./components/dashBoard/Dashboard";
import {  Navigate, Route, Routes, useLocation } from 'react-router-dom';
import navbarItems from './jsonData/navbarItems.json';
import './App.css';   
import ViewMore from "./components/dashBoard/viewMore/ViewMore";


const MainComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [breadcrumbItems, setBreadcrumbItems] = useState<string[]>(['Home', 'Dashboard']);
  const [defaultSelectedKey, setDefaultSelectedKey] = useState<string>('1'); 
  const location = useLocation();


  useEffect(() => {
    setDefaultSelectedKey('1')
  }, [breadcrumbItems]);



  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const updateBreadcrumb = (newItems: string[]) => {
    setBreadcrumbItems(newItems);
  };

  useEffect(() => {
    const path = location.pathname;
    const pathItems = path.split('/').filter(item => item);
    const newBreadcrumbItems = ['Home', ...pathItems.map(item => item.charAt(0).toUpperCase() + item.slice(1))];
    setBreadcrumbItems(newBreadcrumbItems);
  }, [location]);

  const onClick = (e: { key: any; }) => {
    setDefaultSelectedKey(e.key);
  };
  return (
    <Layout>
      <Header title="Logistics" avatarUrl="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Layout>
        <Sidebar collapsed={collapsed} onCollapse={toggleCollapse} updateBreadcrumb={updateBreadcrumb} />
        <Layout>
        <Menu theme="light" onClick={onClick} className="dashboard-menu" mode="horizontal" selectedKeys={[defaultSelectedKey]}>
          {navbarItems.map(item => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
          {/* <Dashboard /> */}
      <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard breadcrumbItems={breadcrumbItems} />} />
        <Route path="/shipments" element={<Dashboard breadcrumbItems={breadcrumbItems}/>} />
        <Route path="/inventory" element={<Dashboard breadcrumbItems={breadcrumbItems}/>} />
        <Route path="/warehousing" element={<Dashboard breadcrumbItems={breadcrumbItems}/>} />
        <Route path="/suppliers" element={<Dashboard breadcrumbItems={breadcrumbItems}/>} />
        <Route path="/dashboard/viewmore" element={<ViewMore breadcrumbItems={['Home','Dashboard', 'ViewMore']} />} />
      </Routes>
        </Layout>
      </Layout>    
    </Layout>
  );
};

export default MainComponent;
