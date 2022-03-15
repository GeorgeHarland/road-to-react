import Item from "./Item";

const List = ({ list }) => (
    <ul>
        {list.map((item) => (
        <Item item={item} />
        ))}
    </ul>
)

export default List;