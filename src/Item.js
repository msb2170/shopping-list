

export default function Item(props) {
    return (
    <>
    <li>
    {props.item}
    <span className='delete' onClick={() => props.handleDelete(props.item)}>x</span>
    </li>
    </>
    )
}