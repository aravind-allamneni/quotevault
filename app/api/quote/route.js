import Quote from "@models/quote";
import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const quotes = await Quote.find({});
    if (quotes.length > 0) {
      return new Response(JSON.stringify(quotes), { status: 200 });
    } else {
      return new Response("Failed to fetch quotes", { status: 404 });
    }
  } catch (error) {
    console.log(error);
    new Response(
      JSON.stringify("Internal Server Error. Could not get Quotes"),
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req, res) => {
  const { author, text, tag, creator } = await req.json();
  try {
    await connectToDB();
    const newQuote = new Quote({
      author,
      text,
      tag,
      creator,
    });
    await newQuote.save();
    return new Response(JSON.stringify(newQuote), { status: 201 });
  } catch (error) {
    console.log(error);
    new Response(JSON.stringify("Internal Server Error. Could not add quote"), {
      status: 500,
    });
  }
};
