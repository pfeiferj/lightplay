import React from 'react';
import TopBar from './TopBar';

interface LayoutProps {
  children: React.ReactNode;
  name: string;
}

const Layout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  const { children, name } = props;
  return (
    <div>
      <TopBar name={name} />
      {children}
    </div>
  );
};

export default Layout;
