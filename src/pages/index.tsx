import * as React from "react";

const IndexPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
      <h1 className="text-9xl">
        tobytran.art
      </h1>
      <br/>
      <p>
        this site is currently under construction.
      </p>
      <p>
        please direct any questions to <a
          className="italic"
          href="mailto://info@tobytran.art"
        >
          info@tobytran.art
        </a>
        .
      </p>
      </div>
    </main>
  )
}

export const Head = () => <title>tobytran.art</title>;

export default IndexPage;
