import styled from "styled-components";
import { ButtonProps } from ".";

export const ButtonStyle = styled.button<ButtonProps>`
  display: ${({ display }) => display || "block"};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.md};
  color: ${({ color, customColor, theme, outline }) =>
    outline ? theme.colors[outline] : customColor ? customColor : color ? theme.colors[color] : theme.colors.white};
  background-color: ${({ bg, customBg, theme, outline }) => (outline ? "transparent" : customBg ? customBg : bg ? theme.colors[bg] : theme.colors.primary)};
  text-align: center;
  cursor: pointer;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  font-weight: 600;
  border-radius: ${({ theme, brSmall }) => (brSmall ? theme.radius.card : theme.radius.default)};
  min-width: 130px;
  height: 55px;
  padding: 10px 20px;
  border: ${({ outline, theme }) => (outline ? `2.5px solid ${theme.colors[outline]}` : "0")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 9px 25px -1px rgba(179, 185, 199, 0.77);
  }
`;
