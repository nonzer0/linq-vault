import React from "react";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {
  AuthProvider,
  DatabaseProvider,
  FirebaseAppProvider,
  useFirebaseApp,
} from "reactfire";

import { firebaseConfig } from "./firebase-config";

function ProviderHelpers({ children }: { children: React.ReactNode }) {
  const firebaseApp = useFirebaseApp();
  const dbInstance = getDatabase(firebaseApp);
  const auth = getAuth(firebaseApp);

  return (
    <AuthProvider sdk={auth}>
      <DatabaseProvider sdk={dbInstance}>{children}</DatabaseProvider>
    </AuthProvider>
  );
}

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ProviderHelpers>{children}</ProviderHelpers>
    </FirebaseAppProvider>
  );
}
