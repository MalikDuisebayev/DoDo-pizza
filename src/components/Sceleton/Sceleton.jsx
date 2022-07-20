import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="136" cy="100" r="96" />
    <rect x="0" y="208" rx="9" ry="9" width="280" height="41" />
    <rect x="0" y="265" rx="9" ry="9" width="280" height="90" />
    <rect x="-1" y="371" rx="8" ry="8" width="120" height="40" />
    <rect x="157" y="371" rx="9" ry="9" width="120" height="40" />
  </ContentLoader>
);

export default Sceleton;
