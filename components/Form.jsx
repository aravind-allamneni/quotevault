import Link from "next/link"

const Form = ({ type, quote, setQuote, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="green_gradient">
        {type} Post
        </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing quotes with the world, and
        let your inspiration spread across to others.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        {/* quote text */}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your Quote
          </span>
          <textarea
            value={quote.text}
            onChange={(e) => setQuote({
              ...quote,
              text: e.target.value
            })}
            placeholder="Write your quote here"
            required
            className="form_textarea"
          />
        </label>
        {/* author */}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Author of Quote{'  '}
            <span className="font-normal">(#life, #happiness, #duty)</span>
          </span>
          <input
            value={quote.author}
            onChange={(e) => setQuote({
              ...quote,
              author: e.target.value
            })}
            placeholder="Author of the Quote"
            required
            className="form_input"
          />
        </label>
        {/* tag */}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag{'  '}
            <span className="font-normal">(#life, #happiness, #duty)</span>
          </span>
          <input
            value={quote.tag}
            onChange={(e) => setQuote({
              ...quote,
              tag: e.target.value
            })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-green-500 text-white rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}
export default Form