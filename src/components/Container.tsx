import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div className="flex h-[100vh] w-[100%] flex-col xl:w-[1350px]">
      {children}
    </div>
  );
};

export default Container;
