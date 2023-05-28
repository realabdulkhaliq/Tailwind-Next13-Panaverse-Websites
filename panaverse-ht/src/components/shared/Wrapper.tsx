import { Children } from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-screen-2xl mx-auto px-2">{children}</div>;
};

export default Wrapper;
