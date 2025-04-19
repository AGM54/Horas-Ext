import React from "react";
import { 
    FixedHeaderLeft,
    FixedHeaderRight,
    ScrollableColumns, 
    StyledTable, 
    TableHeader, 
    TableWrapper 
} from "./styles";
import Text from "@components/atoms/Text";
import TableCell from "@components/atoms/TableCell";
import TableRow from "@components/molecules/TableRow";

export interface TableProps<T> {
    headers: string[]
    data: T[]
    onRowPress: (item: T, index?: number) => void
    getRowValues: (item: T, index: number) => React.ReactNode[];
}

function Table<T>({
    headers,
    data,
    onRowPress,
    getRowValues,
}: TableProps<T>): React.ReactElement {
    if (headers.length < 3) {
        // If fewer than 3 columns, render a regular table
        return renderRegularTable({ headers, data, onRowPress, getRowValues });
    }

    return (
        <TableWrapper>
            <ScrollableColumns>
                <StyledTable>
                    <thead>
                        <tr>
                            {headers.map((header, idx) => {
                                // First header
                                if (idx === 0) {
                                    return (
                                        <FixedHeaderLeft key={`header-${idx}`}>
                                            <Text variant="body">{header}</Text>
                                        </FixedHeaderLeft>
                                    );
                                }
                                // Last header
                                if (idx === headers.length - 1) {
                                    return (
                                        <FixedHeaderRight key={`header-${idx}`}>
                                            <Text variant="body">{header}</Text>
                                        </FixedHeaderRight>
                                    );
                                }
                                // Middle headers
                                return (
                                    <TableHeader key={`header-${idx}`}>
                                        <Text variant="body">{header}</Text>
                                    </TableHeader>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, rowIndex) => {
                            const values = getRowValues(item, rowIndex);
                            const isOdd = rowIndex % 2 !== 0;
                            const handleClick = () => onRowPress(item, rowIndex);
                            
                            return (
                                <tr 
                                    key={`row-${rowIndex}`} 
                                    onClick={handleClick}
                                    style={{
                                        backgroundColor: isOdd ? '#f5f5f5' : 'white',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {values.map((value, colIndex) => {
                                        // First cell in row (left fixed)
                                        if (colIndex === 0) {
                                            return (
                                                <TableCell 
                                                    key={`cell-${rowIndex}-${colIndex}`}
                                                    content={value}
                                                    fixed="left"
                                                />
                                            );
                                        }
                                        
                                        // Last cell in row (right fixed)
                                        if (colIndex === values.length - 1) {
                                            return (
                                                <TableCell 
                                                    key={`cell-${rowIndex}-${colIndex}`}
                                                    content={value}
                                                    fixed="right"
                                                />
                                            );
                                        }
                                        
                                        // Middle cells
                                        return (
                                            <TableCell 
                                                key={`cell-${rowIndex}-${colIndex}`}
                                                content={value}
                                            />
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </StyledTable>
            </ScrollableColumns>
        </TableWrapper>
    );
}

// Helper function for the regular table (used when there are fewer than 3 columns)
function renderRegularTable<T>({ headers, data, onRowPress, getRowValues }: TableProps<T>) {
    return (
        <TableWrapper>
            <StyledTable>
                <thead>
                    <tr>
                        {headers.map((header, idx) => (
                            <TableHeader key={idx}>
                                <Text variant="body">{header}</Text>
                            </TableHeader>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        const values = getRowValues(item, index);
                        const isOdd = index % 2 !== 0;
                        return (
                            <TableRow 
                                values={values} 
                                key={index} 
                                onClick={() => onRowPress(item, index)}
                                isOdd={isOdd}
                            />
                        );
                    })}
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
}

export default Table