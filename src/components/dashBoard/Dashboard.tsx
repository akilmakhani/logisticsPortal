import React, {  useState } from 'react';
import { Layout, Breadcrumb,  Row, Col, Button } from 'antd';
// import navbarItems from '../../jsonData/navbarItems.json';
// import tableData from '../../jsonData/tableData.json';
import './DashBoard.css';   
import ChildChart from "../charts/ChildChart";
import ParentChart from "../charts/ParentChart";
import { QuarterlyData, MonthlyData } from "../types";
import TableView from "../TableView";
import navbarItems from '../../jsonData/navbarItems.json';
import { Link } from "react-router-dom";

interface DashboardProps {
  breadcrumbItems: string[];
  defaultSelectedKey: string;

}


      
      

const Dashboard: React.FC<DashboardProps> = ({ breadcrumbItems, defaultSelectedKey}) => {


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

  const [selectedQuarter, setSelectedQuarter] = useState<string | null>(quarterlyData[0]?.quarter);


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


  const renderBreadcrumbItem = (item: string, index: number) => {
    if (index === breadcrumbItems.length - 1) {
      return <Breadcrumb.Item key={index} className="bold-blue">{item}</Breadcrumb.Item>;
    } else {
      if (index === 0) {
        return (
          <Breadcrumb.Item key={index}>
            <Link to="/">{navbarItems[parseInt(defaultSelectedKey)-1].label}</Link>
          </Breadcrumb.Item>
        );
      } else {
        return (
          <Breadcrumb.Item key={index}>
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </Breadcrumb.Item>
        );
      }
    }
  };

 

  return (
    <Layout className="layout">
      {/* <Layout.Header className="dashboard-header">
        <Menu theme="light" className="dashboard-menu" mode="horizontal" defaultSelectedKeys={['1']}>
          {navbarItems.map(item => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {breadcrumbItems.map((item, index) => (
            <Breadcrumb.Item key={index} className={index === breadcrumbItems.length - 1 ? 'bold-blue' : ''}>{item}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <div className="view-more-button-container">
          <Button type="primary">View More</Button>
        </div>
      </Layout.Header> */}

      <Layout.Content className="dashboard-content">
      <div className="view-more-button-container">
        <Link to='/dashboard/viewmore'>
          <Button type="primary">View More</Button>
          </Link>
        </div>
        <Breadcrumb style={{ margin: '16px 0' }}>
        {breadcrumbItems.map(renderBreadcrumbItem)}

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
