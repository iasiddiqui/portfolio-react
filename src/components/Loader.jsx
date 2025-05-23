import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="loader-container">
        <span className="canvas-load"></span>
        <p
          style={{
            fontSize: "16px",
            color: "#222",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
