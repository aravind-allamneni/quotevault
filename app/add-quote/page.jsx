"use client";

import Form from "@components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AddQuote = () => {
    const [quote, setQuote] = useState("")
    const [submitting, setSubmitting] = useState(false);
    const {data: session} = useSession();
    const router = useRouter();

    const addQuote = async(e) => {
      e.preventDefault();
      setSubmitting(true);

      try {
        const response = await fetch("/api/quote", {
          method: "POST",
          body: JSON.stringify({
            text: quote.text,
            author: quote.author,
            tag: quote.tag,
            creator: session?.user.id,
          })
        });
        if(response.ok){
          router.push("/")
        }
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <Form
        type="Create"
        quote={quote}
        setQuote={setQuote}
        submitting={submitting}
        handleSubmit={addQuote}
    />
  )
}
export default AddQuote