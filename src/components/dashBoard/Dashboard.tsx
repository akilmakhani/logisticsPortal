import React, { useState } from 'react';
import { Layout, Breadcrumb, Menu,  Row, Col, Button } from 'antd';
import navbarItems from '../../jsonData/navbarItems.json';
// import tableData from '../../jsonData/tableData.json';
import './DashBoard.css';   
import ChildChart from "../charts/ChildChart";
import ParentChart from "../charts/ParentChart";
import { QuarterlyData, MonthlyData } from "../types";
import TableView from "../TableView";

interface DashboardProps {
  breadcrumbItems: string[];
}


      
      

const Dashboard: React.FC<DashboardProps> = ({ breadcrumbItems }) => {
  const [selectedQuarter, setSelectedQuarter] = useState<string | null>(null);

  const quarterlyData: QuarterlyData[] = [
    { quarter: '2011 Q1', productA: 100, productB: 200, productC: 300 },
    { quarter: '2011 Q2', productA: 150, productB: 250, productC: 350 },
    { quarter: '2011 Q3', productA: 100, productB: 250, productC: 350 },
    { quarter: '2011 Q4', productA: 90, productB: 250, productC: 350 },
    { quarter: '2012 Q1', productA: 80, productB: 250, productC: 350 },
    { quarter: '2012 Q2', productA: 50, productB: 250, productC: 350 },
    { quarter: '2012 Q3', productA: 200, productB: 250, productC: 350 },
    { quarter: '2012 Q4', productA: 250, productB: 250, productC: 350 },
  ];

  const monthlyData: MonthlyData = {
    '2011': {
      'Q1': {
        productA: [10, 20, 30],
        productB: [20, 30, 40],
        productC: [30, 40, 50],
      },
      'Q2': {
        productA: [15, 25, 35],
        productB: [25, 35, 45],
        productC: [35, 45, 55],
      },
      'Q3': {
        productA: [10, 20, 30],
        productB: [25, 35, 45],
        productC: [35, 45, 55],
      },
      'Q4': {
        productA: [9, 19, 29],
        productB: [25, 35, 45],
        productC: [35, 45, 55],
      },
    },
    '2012': {
      'Q1': {
        productA: [8, 18, 28],
        productB: [25, 35, 45],
        productC: [35, 45, 55],
      },
      'Q2': {
        productA: [5, 15, 25],
        productB: [25, 35, 45],
        productC: [35, 45, 55],
      },
      'Q3': {
        productA: [20, 30, 40],
        productB: [25, 35, 45],
        productC: [35, 45, 55],
      },
      'Q4': {
        productA: [25, 35, 45],
        productB: [25, 35, 45],
        productC: [35, 45, 55],
      },
    },
  };

  const handleQuarterSelect = (index: number) => {
    setSelectedQuarter(quarterlyData[index].quarter);
  };

  return (
    <Layout className="layout">
      <Layout.Header className="dashboard-header">
        <Menu theme="light" className="dashboard-menu" mode="horizontal" defaultSelectedKeys={['1']}>
          {navbarItems.map(item => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
        <div className="view-more-button-container">
          <Button type="primary">View More</Button>
        </div>
      </Layout.Header>

      <Layout.Content className="dashboard-content">
        <Breadcrumb style={{ margin: '16px 0' }}>
          {breadcrumbItems.map((item, index) => (
            <Breadcrumb.Item key={index} className={index === breadcrumbItems.length - 1 ? 'bold-blue' : ''}>{item}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
        
        <Row gutter={16}>
          <Col span={12}>
            {/* <Table 
              dataSource={tableData} 
              columns={columns}    
              pagination={{ pageSize: 10 }} 
             /> */}
             <TableView/>
          </Col>
          <Col span={12}>
            <ParentChart quarterlyData={quarterlyData} onQuarterSelect={handleQuarterSelect} />
            {selectedQuarter && <ChildChart monthlyData={monthlyData} selectedQuarter={selectedQuarter} />}
          </Col>
        </Row>
       
      </Layout.Content>
    </Layout>
  );
};

export default Dashboard;
