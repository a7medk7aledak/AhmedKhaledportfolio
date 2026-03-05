import React from "react";

const CanvasLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        zIndex: 9999,
      }}
    >
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        Loading...
      </p>
    </div>
  );
};

export default CanvasLoader;