"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import * as S from "./styles";

// Definindo as propriedades que nosso componente vai aceitar
interface ImageRevealProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // A animação começa quando 20% do elemento está visível
  });

  return (
    <S.RevealWrapper ref={ref} className={inView ? "in-view" : ""}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "450px",
          borderRadius: "16px",
        }}
        className="reveal-image"
      />
    </S.RevealWrapper>
  );
};

export default ImageReveal;
