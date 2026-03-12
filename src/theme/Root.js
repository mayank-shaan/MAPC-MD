import React from 'react';
import { ClerkProvider } from '@clerk/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Root({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const clerkPubKey = siteConfig.customFields?.clerkPublishableKey;

  if (!clerkPubKey) {
    console.error('Missing Clerk Publishable Key. Please set CLERK_PUBLISHABLE_KEY in your environment variables.');
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Configuration Error</h2>
        <p>Authentication is not properly configured. Please contact the administrator.</p>
      </div>
    );
  }

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      {children}
    </ClerkProvider>
  );
}
