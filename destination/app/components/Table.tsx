import { Table, Thead, Tbody, Tr, Th, Td, chakra, Box, Input, Select, Button, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface DataRow {
    timestamp: string;
    purchaseId: number;
    mail: string;
    name: string;
    source: string;
    status: string;
    [key: string]: string | number; // Index signature for dynamic properties
}


interface DataTableProps {
    data: DataRow[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
    const [filteredData, setFilteredData] = useState<DataRow[]>(data);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    useEffect(() => {
        // Filter data based on the search query
        const filtered = data.filter((item) =>
            Object.values(item).some((value) => value.toString().toLowerCase().includes(searchQuery.toLowerCase()))
        );
        setFilteredData(filtered);
    }, [data, searchQuery]);

    useEffect(() => {
        // Sort data based on the selected column and sort direction
        const sorted = [...filteredData].sort((a, b) => {
            if (!sortColumn) return 0;

            const columnA = a[sortColumn];
            const columnB = b[sortColumn];

            if (columnA < columnB) return sortDirection === 'asc' ? -1 : 1;
            if (columnA > columnB) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredData(sorted);
    }, [filteredData, sortColumn, sortDirection]);
    // ...
    const handleSort = (column: keyof DataRow) => {
        const columnString = column as string; // Convert to string
        setSortColumn(columnString);
        setSortDirection((prevSort) => (prevSort === 'asc' ? 'desc' : 'asc'));
    };
    // ...


    const handleFilterByColumn = (column: keyof DataRow, value: string) => {
        // Filter data based on the selected column and value
        const filtered = data.filter((item) => item[column].toString().toLowerCase().includes(value.toLowerCase()));
        setFilteredData(filtered);
    };

    return (
        <Box>
            <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                mb={4}
            />
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th onClick={() => handleSort('timestamp')}>Timestamp</Th>
                        <Th onClick={() => handleSort('purchaseId')}>Purchase ID</Th>
                        <Th onClick={() => handleSort('mail')}>Email</Th>
                        <Th onClick={() => handleSort('name')}>Name</Th>
                        <Th onClick={() => handleSort('source')}>Source</Th>
                        <Th onClick={() => handleSort('status')}>Status</Th>
                        {isLargerThan768 && <Th>Select</Th>}
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredData.map((item) => (
                        <Tr key={item.purchaseId}>
                            <Td>{item.timestamp}</Td>
                            <Td>{item.purchaseId}</Td>
                            <Td>{item.mail}</Td>
                            <Td>{item.name}</Td>
                            <Td>{item.source}</Td>
                            <Td>{item.status}</Td>
                            {isLargerThan768 && <Td><Button>Select</Button></Td>}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default DataTable;
