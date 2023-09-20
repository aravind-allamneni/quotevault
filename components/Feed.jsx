"use client";

import { useState, useEffect } from "react";
import QuoteCard from "./QuoteCard";

const Feed = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const fetchQuotes = async () => {
            const response = await fetch("/api/quote")
            const data = await response.json();
            setQuotes(data);
        }
        fetchQuotes();
    }, [])

    const handleTagClick = (tag) => {
        const filteredQuotes = quotes.filter((quote) => quote.tag===tag);
        setQuotes(filteredQuotes);
    }

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }
  return (
    <section className="feed flex flex-row w-screen">
        <div className="mt-16 prompt_layout justify-items-center">
            {quotes.map((quote) => (
                <QuoteCard 
                    key={quote._id}
                    quote={quote}
                    handleTagClick={handleTagClick}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    </section>
  )
}
export default Feed;