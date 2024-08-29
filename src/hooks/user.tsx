// hooks/useUser.ts
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { fetchUser } from '@/components/redux/slice/user-data';

export default function useUser() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.RuserInfo);

  useEffect(() => {
    if (!user.user) {
      dispatch(fetchUser());
    } 

  }, [user, dispatch]);


  return { user };
}
