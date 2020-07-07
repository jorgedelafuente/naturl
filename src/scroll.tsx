import { Location, WindowLocation } from "@reach/router";
import React from "react";

const scrollPositions: { [key: string]: number } = {};

type Props = {
  location: WindowLocation;
};

const ManageScrollImpl = ({ location }: Props) => {
  React.useEffect(() => {
    if (location.href) {
      window.scrollTo(0, scrollPositions[location.href || 0]);
    }
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [location?.href]);

  const listener = () => {
    if (location && location.href) {
      scrollPositions[location.href] = window.scrollY;
    }
  };

  return null;
};

const ManageScroll = () => (
  <Location>
    {({ location }) => <ManageScrollImpl location={location} />}
  </Location>
);

export default ManageScroll;
