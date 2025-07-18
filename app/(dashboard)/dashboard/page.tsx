"use client";

import API from "@/config/axios";
import useUserStore from "@/store/user";
import { useEffect } from "react";

export default function Dashboard() {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      const fetchUser = async () => {
        try {
          const res = await API.get("/auth/me", { withCredentials: true });
          setUser(res.data.user); // Zustand, Context, etc.
        } catch (err) {
          console.error(err);
        }
      };
      fetchUser();
    }
  }, [user, setUser]);

  return (
    <>
      <p>Dashboard</p>
      <p>Welcome back, {user?.name}</p>
    </>
  );
}
