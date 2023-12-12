export default function Post( {post} ) {
  return (
    <div>
      <h3>{props.author} - {post.dateTime} </h3>
      <p>{props.content}</p>
    </div>
  );
}