import React from 'react';
import Content from '@theme-original/Navbar/Content';
import UserButton from '@site/src/components/UserButton';

export default function ContentWrapper(props) {
  return (
    <>
      <Content {...props} />
      <UserButton />
    </>
  );
}
