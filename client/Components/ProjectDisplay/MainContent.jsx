import React from "react";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import ProductDisplay from "./ProductDisplay";

function MainContent({ data }) {
  return (
    <div>
      <ProjectTitle {...data} />
      <ProjectDescription description={data.description} />
      <ProductDisplay />
    </div>
  );
}

export default MainContent;
