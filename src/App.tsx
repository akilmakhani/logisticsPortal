
import React, { useState } from 'react';
import { Layout } from 'antd';
import Header from './components/header/Header'; 
import Sidebar from './components/sideBar/Sidebar'; 
import Dashboard from "./components/dashBoard/Dashboard";
import {  Navigate, Route, Routes, } from 'react-router-dom';



const MainComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [breadcrumbItems, setBreadcrumbItems] = useState<string[]>(['Home', 'Dashboard']);


  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const updateBreadcrumb = (newItems: string[]) => {
    setBreadcrumbItems(newItems);
  };

  return (
    <Layout>
      <Header title="Logistics" avatarUrl="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Layout>
        <Sidebar collapsed={collapsed} onCollapse={toggleCollapse} updateBreadcrumb={updateBreadcrumb} />
        <Layout>
          {/* <Dashboard /> */}
      <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/Dashboard" element={<Dashboard breadcrumbItems={breadcrumbItems} />} />
        <Route path="/Shipments" element={<Dashboard breadcrumbItems={breadcrumbItems}/>} />
        <Route path="/Inventory" element={<Dashboard breadcrumbItems={breadcrumbItems}/>} />
        <Route path="/Warehousing" element={<Dashboard breadcrumbItems={breadcrumbItems}/>} />
        <Route path="/Suppliers" element={<Dashboard breadcrumbItems={breadcrumbItems}/>} />
      </Routes>
        </Layout>
      </Layout>    
    </Layout>
  );
};

export default MainComponent;
