import { z } from 'zod';
import { BloodGroup, Gender } from './faculty.constant';

const createUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  middleName: z.string(),
  lastName: z.string(),
});

const createFacultyValidationSchema = z.object({
  body: z.object({
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 Characters' }).optional(),
    faculty: z.object({
      designation: z.string(),
      name: createUserNameValidationSchema,
      gender: z.enum([...Gender] as [string, ...string[]]),
      dateOfBirth: z.date().optional(),
      email: z.string().email({ message: 'Invalid Email Address' }),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z.enum([...BloodGroup] as [string, ...string[]]),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});
const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const updateFacultyValidationSchema = z.object({
  body: z.object({
    faculty: z.object({
      designation: z.string().optional(),
      name: updateUserNameValidationSchema,
      gender: z.enum([...Gender] as [string, ...string[]]),
      dateOfBirth: z.date().optional(),
      email: z.string().email({ message: 'Invalid Email Address' }),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bloodGroup: z.enum([...BloodGroup] as [string, ...string[]]),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});
export const facultyValidationSchema = {
  createFacultyValidationSchema,
  updateFacultyValidationSchema,
};
