import React from 'react';

type ReactComponentProps = {
  propA: string;
  propB: number;
};

const ReactComponent = ({ propA, propB }: ReactComponentProps): JSX.Element => {
  const text = 'my text';

  return (
    <>
      <div>{text}</div>
      <div>{propA}</div>
      <span>{propB}</span>
    </>
  );
};

export default ReactComponent;
