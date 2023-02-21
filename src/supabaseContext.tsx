import { supabase } from "./supabase";
import { createContext, useEffect, useState } from "react";
import type { AuthSession, SupabaseClient } from '@supabase/supabase-js'

interface SupabaseContextProps {
    supabaseClient: SupabaseClient;
    session: AuthSession | null;
    // userId?: string | null;
}

const initialState: SupabaseContextProps = {
    supabaseClient: supabase,
    session: null,
};

export const SupabaseContext = createContext(initialState);

export const SupabaseProvider = ({ children }: any) => {
  const [session, setSession] = useState<AuthSession | null>(null);
//   const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      console.log('session', session)
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    });

    // if (session) {
    //     console.log('id', session.user.id);
    //     setUserId(session.user.id);
    // }
  }, []);

  const value = {
    supabaseClient: supabase,
    session,
    // userId,
  };

  return (<SupabaseContext.Provider value={value}>{children}</SupabaseContext.Provider>);

};
