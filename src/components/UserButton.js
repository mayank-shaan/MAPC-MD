import React from 'react';
import { UserButton as ClerkUserButton, useUser } from '@clerk/react';

export default function UserButton() {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return null;
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginLeft: '1rem'
    }}>
      <span style={{
        fontSize: '0.9rem',
        color: 'var(--ifm-navbar-link-color)',
        display: 'none',
        '@media (min-width: 768px)': {
          display: 'inline'
        }
      }}>
        {user?.firstName || user?.emailAddresses?.[0]?.emailAddress}
      </span>
      <ClerkUserButton 
        appearance={{
          elements: {
            avatarBox: {
              width: '32px',
              height: '32px'
            }
          }
        }}
      />
    </div>
  );
}
