"use client";

import Form from "@components/Form";
import { useState } from "react";

const AddQuote = () => {
    const [quote, setQuote] = useState("")
    const [submitting, setSubmitting] = useState(false);

    const addQuote = async() => {
        return "";
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