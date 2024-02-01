import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { GetRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import type { InputRef } from 'antd/lib/input';



interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  occupation:string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    occupation: "Psychologist"
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
    occupation: "Trader"
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    occupation: "Pilot"
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    occupation: "Teacher"
  },
  {
    key: '5',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    occupation: "Psychologist"
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
    occupation: "Trader"
  },
  {
    key: '7',
    name: 'Jim Green',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    occupation: "Pilot"
  },
  {
    key: '8',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    occupation: "Teacher"
  },
  {
    key: '9',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    occupation: "Psychologist"
  },
  {
    key: '10',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
    occupation: "Trader"
  },
  {
    key: '11',
    name: 'Jim Green',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    occupation: "Pilot"
  },
  {
    key: '12',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    occupation: "Teacher"
  },
  {
    key: '13',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    occupation: "Psychologist"
  },
  {
    key: '14',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
    occupation: "Trader"
  },
  {
    key: '15',
    name: 'Jim Green',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    occupation: "Pilot"
  },
  {
    key: '16',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    occupation: "Teacher"
  },
  {
    key: '17',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    occupation: "Psychologist"
  },
  {
    key: '18',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
    occupation: "Trader"
  },
  {
    key: '19',
    name: 'Jim Green',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    occupation: "Pilot"
  },
  {
    key: '20',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    occupation: "Teacher"
  },
  {
    key: '21',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    occupation: "Teacher"
  },
];



const TableView: React.FC = () => {

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps['confirm'],
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
text      ) : (
        text
      ),
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      sorter: (a: { age: number }, b: { age: number }) => a.age - b.age,

      ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Occupation',
      dataIndex: 'occupation',
      key: 'occupation',
      width: '20%',
      sorter: (a, b) => a.occupation.length - b.occupation.length,

      ...getColumnSearchProps('age'),

    },
    
  ];

  return <Table columns={columns} dataSource={data} size="middle" />;
};

export default TableView;