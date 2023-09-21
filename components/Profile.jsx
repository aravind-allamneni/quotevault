import QuoteCard from "./QuoteCard"

const Profile = ({name, data, handleEdit, handleDelete}) => {
  return (
    <section className="w-full">
        <h1 className="head_text text-left">
            <span className="orange_gradient">Hi, {name}</span>
            <div className="mt-10 quote_layout flex">
                {data.map((quote) => (
                    <QuoteCard
                        key={quote._id}
                        quote={quote}
                        handleEdit={() => handleEdit && handleEdit(quote)}
                        handleDelete={() => handleDelete && handleDelete(quote)}
                    />
                ))}
            </div>
        </h1>
    </section>
  )
}
export default Profile