"use client";

import { AddressFormData, updateUserAddress } from "@/actions/auth";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/data";
import { fetchCountryStates } from "@/lib/countryStates";
import { addressSchema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";

type CountryState = {
  name: string;
  stateCode: string;
};

export default function BillingAddressForm() {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [countryStates, setCountryStates] = useState<CountryState[]>([]);
  const [state, setState] = useState<string | null>();

  useEffect(() => {
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
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
  });

  const updateAddress = async (data: AddressFormData) => {
    console.log(data);
    const res = await updateUserAddress(data);
    if (res.success && res.message) {
      toast.success(res.message);
      return;
    }

    if (res.error) {
      toast.error(res.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(updateAddress)}
      className="flex flex-col gap-2 form"
    >
      <div className="flex gap-2">
        <label>
          <span>First Name</span>
          <input
            type="text"
            className={`border p-2 w-full rounded-sm text-sm ${
              errors.firstName ? "border-red-600" : ""
            }`}
            defaultValue={"Kevin"}
            {...register("firstName")}
            id="firstName"
          />
          {errors.firstName && (
            <p className="text-red-600 text-sm mt-2">
              {errors.firstName.message}
            </p>
          )}
        </label>

        <label>
          <span>Last Name</span>
          <input
            type="text"
            className={`border p-2 w-full rounded-sm text-sm ${
              errors.lastName ? "border-red-600" : ""
            }`}
            defaultValue={"Gilbert"}
            {...register("lastName")}
            id="lastName"
          />
          {errors.lastName && (
            <p className="text-red-600 text-sm mt-2">
              {errors.lastName.message}
            </p>
          )}
        </label>
      </div>

      <label>
        <span>
          Company Name <span>(Optional)</span>
        </span>
        <input type="text" {...register("companyName")} />
      </label>

      <label>
        <span>Address</span>
        <input
          type="text"
          id="address"
          {...register("address")}
          className={`border p-2 w-full rounded-sm text-sm ${
            errors.address ? "border-red-600" : ""
          }`}
          defaultValue={"Road No. 13/x, House no. 1320/C, Flat No. 5D"}
        />

        {errors.address && (
          <p className="text-red-600 text-sm mt-2">{errors.address.message}</p>
        )}
      </label>
      <label>
        <span>Country/Region</span>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger
                className={`w-full rounded-[2px] py-[6px] px-2 outline-none mt-2 ${
                  errors.country ? "border-red-600" : ""
                }`}
              >
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
          )}
        />

        {errors.country && (
          <p className="text-red-600 text-sm mt-2">{errors.country.message}</p>
        )}
      </label>

      <label>
        <span>State</span>
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger
                className={`w-full rounded-[2px] py-[6px] px-2 outline-none mt-2 ${
                  errors.country ? "border-red-600" : ""
                }`}
              >
                <SelectValue placeholder="select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                <SelectItem value="Nigeria">Nigeria</SelectItem>
                <SelectItem value="United State">United State</SelectItem>
              </SelectContent>
            </Select>
          )}
        />

        {errors.state && (
          <p className="text-red-600 text-sm mt-2">{errors.state.message}</p>
        )}
      </label>

      <div className="flex gap-2">
        <label className="flex-1">
          <span>City</span>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  className={`w-full rounded-[2px] py-[6px] px-2 outline-none mt-2 ${
                    errors.city ? "border-red-600" : ""
                  }`}
                >
                  <SelectValue placeholder="select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                  <SelectItem value="Nigeria">Nigeria</SelectItem>
                  <SelectItem value="United State">United State</SelectItem>
                </SelectContent>
              </Select>
            )}
          />

          {errors.city && (
            <p className="text-red-600 text-sm mt-2">{errors.city.message}</p>
          )}
        </label>

        <label className="w-[40%]">
          <span>Zip Code</span>
          <input
            type="text"
            className={`border p-2 w-full rounded-sm text-sm ${
              errors.zip ? "border-red-600" : ""
            }`}
            defaultValue={"1207"}
            id="zip"
            {...register("zip")}
          />

          {errors.zip && (
            <p className="text-red-600 text-sm mt-2">{errors.zip.message}</p>
          )}
        </label>
      </div>

      <label>
        <span>Email</span>
        <input
          type="email"
          id="email_address"
          {...register("email")}
          className={`border p-2 w-full rounded-sm text-sm ${
            errors.email ? "border-red-600" : ""
          }`}
        />

        {errors.email && (
          <p className="text-red-600 text-sm mt-2">{errors.email.message}</p>
        )}
      </label>

      <label>
        <span>Phone Number</span>
        <input type="text" id="phone" {...register("phone")} />
        {errors.phone && (
          <p className="text-red-600 text-sm mt-2">{errors.phone.message}</p>
        )}
      </label>

      <div className="mt-4">
        <button
          disabled={isSubmitting}
          className="text-sm font-semibold text-white bg-[#fa8232] py-2 px-3 rounded-[2px] opacity-80 hover:opacity-100 transition-opacity duration-150 ease-in uppercase w-fit disabled:bg-slate-500"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
