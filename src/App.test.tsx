import React from 'react';
import { connectDatabaseEmulator, getDatabase } from 'firebase/database';
import {
  useFirebaseApp,
  DatabaseProvider,
  FirebaseAppProvider
} from "reactfire";

import { render, screen } from '@testing-library/react';
import App from './App';
import { firebaseConfig } from './firebase-config';

function TestProviderHelpers({ children }: { children: React.ReactNode }) {
  const firebaseApp = useFirebaseApp();
  const dbInstance = getDatabase(firebaseApp);
  connectDatabaseEmulator(dbInstance, 'localhost', 9000);

  return <DatabaseProvider sdk={dbInstance}>{children}</DatabaseProvider>;
}

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <TestProviderHelpers>{children}</TestProviderHelpers>
    </FirebaseAppProvider>
  );
}

describe('App', () => {
  test('renders Add New Bookmark', () => {
    render(<FirebaseProvider><App /></FirebaseProvider>);
    const titleElem = screen.getByText(/Add Bookmark/i);
    expect(titleElem).toBeInTheDocument();
  });
})

