const QuoteCard = ({text, author, creator, tag}) => {
  return (
    <div className="flex mt-4">
        <h1>{text}</h1>
        <h2>{author}</h2>
        <h2>{creator}</h2>
        <h3>{tag}</h3>
    </div>
  )
}
export default QuoteCard