import React from "react";
import { getDatabase } from "firebase/database";
import {
  useFirebaseApp,
  DatabaseProvider,
  FirebaseAppProvider
} from "reactfire";

import { firebaseConfig } from "./firebase-config";

function ProviderHelpers({ children }: { children: React.ReactNode }) {
  const firebaseApp = useFirebaseApp();
  const dbInstance = getDatabase(firebaseApp);

  return <DatabaseProvider sdk={dbInstance}>{children}</DatabaseProvider>;
}

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ProviderHelpers>{children}</ProviderHelpers>
    </FirebaseAppProvider>
  );
}
