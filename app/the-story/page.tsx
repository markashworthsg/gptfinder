export const metadata = {
  title: 'The Story - Dev Hunt',
};

// this way of writing static pages with content is not professional, we gonna use MDX later.
export default () => {
  return (
    <div className="">
      <article className="container-custom-screen mt-12 prose prose-invert">
        <h1>About DevHunt</h1>
        <p>
          Welcome to <strong>GPT Finder</strong>!
        </p>

        <h2>Perks for the Winners</h2>
        <p>
          <ul>
            <li>TBA</li>

          </ul>
        </p>
        <h2>What Tools Can Launch Here?</h2>
        <ul>
          <li>
            <strong>Custom GPTs</strong>
          </li>

        </ul>

      </article>
    </div>
  );
};
