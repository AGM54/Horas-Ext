import type React from "react"
import { TableRowContainer } from "./styles"
import TableCell from "@components/atoms/TableCell"

export interface TableRowProps {
    values: React.ReactNode[]
    key?: React.Key
    onClick?: () => void
}

const TableRow : React.FC<TableRowProps>= ({
    values,
    key,
    onClick
}) => {
    return (
        <TableRowContainer
        key={key}
        onClick={onClick}>
            {values.map((value, i) => (
                <TableCell 
                content={value}
                key={i}/>
            ))}
        </TableRowContainer>
    )
}

export default TableRow