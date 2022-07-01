import React from "react";
import { Link } from "react-router-dom";
import Page from "./Page";

function NotFound() {
  return (
    <Page title="Not Found">
      <div className="text-center">
        <h2>Oops, we can not find that page.</h2>
        <p className="lead text-muted">
          Vist the <Link to="/">homepage</Link> to start over.
        </p>
      </div>
    </Page>
  );
}

export default NotFound;
