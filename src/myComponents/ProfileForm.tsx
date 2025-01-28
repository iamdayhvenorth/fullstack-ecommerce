"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/data";
import { fetchCountryStates } from "@/lib/countryStates";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePersonInfoSchema } from "@/schemas/userSchema";
import { PersonalInfoForm, updatePersonalInfo } from "@/actions/auth";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

type CountryState = {
  name: string;
  stateCode: string;
};

export default function ProfileForm() {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [countryStates, setCountryStates] = useState<CountryState[]>([]);
  const [state, setState] = useState<string | null>();

  const { update } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoForm>({
    resolver: zodResolver(updatePersonInfoSchema),
    defaultValues: {
      name: "David",
      email: "david@example.com",
    },
  });

  useEffect(() => {
    // if(countryCode) fetchCountryStates(countryCode)
    const getStates = async () => {
      if (countryCode) {
        const states = await fetchCountryStates(countryCode);
        setCountryStates(states);
      }
    };

    if (countryCode) {
      getStates();
    }
  }, [countryCode]);

  const handleCountryChange = (value: string) => {
    setCountryCode(value);
  };
  const handleStateChange = (value: string) => {
    setState(value);
  };

  const onSubmit = async (data: PersonalInfoForm) => {
    const res = await updatePersonalInfo(data);
    if (res.success && res.message) {
      toast.success(res.message);
      await update();
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
        <span>Display Name</span>
        <input
          type="text"
          className={`${errors.name ? "border-red-600" : ""}`}
          {...register("name")}
        />
      </label>
      <label>
        <span>Username</span>
        <input type="text" defaultValue={"kevin123"} />
      </label>
      <label>
        <span>Full Name</span>
        <input
          type="text"
          defaultValue={"Kevin Gilbert"}
          className={`${errors.full_name ? "border-red-600" : ""}`}
          {...register("full_name")}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          className={`${errors.email ? "border-red-600" : ""}`}
          {...register("email")}
        />
      </label>
      <label>
        <span>Secondary Email</span>
        <input
          type="email"
          defaultValue={"kevin12345@gmail.com"}
          className={`${errors.secondary_email ? "border-red-600" : ""}`}
          {...register("secondary_email")}
        />
      </label>
      <label>
        <span>Phone Number</span>
        <input
          type="text"
          defaultValue={"+1-202-555-0118"}
          className={`${errors.phone ? "border-red-600" : ""}`}
          {...register("phone")}
        />
      </label>
      <label>
        <span>Country/Region</span>
        <Select onValueChange={handleCountryChange}>
          <SelectTrigger className="w-full rounded-[2px] py-[6px] px-2 outline-none mt-2">
            <SelectValue placeholder="select country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.name} value={country.code}>
                {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </label>

      <div className="flex gap-2">
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
          <input type="text" defaultValue={"1207"} />
        </label>
      </div>

      <div className="mt-4">
        <button className="text-sm font-semibold text-white bg-[#fa8232] py-2 px-3 rounded-[2px] opacity-80 hover:opacity-100 transition-opacity duration-150 ease-in uppercase w-fit">
          Save Changes
        </button>
      </div>
    </form>
  );
}
