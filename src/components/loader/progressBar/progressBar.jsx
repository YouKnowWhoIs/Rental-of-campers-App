import { ProgressBar } from "react-loader-spinner";

export const ProgressBarLoader = () => {
  const conteinerLoader = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={conteinerLoader}>
      <ProgressBar
        visible={true}
        height="160"
        width="160"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
      />
    </div>
  );
};
