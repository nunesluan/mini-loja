import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Skeleton from "./Skeleton";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: ${(p) => p.theme?.radii?.md ?? "8px"};
  padding: 16px;
  background: ${(p) => p.theme?.colors?.background ?? "#fff"};
  color: ${(p) => p.theme?.colors?.text ?? "#111"};
  box-shadow: ${(p) => p.theme?.shadows?.sm ?? "0 1px 2px rgba(0,0,0,0.1)"};
  transition: box-shadow ${(p) => p.theme?.transition ?? "200ms ease-in-out"};
  &:hover {
    box-shadow: ${(p) => p.theme?.shadows?.md ?? "0 4px 6px rgba(0,0,0,0.1)"};
  }
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const Tag = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  background: ${(p) => p.theme?.colors?.primary ?? "#2e7d32"};
  color: white;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: ${(p) => p.theme?.radii?.md ?? "8px"};
`;

export default function ProductCard({ product }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Skeleton />;

  return (
    <Card>
      <ImgWrapper>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          style={{
            width: "100%",
            aspectRatio: "1/1",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        {product.tag && <Tag>{product.tag}</Tag>}
      </ImgWrapper>
      <h3 style={{ margin: "8px 0", fontWeight: "600" }}>{product.title}</h3>
      <p style={{ color: "green", fontWeight: "bold" }}>R$ {product.price}</p>
      <p style={{ color: "gold" }}>{"★".repeat(product.rating)}</p>
      <Button variant="solid" style={{ marginTop: "8px", width: "100%" }}>
        Adicionar
      </Button>
    </Card>
  );
}
