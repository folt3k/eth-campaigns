import * as React from "react";

import Loader from "../components/loader/loader";

export type LoaderContext = {
  showLoader: () => void;
  hideLoader: () => void;
};

export const LoaderContext = React.createContext<LoaderContext | null>(null);

const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const showLoader = () => {
    setLoading(true);
  };

  const hideLoader = () => {
    setLoading(false);
  };

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {loading && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
