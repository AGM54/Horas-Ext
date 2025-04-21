import { CellWrapper } from "./styles"
import Text from "@components/atoms/Text"
import type { Colors } from "@theme/types"
import React from "react"

interface TableCellProps {
	content: any,
	cellKey?: any,
	fixed?: 'left' | 'right',
	width?: number,
	height?: number,
	isHovered?: boolean
	backgroundColor?: string
}

const TableCell: React.FC<TableCellProps> = (
	{ content, cellKey, fixed, width, height, isHovered = false, backgroundColor }
) => {
	// Check if content is a string or number
	const isTextContent = typeof content === 'string' || typeof content === 'number'

	return (
		<CellWrapper key={cellKey} fixed={fixed} width={width} height={height} backgroundColor={backgroundColor}>
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