import React from "react";
import styled from "styled-components";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  withBars?: string;
}

const ImageWrapper = styled.div<{ bars?: string }>`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.card};
  width: 100%;

  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.radius.card};
  }

  &::before {
    content: "";
    position: absolute;
    top: -40px;
    left: -40px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${({ bars }) => bars};
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -40px;
    right: -40px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${({ bars }) => bars};
  }

  ${({ theme }) => theme.mediaQueries.max.sm} {
    &::before {
      top: -20px;
      left: -20px;
      width: 40px;
      height: 40px;
    }

    &::after {
      bottom: -20px;
      right: -20px;
      width: 40px;
      height: 40px;
    }
  }
`;

export default function CardImg({ withBars, alt, ...rest }: Props) {
  return (
    <ImageWrapper bars={withBars}>
      <img {...rest} alt={alt} />
    </ImageWrapper>
  );
}
