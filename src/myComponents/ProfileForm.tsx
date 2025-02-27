"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePersonInfoSchema } from "@/schemas/userSchema";
import { PersonalInfoForm, updatePersonalInfo } from "@/actions/auth";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

import { useUserStore } from "@/store/user";
import formatDate from "@/utils/moment";

type CountryState = {
  name: string;
  stateCode: string;
};

export default function ProfileForm() {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [countryStates, setCountryStates] = useState<CountryState[]>([]);
  const [state, setState] = useState<string | null>();

  const { data: session } = useSession();

  const getProfile = useUserStore((state) => state.getProfile);
  const user = useUserStore((state) => state.user);
  console.log(user);

  useEffect(() => {
    if (session?.user.id) getProfile(session?.user?.id);
  }, [session]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PersonalInfoForm>({
    resolver: zodResolver(updatePersonInfoSchema),
  });

  useEffect(() => {
    if (user) {
      reset(user); // Update the form with API data
    }
  }, [user, reset]);

  const onSubmit = async (data: PersonalInfoForm) => {
    const res = await updatePersonalInfo(data);
    if (res.success && res.message) {
      toast.success(res.message);
    }
    if (!res.success && res.error) {
      toast.error(res.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form grid grid-cols-2 gap-2"
    >
      <label>
        <span>First Name</span>
        <input
          type="text"
          className={`${errors.firstname ? "border-red-600" : ""}`}
          {...register("firstname")}
        />
      </label>

      <label>
        <span>Last Name</span>
        <input
          type="text"
          className={`${errors.lastname ? "border-red-600" : ""}`}
          {...register("lastname")}
        />
      </label>

      <label>
        <span>Full Name</span>
        <input
          type="text"
          className={`${errors.full_name ? "border-red-600" : ""}`}
          {...register("full_name")}
        />
      </label>

      <label>
        <span>Email</span>
        <input
          type="email"
          disabled
          className={`disabled:cursor-not-allowed ${
            errors.email ? "border-red-600" : ""
          }`}
          {...register("email")}
        />
      </label>

      <label>
        <span>Secondary Email</span>
        <input
          type="email"
          className={`${errors.secondaryEmail ? "border-red-600" : ""}`}
          {...register("secondaryEmail")}
        />
      </label>

      <label>
        <span>Phone Number</span>
        <input
          type="text"
          className={`${errors.phone ? "border-red-600" : ""}`}
          {...register("phone")}
        />
      </label>

      <label>
        <span>Gender</span>
        <Select>
          <SelectTrigger className="w-full rounded-[2px] py-[6px] px-2 outline-none mt-2">
            <SelectValue placeholder="select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Male</SelectItem>
          </SelectContent>
        </Select>
      </label>

      <div className="flex flex-col gap-4">
        <span className="text-dark font-medium text-sm"> D.O.B</span>{" "}
        <span>{user?.dob ? formatDate(user.dob) : "N/A"}</span>
      </div>

      {/* <div className="flex gap-2">
        <label className="w-1/2">
          <span>States</span>
          <Select onValueChange={handleStateChange}>
            <SelectTrigger
              disabled={countryStates.length === 0}
              className="w-full rounded-[2px] py-[6px] px-2 outline-none mt-2 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              <SelectValue placeholder="select state" />
            </SelectTrigger>
            <SelectContent>
              {countryStates.length > 0 ? (
                countryStates.map((state) => (
                  <SelectItem key={state.name} value={state.name}>
                    {state.name}
                  </SelectItem>
                ))
              ) : (
                <SelectItem disabled value="empty">
                  choose a country
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </label>

        <label className="w-1/2">
          <span>Zip Code</span>
          <input type="text" {...register("zip")} />
        </label>
      </div> */}

      <div className="mt-4">
        <button className="text-sm font-semibold text-white bg-[#fa8232] py-2 px-3 rounded-[2px] opacity-80 hover:opacity-100 transition-opacity duration-150 ease-in uppercase w-fit">
          Save Changes
        </button>
      </div>
    </form>
  );
}
