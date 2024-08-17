import { Hearts } from "react-loader-spinner";

export const HeartsBarLoader = () => {
  const conteinerLoader = {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  };

  return (
    <div style={conteinerLoader}>
      <Hearts
        height="180"
        width="180"
        color="#e44848"
        ariaLabel="hearts-loading"
        visible={true}
      />
    </div>
  );
};
