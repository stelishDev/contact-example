import { Table } from 'antd';

const columns = [
  {
    title: 'Field 1',
    dataIndex: 'field1',
    key: 'field1',
  },
  {
    title: 'Field 2',
    dataIndex: 'field2',
    key: 'field2',
  },
  {
    title: 'Field 3',
    dataIndex: 'field3',
    key: 'field3',
  },
];

export type GeneralUserTableData = {
  field1: string;
  field2: string;
  field3: string;
};

export type GeneralUserTableProps = {
  data: GeneralUserTableData[] | undefined;
};

export const GeneralUserTable: React.FC<GeneralUserTableProps> = ({
  data,
}: GeneralUserTableProps) => {
  return <Table dataSource={data || []} columns={columns} className='max-w-[500px]'/>;
};
