import Card from "components/atoms/Card";
import CardBody from "components/atoms/Card/CardBody";
import CardImg from "components/atoms/Card/CardImg";
import Typography from "components/atoms/Typography";
import { SpacingProps } from "jss/spacing";
import React from "react";
import styled from "styled-components";

interface Props extends SpacingProps {
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  color?: string;
  title?: string;
  description?: string;
  link?: string;
}

export default function ProjectCard({ imgProps, color, title, description, link, ...rest }: Props) {
  console.log(window.innerWidth, "Width");

  return (
    <a href={link ?? '#'} target="_blank" rel="noreferrer">
      <Card customBg={color} {...rest}>
        <CardImg withBars={color} {...imgProps} />
        <CardBody>
          <Typography fontFamily="Aldo" fontSize="lg" marginBottom="10px">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardBody>
      </Card>
    </a>
  );
}
