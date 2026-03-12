import React from 'react';
import { SignIn, useUser } from '@clerk/react';

export default function AuthGate({ children }) {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'var(--ifm-background-color)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div className="spinner" style={{
            border: '4px solid rgba(0, 0, 0, 0.1)',
            borderTop: '4px solid var(--ifm-color-primary)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }}></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'var(--ifm-background-color)',
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '400px', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              MAPC Study Portal
            </h1>
            <p style={{ color: 'var(--ifm-color-emphasis-600)' }}>
              Sign in to access your study materials
            </p>
          </div>
          <SignIn 
            appearance={{
              elements: {
                rootBox: {
                  width: '100%'
                },
                card: {
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '1px solid var(--ifm-color-emphasis-200)'
                }
              }
            }}
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
