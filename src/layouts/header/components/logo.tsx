import { FC } from 'react';
import { Image } from 'react-bootstrap';

// Types
import { TLogoProp } from 'types/home';

export const Logo: FC<TLogoProp> = ({ image, roundedCircle, className }) => {
  return (
    <Image
      src={image}
      alt="UserName profile image"
      roundedCircle={roundedCircle}
      className={className}
    />
  );
};
