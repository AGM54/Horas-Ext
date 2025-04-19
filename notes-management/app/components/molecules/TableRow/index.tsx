import type React from "react"
import { TableRowContainer } from "./styles"
import TableCell from "@components/atoms/TableCell"

export interface TableRowProps {
    values: React.ReactNode[]
    key?: React.Key
    onClick?: () => void
    isOdd?: boolean
}

const TableRow : React.FC<TableRowProps>= ({
    values,
    key,
    onClick,
    isOdd = false
}) => {
    return (
        <TableRowContainer
        key={key}
        onClick={onClick}
        isOdd={isOdd}>
            {values.map((value, i) => (
                <TableCell 
                content={value}
                key={i}/>
            ))}
        </TableRowContainer>
    )
}

export default TableRow