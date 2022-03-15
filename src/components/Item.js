const Item = ({ title, url, author, num_comments, points}) => (
    <li>
      <span>
        <a href={url}>{title}</a>
      </span>
      <br/>
      <span>{author}</span>
      <br/>
      <span>{num_comments}</span>
      <br/>
      <span>{points}</span>
    </li>
)

export default Item;