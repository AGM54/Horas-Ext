import type React from "react"
import { useMemo, useState } from "react"
import { TableRowContainer } from "./styles"
import TableCell from "@components/atoms/TableCell"
import { useTheme } from "@emotion/react"

export interface TableRowProps {
    values: React.ReactNode[]
    key?: React.Key
    onClick?: () => void
    isOdd?: boolean
    cellHeight?: number
    cellWidth?: number
}

const TableRow: React.FC<TableRowProps>= ({
    values,
    key,
    onClick,
    isOdd = false,
    cellHeight,
    cellWidth
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const theme = useTheme()
    const backgroundColor = useMemo(() => isOdd ? theme.colors.G1 : theme.colors.white, [])
    return (
        <TableRowContainer
            key={key}
            onClick={onClick}
            backgroundColor={backgroundColor}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {values.map((value, i) => (
                <TableCell 
                    content={value}
                    key={i}
                    isHovered={isHovered}
                    height={cellHeight}
                    width={cellWidth}
                    backgroundColor={backgroundColor}
                />
            ))}
        </TableRowContainer>
    )
}

export default TableRow