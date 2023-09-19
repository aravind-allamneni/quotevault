import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">
          Quotes that inspire you
        </span>
      </h1>
      <p className="desc text-center">
        QuoteVault is an open-source tool for people to discover, and share
        inspiring quotes.
      </p>
      <Feed />
    </section>
  );
};
export default Home;
