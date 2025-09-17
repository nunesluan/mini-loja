// src/components/Navbar.jsx
import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => (theme?.colors?.background ?? "#fff")};
  color: ${({ theme }) => (theme?.colors?.text ?? "#111")};
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: ${({ theme }) => (theme?.shadows?.sm ?? "0 1px 2px rgba(0,0,0,0.1)")};
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: ${({ theme }) => (theme?.radii?.md ?? "8px")};
  background: ${({ theme }) => (theme?.colors?.primary ?? "#2e7d32")};
  color: white;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => (theme?.colors?.secondary ?? "#f5f1e6")};
  }
`;

const CartBadge = styled.div`
  background: ${({ theme }) => (theme?.colors?.primary ?? "#2e7d32")};
  color: white;
  border-radius: 50%;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
`;

export default function Navbar({ theme, toggleTheme }) {
  return (
    <Nav>
      <Logo>Minha Loja</Logo>
      <Actions>
        <ToggleButton onClick={toggleTheme}>
          {theme === "light" ? "🌞" : "🌙"}
        </ToggleButton>
        <CartBadge><FaShoppingCart />3</CartBadge>
      </Actions>
    </Nav>
  );
}
