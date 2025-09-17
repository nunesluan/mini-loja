// src/components/Skeleton.jsx
import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 1 }
  50% { opacity: 0.5 }
`;

const Box = styled.div`
  background: #ccc;
  border-radius: ${({ theme }) => (theme?.radii?.md ?? "8px")};
  animation: ${pulse} 1.5s infinite;
`;

export default function Skeleton({ styleProps = {} }) {
  return (
    <div style={{ width: "100%" }}>
      <Box style={{ width: "100%", height: 200, marginBottom: 8, ...styleProps }} />
      <Box style={{ width: "80%", height: 16, marginBottom: 6 }} />
      <Box style={{ width: "60%", height: 16 }} />
    </div>
  );
}
