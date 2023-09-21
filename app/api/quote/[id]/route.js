import Quote from "@models/quote";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const quote = await Quote.findById(params.id).populate("creator");
    if (!quote) {
      return new Response("Quote not found", { status: 404 });
    }
    return new Response(JSON.stringify(quote), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal server error. Failed to fetch quotes", {
      status: 500,
    });
  }
};

export const PATCH = async (req, { params }) => {
  const { author, text, tag, creator } = await req.json();
  try {
    await connectToDB();
    const existingQuote = await Quote.findById(params.id);

    if (!existingQuote) {
      return new Response("Quote not found", { status: 404 });
    }
    existingQuote.author = author;
    existingQuote.text = text;
    existingQuote.tag = tag;
    existingQuote.creator = creator;

    await existingQuote.save();
    return new Response(JSON.stringify(existingQuote, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new Response("Failed to update prompt", { status: 500 });
  }
};
