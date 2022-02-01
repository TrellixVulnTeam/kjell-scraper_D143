import { usePromiseTracker } from "react-promise-tracker";
import { RotateLoader } from "react-spinners";

export const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "85vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "9vw",
            height: "9vw",
            backgroundColor: "rgb(235,235,235)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "1em",
            boxShadow: "rgb(179 179 179 / 50%) 0px 4px 16px 0px",
          }}
        >
          <RotateLoader size="3vw" color="rgb(25, 117, 188)" loading />
        </div>
      </div>
    )
  );
};
