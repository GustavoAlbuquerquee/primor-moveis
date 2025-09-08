"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import * as S from "./styles";

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
    threshold: 0.2,
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
          borderRadius: "16px",
        }}
        className="reveal-image"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjNmNGY2O3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlNWU3ZWI7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgLz4KICA8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMjUiIHI9IjIwIiBmaWxsPSIjZGRkZGRkIiBvcGFjaXR5PSIwLjYiLz4KPC9zdmc+"
        quality={85}
      />
    </S.RevealWrapper>
  );
};

export default ImageReveal;
