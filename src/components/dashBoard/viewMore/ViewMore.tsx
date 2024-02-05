
import React from 'react';
import { Breadcrumb, Layout } from "antd";
import ViewMoreTable from "./ViewMoreTable";
import { Link } from "react-router-dom";

interface ViewMoreProps {
  breadcrumbItems: string[];
}

const ViewMore: React.FC<ViewMoreProps> = ({ breadcrumbItems }) => {
  const renderBreadcrumbItem = (item: string, index: number) => {
    if (index === breadcrumbItems.length - 1) {
      return <Breadcrumb.Item key={index} className="bold-blue">{item}</Breadcrumb.Item>;
    } else {
      if (index === 0) {
        return (
          <Breadcrumb.Item key={index}>
            <Link to="/">Home</Link>
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
    <>
     <Layout.Content className="dashboard-content">
        <Breadcrumb style={{ margin: '16px 0' }}>
        {breadcrumbItems.map(renderBreadcrumbItem)}
        </Breadcrumb>
    <ViewMoreTable />
    </Layout.Content>
    </>
  );
};

export default ViewMore;
