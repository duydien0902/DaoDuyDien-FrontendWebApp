import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/logo.png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          fontSize: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to bottom right, #5c2dc9, #5e2fbb)",
          fontWeight: 700,
          borderRadius: "8px",
          color: "white",
          border: "1px solid white",
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
