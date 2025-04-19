import React, { useState } from "react";
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
import { TableRowContainer } from "@components/molecules/TableRow/styles";
import { useTheme } from "@emotion/react";

export interface TableProps<T> {
    headers: string[]
    data: T[]
    onRowPress: (item: T, index?: number) => void
    getRowValues: (item: T, index: number) => React.ReactNode[];
    cellWidth?: number;
    cellHeight?: number;
    maxHeight?: number | string;
}

function Table<T>({
    headers,
    data,
    onRowPress,
    getRowValues,
    cellWidth,
    cellHeight=50,
    maxHeight='90vh',
}: TableProps<T>): React.ReactElement {
    if (headers.length < 3) {
        // If fewer than 3 columns, render a regular table
        return renderRegularTable({ headers, data, onRowPress, getRowValues, cellWidth, cellHeight, maxHeight });
    }

    // Track which row is currently being hovered
    const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);

    return (
        <TableWrapper>
            <ScrollableColumns maxHeight={maxHeight}>
                <StyledTable>
                    <thead>
                        <tr>
                            {headers.map((header, idx) => {
                                // First header
                                if (idx === 0) {
                                    return (
                                        <FixedHeaderLeft 
                                            key={`header-${idx}`} 
                                            style={{ 
                                                width: cellWidth,
                                                height: cellHeight
                                            }}
                                        >
                                            <Text variant="body" color="primaryDark" textAlign="center">{header}</Text>
                                        </FixedHeaderLeft>
                                    );
                                }
                                // Last header
                                if (idx === headers.length - 1) {
                                    return (
                                        <FixedHeaderRight 
                                            key={`header-${idx}`} 
                                            style={{ 
                                                width: cellWidth,
                                                height: cellHeight
                                            }}
                                        >
                                            <Text variant="body" color="primaryDark" textAlign="center">{header}</Text>
                                        </FixedHeaderRight>
                                    );
                                }
                                // Middle headers
                                return (
                                    <TableHeader 
                                        key={`header-${idx}`} 
                                        style={{ 
                                            width: cellWidth,
                                            height: cellHeight
                                        }}
                                    >
                                        <Text variant="body" color="primaryDark" textAlign="center">{header}</Text>
                                    </TableHeader>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, rowIndex) => {
                            const values = getRowValues(item, rowIndex);
                            const isOdd = rowIndex % 2 !== 0;
                            const isRowHovered = hoveredRowIndex === rowIndex;
                            const theme = useTheme()
                            const backgroundColor = isOdd ? theme.colors.G1 : theme.colors.white
                            // Create an array of cells with fixed positioning for first and last
                            const cells = values.map((value, colIndex) => {
                                // First cell (left fixed)
                                if (colIndex === 0) {
                                    return (
                                        <TableCell 
                                            key={`cell-${rowIndex}-${colIndex}`}
                                            content={value}
                                            fixed="left"
                                            width={cellWidth}
                                            height={cellHeight}
                                            isHovered={isRowHovered}
                                        />
                                    );
                                }
                                
                                // Last cell (right fixed)
                                if (colIndex === values.length - 1) {
                                    return (
                                        <TableCell 
                                            key={`cell-${rowIndex}-${colIndex}`}
                                            content={value}
                                            fixed="right"
                                            width={cellWidth}
                                            height={cellHeight}
                                            isHovered={isRowHovered}
                                            backgroundColor={backgroundColor}
                                        />
                                    );
                                }
                                
                                // Middle cells
                                return (
                                    <TableCell 
                                        key={`cell-${rowIndex}-${colIndex}`}
                                        content={value}
                                        width={cellWidth}
                                        height={cellHeight}
                                        isHovered={isRowHovered}
                                    />
                                );
                            });
                            
                            return (
                                <TableRowContainer
                                    key={`row-${rowIndex}`}
                                    backgroundColor={backgroundColor}
                                    onClick={() => onRowPress(item, rowIndex)}
                                    onMouseEnter={() => setHoveredRowIndex(rowIndex)}
                                    onMouseLeave={() => setHoveredRowIndex(null)}
                                >
                                    {cells}
                                </TableRowContainer>
                            );
                        })}
                    </tbody>
                </StyledTable>
            </ScrollableColumns>
        </TableWrapper>
    );
}

// Helper function for the regular table (used when there are fewer than 3 columns)
function renderRegularTable<T>({ headers, data, onRowPress, getRowValues, cellWidth, cellHeight, maxHeight }: TableProps<T>) {
    return (
        <TableWrapper>
            <ScrollableColumns maxHeight={maxHeight}>
                <StyledTable>
                    <thead>
                        <tr>
                            {headers.map((header, idx) => (
                                <TableHeader 
                                    key={idx} 
                                    style={{ 
                                        width: cellWidth,
                                        height: cellHeight
                                    }}
                                >
                                    <Text variant="body" color="primaryDark">{header}</Text>
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
                                    cellHeight={cellHeight}
                                    cellWidth={cellWidth}
                                />
                            );
                        })}
                    </tbody>
                </StyledTable>
            </ScrollableColumns>
        </TableWrapper>
    );
}

export default Table