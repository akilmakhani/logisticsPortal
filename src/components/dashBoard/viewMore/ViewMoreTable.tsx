import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type {  TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, InputNumber, Space, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import type { InputRef } from 'antd/lib/input';



interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  occupation: string;
  education: string; 
  experience: number; 
  salary: number; 
}


type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    occupation: 'Psychologist',
    education: 'Bachelor',
    experience: 5,
    salary: 70000,
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
    occupation: 'Trader',
    education: 'Master',
    experience: 8,
    salary: 90000,
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    occupation: 'Pilot',
    education: 'Bachelor',
    experience: 10,
    salary: 120000,
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    occupation: 'Teacher',
    education: 'Master',
    experience: 6,
    salary: 80000,
  },
  {
    key: '5',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    occupation: 'Psychologist',
    education: 'Bachelor',
    experience: 5,
    salary: 70000,
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
    occupation: 'Trader',
    education: 'Master',
    experience: 8,
    salary: 90000,
  },
  {
    key: '7',
    name: 'Jim Green',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    occupation: 'Pilot',
    education: 'Bachelor',
    experience: 10,
    salary: 120000,
  },
  {
    key: '8',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    occupation: 'Teacher',
    education: 'Master',
    experience: 6,
    salary: 80000,
  },
  {
    key: '9',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    occupation: 'Psychologist',
    education: 'Bachelor',
    experience: 5,
    salary: 70000,
  },
  {
    key: '10',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
    occupation: 'Trader',
    education: 'Master',
    experience: 8,
    salary: 90000,
  },
  {
    key: '11',
    name: 'Jim Green',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    occupation: 'Pilot',
    education: 'Bachelor',
    experience: 10,
    salary: 120000,
  },
  {
    key: '12',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    occupation: 'Teacher',
    education: 'Master',
    experience: 6,
    salary: 80000,
  },
  {
    key: '13',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    occupation: 'Psychologist',
    education: 'Bachelor',
    experience: 5,
    salary: 70000,
  },
  {
    key: '14',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
    occupation: 'Trader',
    education: 'Master',
    experience: 8,
    salary: 90000,
  },
  {
    key: '15',
    name: 'Jim Green',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    occupation: 'Pilot',
    education: 'Bachelor',
    experience: 10,
    salary: 120000,
  },
  {
    key: '16',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    occupation: 'Teacher',
    education: 'Master',
    experience: 6,
    salary: 80000,
  },
  {
    key: '17',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    occupation: 'Psychologist',
    education: 'Bachelor',
    experience: 5,
    salary: 70000,
  },
  {
    key: '18',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
    occupation: 'Trader',
    education: 'Master',
    experience: 8,
    salary: 90000,
  },
  {
    key: '19',
    name: 'Jim Green',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    occupation: 'Pilot',
    education: 'Bachelor',
    experience: 10,
    salary: 120000,
  },
  {
    key: '20',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    occupation: 'Teacher',
    education: 'Master',
    experience: 6,
    salary: 80000,
  },
];




const ViewMoreTable: React.FC = () => {
  const [filteredData, setFilteredData] = useState<DataType[]>(data);

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

  const handleReset = (clearFilters: () => void,     selectedKeys: string[],
  confirm: FilterDropdownProps['confirm'],
  dataIndex: DataIndex,
  ) => {
    clearFilters();
  setSearchText('');
  setSearchedColumn('');
  setFilteredData(data);
  confirm();
  setSearchText('');
  setSearchedColumn(dataIndex);
    
  };

  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        {dataIndex === 'age' ? (
          <InputNumber
            type="number" 
            value={selectedKeys[0] as number | undefined}
            onChange={(value) => setSelectedKeys(value ? [value] : [])}
            style={{ width: 100 }}
            onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          />
        ) : (
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
        )}
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
            onClick={() => clearFilters && handleReset(clearFilters,selectedKeys as string[], confirm, dataIndex)}
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
        ?.toString()
        ?.toLowerCase()
        ?.includes((value as string)),
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
      width: '20%',
      sorter: (a, b) => a.name.localeCompare(b.name),
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '10%',
      sorter: (a: { age: number }, b: { age: number }) => a.age - b.age,
      ...getColumnSearchProps('age'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '20%',
      sorter: (a, b) => a.address.localeCompare(b.address),
      ...getColumnSearchProps('address'),
    },
    {
      title: 'Occupation',
      dataIndex: 'occupation',
      key: 'occupation',
      width: '15%',
      sorter: (a, b) => a.occupation.localeCompare(b.occupation),
      ...getColumnSearchProps('occupation'),
    },
    {
      title: 'Education',
      dataIndex: 'education',
      key: 'education',
      width: '15%',
      sorter: (a, b) => a.education.localeCompare(b.education),
      ...getColumnSearchProps('education'),
    },
    {
      title: 'Experience (Years)',
      dataIndex: 'experience',
      key: 'experience',
      width: '20%',
      sorter: (a, b) => a.experience - b.experience,
      ...getColumnSearchProps('experience'),
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
      width: '10%',
      sorter: (a, b) => a.salary - b.salary,
      ...getColumnSearchProps('salary'),
    },
  ];


  return (
  <Table
   columns={columns}
   dataSource={filteredData} 
   size="middle"

   footer={() => (
    <div style={{ textAlign: 'right', paddingRight: 20 }}>
      <b>Total Data:</b> {filteredData.length}
    </div>
    )}
  />
  );
};

export default ViewMoreTable;