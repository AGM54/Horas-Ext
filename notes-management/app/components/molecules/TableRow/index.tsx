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

const TableRow: React.FC<TableRowProps> = ({
	values,
	key,
	onClick,
	isOdd = false,
	cellHeight,
	cellWidth
}) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<TableRowContainer
			key={key}
			onClick={onClick}
			isOdd={isOdd}
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
				/>
			))}
		</TableRowContainer>
	)
}

export default TableRow