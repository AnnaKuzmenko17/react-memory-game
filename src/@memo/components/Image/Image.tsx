import { FC } from "react";

interface Props {
  url: string,
  alt: string
}

export const Image: FC<Props> = ({url, alt}) => {
  return (
    <img src={url} alt={alt}/>
  );
}