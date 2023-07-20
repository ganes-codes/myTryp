import { Box } from '@chakra-ui/react';
import DataTable from '../components/DataTable';
import { data } from 'autoprefixer';

// const data: never[] = [
const sampleData: SampleRecord[] = [
  {
    timestamp: '2023-07-20 10:00:00',
    purchaseId: 1001,
    mail: 'john.doe@example.com',
    name: 'John Doe',
    source: 'Website',
    status: 'Pending',
  },
  {
    timestamp: '2023-07-20 12:30:15',
    purchaseId: 1002,
    mail: 'jane.smith@example.com',
    name: 'Jane Smith',
    source: 'Mobile App',
    status: 'Completed',
  },
  {
    timestamp: '2023-07-20 14:45:22',
    purchaseId: 1003,
    mail: 'sam.johnson@example.com',
    name: 'Sam Johnson',
    source: 'In-Store',
    status: 'Shipped',
  },
  {
    timestamp: '2023-07-20 16:10:55',
    purchaseId: 1004,
    mail: 'mary.brown@example.com',
    name: 'Mary Brown',
    source: 'Website',
    status: 'Pending',
  },
  {
    timestamp: '2023-07-20 18:20:30',
    purchaseId: 1005,
    mail: 'robert.lewis@example.com',
    name: 'Robert Lewis',
    source: 'In-Store',
    status: 'Shipped',
  },
  {
    timestamp: '2023-07-21 09:30:40',
    purchaseId: 1006,
    mail: 'susan.wilson@example.com',
    name: 'Susan Wilson',
    source: 'Mobile App',
    status: 'Completed',
  },
  {
    timestamp: '2023-07-21 11:05:18',
    purchaseId: 1007,
    mail: 'michael.harris@example.com',
    name: 'Michael Harris',
    source: 'Website',
    status: 'Pending',
  },
  {
    timestamp: '2023-07-21 14:15:25',
    purchaseId: 1008,
    mail: 'linda.miller@example.com',
    name: 'Linda Miller',
    source: 'In-Store',
    status: 'Shipped',
  },
  {
    timestamp: '2023-07-21 16:55:30',
    purchaseId: 1009,
    mail: 'william.jones@example.com',
    name: 'William Jones',
    source: 'Website',
    status: 'Pending',
  },
  {
    timestamp: '2023-07-21 19:30:45',
    purchaseId: 1010,
    mail: 'jessica.clark@example.com',
    name: 'Jessica Clark',
    source: 'Mobile App',
    status: 'Completed',
  },
  {
    timestamp: '2023-07-22 09:40:22',
    purchaseId: 1011,
    mail: 'thomas.anderson@example.com',
    name: 'Thomas Anderson',
    source: 'In-Store',
    status: 'Shipped',
  },
  {
    timestamp: '2023-07-22 12:15:33',
    purchaseId: 1012,
    mail: 'emily.rodriguez@example.com',
    name: 'Emily Rodriguez',
    source: 'Website',
    status: 'Pending',
  },
  {
    timestamp: '2023-07-22 14:30:40',
    purchaseId: 1013,
    mail: 'daniel.nguyen@example.com',
    name: 'Daniel Nguyen',
    source: 'Mobile App',
    status: 'Completed',
  },
  {
    timestamp: '2023-07-22 16:20:18',
    purchaseId: 1014,
    mail: 'michelle.wilson@example.com',
    name: 'Michelle Wilson',
    source: 'Website',
    status: 'Pending',
  },
  {
    timestamp: '2023-07-22 18:50:25',
    purchaseId: 1015,
    mail: 'ryan.mitchell@example.com',
    name: 'Ryan Mitchell',
    source: 'In-Store',
    status: 'Shipped',
  },
  {
    timestamp: '2023-07-23 09:55:30',
    purchaseId: 1016,
    mail: 'sophia.nguyen@example.com',
    name: 'Sophia Nguyen',
    source: 'Mobile App',
    status: 'Completed',
  },
  {
    timestamp: '2023-07-23 11:40:22',
    purchaseId: 1017,
    mail: 'jackson.rogers@example.com',
    name: 'Jackson Rogers',
    source: 'Website',
    status: 'Pending',
  },
  {
    timestamp: '2023-07-23 14:20:35',
    purchaseId: 1018,
    mail: 'olivia.green@example.com',
    name: 'Olivia Green',
    source: 'In-Store',
    status: 'Shipped',
  },
  {
    timestamp: '2023-07-23 16:45:40',
    purchaseId: 1019,
    mail: 'ethan.brown@example.com',
    name: 'Ethan Brown',
    source: 'Website',
    status: 'Pending',
  },
  {
    timestamp: '2023-07-23 19:00:55',
    purchaseId: 1020,
    mail: 'ava.cooper@example.com',
    name: 'Ava Cooper',
    source: 'Mobile App',
    status: 'Completed',
  },
];
// ];

const HomePage: React.FC = () => {
  return (
    <Box>
      <DataTable data={data} />
    </Box>
  );
};

export default HomePage;
