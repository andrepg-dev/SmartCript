import { setUserInfo } from "@/components/redux/slice/user-data";
import { DBUser } from "@/interfaces/db-user";
import { useAppDispatch } from "./redux";

// Verify is user is logged

export const useAuth = async () => {
  // Hacer un POST hacia API/AUTH/PROFILE
  const dispatch = useAppDispatch();

  try {
    const res = await fetch('/api/auth/profile');
    const data = await res.json() as DBUser;
    console.log(data);
    dispatch(setUserInfo(data))
  } catch (error) {
    console.log(error);
  }

  return null;
}

