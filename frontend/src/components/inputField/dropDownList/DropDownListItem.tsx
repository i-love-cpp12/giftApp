interface DropDownListItemProps
{
    value: string,
    onClick: () => void,
    selected: boolean,
}

export default function DropDownListItem({
    value,
    onClick,
    selected = false,
}: DropDownListItemProps)
{
    return (
        <button className={`drop-down-list-item ${selected ? "selected" : ""}`} onClick={() => onClick()}>
            {value}
        </button>
    )
}