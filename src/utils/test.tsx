import React from 'react'

interface Props {
  onClick: () => void;
  disabled: boolean;
  classes: string;
  color: string;
  children?: any
}
const Button = (props: Props) => {
  const { children, onClick, disabled } = props;

  return (
    <button onClick={onClick} disabled={disabled} >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "Red",
  disabled: false,
  onClick: () => false,
};

let d = <Button classes="" color="" onClick={() => { }} />
let d3 = <Button classes="" color="" onClick={() => { }} />
console.log(d, d3)
