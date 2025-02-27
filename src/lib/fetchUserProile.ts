import { getCurrentUser } from "@/actions/auth";
import { auth } from "@/auth";
import { User } from "@prisma/client";
import axios, { AxiosError } from "axios";

export const fetchProfile = async (): Promise<{
  success: boolean;
  data?: User;
}> => {
  const session = await getCurrentUser();
  // const res = await fetch(
  //   `http://localhost:3000//api/profile/${session?.user.id}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  // if (!res.ok) return { success: false };
  // return { success: true, data: await res.json() };

  try {
    if (!session) return { success: false };
    const res = await axios.get(
      `http://localhost:3000//api/profile/${session?.user.id}`
    );

    if (res.status === 200) {
      return { success: true, data: res.data };
    } else {
      return { success: false };
    }
  } catch (error) {
    return { success: false };
  }
};
