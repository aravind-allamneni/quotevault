"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateQuote = () => {
    const [quote, setQuote] = useState({
        author: "",
        text: "",
        tag: ""
    })
    const [submitting, setSubmitting] = useState(false);
    const {data: session} = useSession();
    const router = useRouter();

    const searchParams = useSearchParams();
    const quoteId = searchParams.get("id");

    useEffect(() => {
        const getQuote = async() => {
            const response = await fetch(`/api/quote/${quoteId}`);
            const data = await response.json();
            setQuote({
                author: data.author,
                text: data.text,
                tag: data.tag
            })
        };
        if(quoteId) getQuote();
    }, [quoteId])

    const updateQuote = async(e) => {
        e.preventDefault();
        setSubmitting(true);
        if(!quoteId) return alert("Quote ID not found");
        try {
            console.log("try catch for updateQuote called");
            const response = await fetch(`/api/quote/${quoteId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    text: quote.text,
                    author: quote.author,
                    tag: quote.tag
                })
            });
            if(response.ok){
                setSubmitting(false);
                return router.push("/");
            }
        } catch (error) {
            console.log(error);
            return("Internal Server error");
        }
    }

  return (
    <Form 
        type="Update"
        quote={quote}
        setQuote={setQuote}
        submitting={submitting}
        updateQuote={updateQuote}
    />
  )
}
export default UpdateQuote