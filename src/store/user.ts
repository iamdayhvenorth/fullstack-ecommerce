import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type User = {
  name: string;
  email: string;
  gender: "male" | "female";
  firstname: string;
  lastname: string;
  secondaryEmail?: string;
  emailVerified: Date | null;
  isEmailVerified: boolean;
  dob: string;
};

type UserAction = {
  getProfile: (id: string) => Promise<void>;
};

type UserInfo = {
  user: User | null;
};

export const useUserStore = create<UserInfo & UserAction>()(
  devtools(
    immer((set) => ({
      user: null,
      getProfile: async (id: string) => {
        try {
          const response = await axios.get(`/api/profile/${id}`);
          console.log(response.data);
          set({ user: response.data?.user });
        } catch (error) {
          console.error("Failed to fetch user profile:", error);
        }
      },
    }))
  )
);
