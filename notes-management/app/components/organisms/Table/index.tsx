import TableRow from "@components/molecules/TableRow";
import React from "react";
import { 
    FixedColumn, 
    FirstColumnCell, 
    LastColumnCell, 
    ScrollableColumns, 
    StyledTable, 
    TableHeader, 
    TableWrapper 
} from "./styles";
import Text from "@components/atoms/Text";
import TableCell from "@components/atoms/TableCell";

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
            {/* First column (fixed) */}
            <FixedColumn>
                <StyledTable>
                    <thead>
                        <tr>
                            <TableHeader>
                                <Text variant="body">{headers[0]}</Text>
                            </TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            const values = getRowValues(item, index);
                            return (
                                <tr key={`first-${index}`} onClick={() => onRowPress(item, index)}>
                                    <FirstColumnCell>{values[0]}</FirstColumnCell>
                                </tr>
                            );
                        })}
                    </tbody>
                </StyledTable>
            </FixedColumn>

            {/* Middle columns (scrollable) */}
            <ScrollableColumns>
                <StyledTable>
                    <thead>
                        <tr>
                            {headers.slice(1, -1).map((header, idx) => (
                                <TableHeader key={`middle-${idx}`}>
                                    <Text variant="body">{header}</Text>
                                </TableHeader>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            const values = getRowValues(item, index);
                            return (
                                <tr key={`middle-${index}`} onClick={() => onRowPress(item, index)}>
                                    {values.slice(1, -1).map((value, i) => (
                                        <TableCell 
                                            content={value} 
                                            key={`cell-${i}`} 
                                        />
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </StyledTable>
            </ScrollableColumns>

            {/* Last column (fixed) */}
            <FixedColumn>
                <StyledTable>
                    <thead>
                        <tr>
                            <TableHeader>
                                <Text variant="body">{headers[headers.length - 1]}</Text>
                            </TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            const values = getRowValues(item, index);
                            return (
                                <tr key={`last-${index}`} onClick={() => onRowPress(item, index)}>
                                    <LastColumnCell>{values[values.length - 1]}</LastColumnCell>
                                </tr>
                            );
                        })}
                    </tbody>
                </StyledTable>
            </FixedColumn>
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
                        return (
                            <TableRow values={values} key={index} onClick={() => onRowPress(item, index)} />
                        );
                    })}
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
}

export default Table