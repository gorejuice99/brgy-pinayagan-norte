import { FC } from 'react';

export const Separator: FC<{ outerClass: string; innerClass: string }> = ({
  outerClass,
  innerClass,
}) => {
  return (
    <div className={outerClass}>
      <span className={`${innerClass} vr`}></span>
    </div>
  );
};
