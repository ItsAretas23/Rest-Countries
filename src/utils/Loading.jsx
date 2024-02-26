import React from "react";
import { SyncLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Loading = ({isLoading}) => {
  return (
    <div>
      <SyncLoader
        color={"white"}
        loading={isLoading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
