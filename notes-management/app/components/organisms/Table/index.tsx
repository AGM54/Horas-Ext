import TableRow from "@components/molecules/TableRow";
import React from "react";
import { TableHeader, TableWrapper } from "./styles";
import Text from "@components/atoms/Text";

export interface TableProps<T> {
    headers : string[]
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
    return(
        <TableWrapper>
            <thead>
                <tr>
                {headers.map((header, idx) => (
                    <TableHeader key={idx}>
                        <Text variant={"body"}>
                            {header}
                        </Text>
                    </TableHeader>
                ))}
                </tr>
            </thead>
            <tbody>
            {data.map((item, index) => {
                const values = getRowValues(item, index);
                return (
                    <TableRow values={values} key={index} onClick={() => onRowPress(item, index)}/>
                )
            })}
            </tbody>
        </TableWrapper>
    )
}

export default Table