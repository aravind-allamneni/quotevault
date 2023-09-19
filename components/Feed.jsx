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
  return (
    <section className="feed">
        <div className="mt-16 prompt_layout">
            {quotes.map((quote) => (
                <QuoteCard 
                    key={quote._id}
                    text={quote.text}
                    author={quote.author}
                    creator={quote.creator}
                    tag={quote.tag}
                />
            ))}
        </div>
    </section>
  )
}
export default Feed;