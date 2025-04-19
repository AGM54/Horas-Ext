import { CellWrapper } from "./styles"

interface TableCellProps {
    content: any,
    key?: any
}
const TableCell : React.FC<TableCellProps> = (
    {content , key}
) => {
    return(
    <CellWrapper key={key}>
        {content}
    </CellWrapper>)
}

export default TableCell