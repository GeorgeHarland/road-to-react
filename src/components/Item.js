const Item = ({ item }) => (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <br/>
      <span>{item.author}</span>
      <br/>
      <span>{item.num_comments}</span>
      <br/>
      <span>{item.points}</span>
    </li>
)

export default Item;