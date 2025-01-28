import { z } from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .toLowerCase()
      .trim()
      .min(3, "Name must contain at least 3 character(s)"),
    email: z.string().toLowerCase().email("Invalid email"),
    password: z
      .string()
      .min(8, "Password should be at least 8 characters long")
      .max(16),
    confirmPassword: z.string(),
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
  name: z.optional(
    z.string().trim().min(3, "Name must contain at least 3 character(s)")
  ),
  full_name: z.optional(
    z.string().trim().min(3, "Name must contain at least 3 character(s)")
  ),
  email: z.optional(
    z.string().trim().toLowerCase().email("Please enter a valid email")
  ),
  secondary_email: z.optional(
    z.string().trim().toLowerCase().email("Please enter a valid email")
  ),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be 10 digits long")
    .optional(),
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
