import { CellWrapper } from "./styles"
import Text from "@components/atoms/Text"
import React from "react"

interface TableCellProps {
    content: any,
    key?: any,
    fixed?: 'left' | 'right' | null,
    width?: number,
    height?: number,
    isHovered?: boolean
}

const TableCell: React.FC<TableCellProps> = (
    { content, key, fixed, width, height, isHovered = false }
) => {
    // Check if content is a string or number
    const isTextContent = typeof content === 'string' || typeof content === 'number'
    
    return (
        <CellWrapper key={key} fixed={fixed} width={width} height={height}>
            {isTextContent ? (
                <Text 
                    variant="body" 
                    color={isHovered ? "white" : "primaryDark"}
                    textAlign="center"
                >
                    {content}
                </Text>
            ) : (
                content
            )}
        </CellWrapper>
    )
}

export default TableCell