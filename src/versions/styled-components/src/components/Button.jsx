import styled, { css } from "styled-components";

const base = css`
  padding: 8px 16px;
  border-radius: ${(p) => p.theme?.radii?.md ?? "8px"};
  font-weight: 500;
  transition: ${(p) => p.theme.transition};
  cursor: pointer;
  box-shadow: ${(p) => p.theme?.shadows?.sm ?? "0 1px 2px rgba(0,0,0,0.1)"};
  &:focus {
    outline: 2px solid ${(p) => p.theme.colors.primary};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const variants = {
  solid: css`
    background: ${(p) => p.theme.colors.primary};
    color: white;
    border: none;
    &:hover {
      background: #1b5e20;
    }
  `,
  outline: css`
    background: transparent;
    border: 1px solid ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.primary};
    &:hover {
      background: ${(p) => p.theme.colors.primary};
      color: white;
    }
  `,
  ghost: css`
    background: transparent;
    color: ${(p) => p.theme.colors.primary};
    border: none;
    &:hover {
      background: ${(p) => p.theme.colors.secondary};
    }
  `,
};

const StyledButton = styled.button`
  ${base}
  ${(p) => variants[p.variant || "solid"]}
`;

export default function Button({ variant = "solid", children, ...props }) {
  return <StyledButton variant={variant} {...props}>{children}</StyledButton>;
}
