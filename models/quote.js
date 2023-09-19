import { model, models, Schema } from "mongoose";

const QuoteSchema = new Schema({
  author: {
    type: String,
    required: [true, "Author of the quote is required"],
  },
  text: {
    type: String,
    required: [true, "Quote text is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Quote = models.Quote || model("Quote", QuoteSchema);

export default Quote;
