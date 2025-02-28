import { z } from "zod";

export const signupSchema = z
  .object({
    firstname: z
      .string()
      .toLowerCase()
      .trim()
      .min(3, "firstname must contain at least 3 character(s)"),
    lastname: z
      .string()
      .toLowerCase()
      .trim()
      .min(3, "lastname must contain at least 3 character(s)"),
    email: z.string().toLowerCase().email("Invalid email"),
    password: z
      .string()
      .trim()
      .min(8, "Password should be at least 8 characters long")
      .max(16),
    confirmPassword: z.string().trim().min(3, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Please enter a valid email"),
  password: z.string().trim().min(1, "Password is required"),
});

export const updatePersonInfoSchema = z.object({
  firstname: z.optional(
    z.string().trim().min(3, "firstname must contain at least 3 character(s)")
  ),
  lastname: z.optional(
    z.string().trim().min(3, "lastname must contain at least 3 character(s)")
  ),
  full_name: z.optional(
    z.string().trim().min(3, "Name must contain at least 3 character(s)")
  ),
  email: z.optional(
    z.string().trim().toLowerCase().email("Please enter a valid email")
  ),
  secondaryEmail: z.optional(
    z.string().trim().toLowerCase().email("Please enter a valid email")
  ),
  zip: z.string().trim().min(1, "zip code is required"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be 10 digits long")
    .max(15, "Phone number should not exceed 15 digits"),
});

export const changePasswordSchema = z
  .object({
    oldPassword: z.string().trim().min(1, "Old password is required"),
    newPassword: z
      .string()
      .trim()
      .min(8, "Password should be at least 8 characters long"),
    confirmNewPassword: z
      .string()
      .trim()
      .min(1, "Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ["confirmNewPassword"],
    message: "Passwords do not match",
  });

export const forgotPasswordSchema = z.object({
  email: z.string().trim().toLowerCase().email("Please enter a valid email"),
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .trim()
      .min(8, "Password should be at least 8 characters long"),
    confirmPassword: z.string().trim().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const addressSchema = z.object({
  address: z.string().trim().min(3, "Address  is required"),
  companyName: z.optional(z.string().trim()),
  city: z.string().trim().min(1, "City is required"),
  state: z.string().trim().min(1, "State is required"),
  zip: z.string().trim().min(5, "Zip code is required"),
  country: z.string().trim().min(1, "Country is required"),
  firstName: z.string().trim().min(1, "Firstname  is required"),
  lastName: z.string().trim().min(1, "Lastname  is required"),
  email: z.string().toLowerCase().email("Invalid email"),
  phone: z.string().trim().min(10, "Phone number must be 10 digits long"),
});
