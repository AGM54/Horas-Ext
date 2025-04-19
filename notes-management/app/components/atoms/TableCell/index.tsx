import { CellWrapper } from "./styles"
import Text from "@components/atoms/Text"
import React from "react"

interface TableCellProps {
    content: any,
    key?: any
}

const TableCell: React.FC<TableCellProps> = (
    { content, key }
) => {
    // Check if content is a string or number
    const isTextContent = typeof content === 'string' || typeof content === 'number'
    
    return (
        <CellWrapper key={key}>
            {isTextContent ? (
                <Text variant="body">{content}</Text>
            ) : (
                content
            )}
        </CellWrapper>
    )
}

export default TableCell