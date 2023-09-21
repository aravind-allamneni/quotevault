"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateQuote = () => {
    const [quote, setQuote] = useState({
        author: "",
        text: "",
        tag: "",
        creator: ""
    })
    const [submitting, setSubmitting] = useState(false);
    const {data: session} = useSession();
    const router = useRouter();

    const searchParams = useSearchParams();
    const quoteId = searchParams.get("id")

    useEffect(() => {
        const getQuote = async() => {
            const response = await fetch(`/api/prompt/${quoteId}`);
            const data = await response.json();
            setQuote({
                author: data.author,
                text: data.text,
                tag: data.tag,
                creator: data.creator
            })
        };
        if(quoteId) getQuote();
    }, [quoteId])

    const updateQuote = async(e) => {
        e.preventDefault();
        setSubmitting(true);

        if(!quoteId) return alert("Quote ID not found");

        try {
            const response = await fetch(`api/quote/${id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    text: quote.text,
                    author: quote.author,
                    tag: quote.tag,
                    author: quote.author
                })
            });
            if(response.ok){
                return router.push("/");
            }
        } catch (error) {
            
        }
    }

  return (
    <Form 
        type="Update"
        quote={quote}
        setQuote={setQuote}
        submitting={submitting}
        handleSubmit={updateQuote}
    />
  )
}
export default UpdateQuote