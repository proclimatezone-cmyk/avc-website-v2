"use client";

export default function DrivingScene() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#0A3B2C",
        height: "clamp(300px, 40vw, 520px)",
        userSelect: "none",
      }}
    >
      {/* Background Video */}
      <video 
        src="/0322.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* Subtle blend overlay so the video merges well with the dark theme block */}
      <div style={{
        position: "absolute", 
        inset: 0,
        background: "linear-gradient(to top, #0A3B2C 0%, transparent 20%, transparent 80%, #0A3B2C 100%)",
        zIndex: 1,
        pointerEvents: "none",
      }}/>
    </div>
  );
}
