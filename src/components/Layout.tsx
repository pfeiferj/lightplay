import React from 'react';
import TopBar from './TopBar';

interface LayoutProps {
  children: React.ReactNode;
  name: string;
  sizeUpdate?: { (sizeMultiplier: number): void };
}

const Layout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  const { children, name, sizeUpdate } = props;
  return (
    <div>
      <TopBar name={name} sizeUpdate={sizeUpdate} />
      {children}
    </div>
  );
};
Layout.defaultProps = {
  sizeUpdate: () => {},
};

export default Layout;
