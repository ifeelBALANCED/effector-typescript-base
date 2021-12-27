import React, { FC } from 'react';

export interface IProps {
  color: string;
  onClick?: (color: string) => void;
}

const ColorButton: FC<IProps> = (props: IProps): JSX.Element => {
  const { color, onClick } = props;
  return (
    <button type="button" style={{ color }} onClick={() => onClick && onClick(color)}>
      Color Button
    </button>
  );
};

export default ColorButton;
