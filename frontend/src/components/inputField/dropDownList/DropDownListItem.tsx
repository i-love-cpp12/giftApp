interface DropDownListItemProps
{
    label: string,
    onClick: () => void,
    selected: boolean,
}

export default function DropDownListItem({
    label,
    onClick,
    selected = false,
}: DropDownListItemProps)
{
    return (
        <button type="button" className={`drop-down-list-item ${selected ? "selected" : ""}`} onClick={() => onClick()}>
            {label}
        </button>
    )
}