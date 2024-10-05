import { User } from "@supabase/auth-helpers-nextjs"
import { UserDetails, Subscription } from '@/types';

import { createContext, useState } from "react";
import { useSessionContext, useUser as userSupaUser } from "@supabase/auth-helpers-react";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
  subscription: Subscription | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
    const {
        session,
        isLoading: isLoadingUser,
        supabaseClient: supabase
    } = useSessionContext();
    const user = userSupaUser();
    const accessToken = session?.access_token ?? null;
    const [isLoadingData,setIsLoadingData] = useState(false);
    const [userDetails,setUserDetails] = useState<UserDetails | null>(null);
    const [subscription, setSubscription] = useState<Subscription | null>(null)

    const getUserDetails = () => supabase.from('users').select('*').single();
    const getSubscription = () = 
    supabase
    .from('subscription')
        .select('*, prices(*, products(*))')
        .in('status', ['trialing', 'active'])
        .single();
}