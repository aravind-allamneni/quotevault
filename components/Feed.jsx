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
    <section className="feed">
        <div className="mt-16 quote_layout">
            {quotes.map((quote) => (
                <QuoteCard 
                    key={quote._id}
                    quote={quote}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    </section>
  )
}
export default Feed;