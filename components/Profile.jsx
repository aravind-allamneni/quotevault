import QuoteCard from "./QuoteCard"

const Profile = ({name, data, handleEdit, handleDelete}) => {
  return (
    <section className="feed">
        <h1 className="head_text text-left">
            <span className="orange_gradient">Hi, {name}</span>
        </h1>
        <div className="mt-10 quote_layout">
            {data.map((quote) => (
                <QuoteCard
                    key={quote._id}
                    quote={quote}
                    handleEdit={() => handleEdit && handleEdit(quote)}
                    handleDelete={() => handleDelete && handleDelete(quote)}
                />
            ))}
        </div>
    </section>
  )
}
export default Profile