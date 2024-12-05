import { z } from 'zod';

const zodValidationSchema = z.object({
  id: z
    .string()
    .min(1, { message: 'ID is required and must be a positive number' }),
  password: z
    .string()
    .length(11, { message: 'Password should be in 12 character' }),
  name: z.object({
    firstName: z
      .string()
      .trim()
      .regex(/^[A-Z][a-zA-Z]*$/, {
        message:
          'First Name must start with a capital letter and contain only alphabetic characters',
      })
      .nonempty('First Name is required'),
    middleName: z.string().optional(),
    lastName: z.string().nonempty('Last Name is required'),
  }),
  gender: z.enum(['Male', 'Female', 'Others'], {
    errorMap: () => ({
      message: 'Gender must be one of Male, Female, or Others',
    }),
  }),
  DOB: z.string().nonempty('DOB is required'),
  email: z
    .string()
    .email({ message: 'Email must be a valid format' })
    .nonempty('Email is required'),
  phone: z
    .string()
    .length(11, { message: 'Phone must be exactly 11 characters long' })
    .regex(/^\d+$/, { message: 'Phone must contain only numeric characters' }),
  emergencyPhone: z
    .string()
    .length(11, {
      message: 'Emergency Phone must be exactly 11 characters long',
    })
    .regex(/^\d+$/, {
      message: 'Emergency Phone must contain only numeric characters',
    }),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional()
    .refine((value) => value !== undefined, { message: 'Invalid Blood Group' }),
  presentAddress: z.string().nonempty('Present Address is required'),
  permanentAddress: z.string().nonempty('Permanent Address is required'),
  guardian: z.object({
    fatherName: z.string().nonempty('Father Name is required'),
    fatherOccupation: z.string().nonempty('Father Occupation is required'),
    fatherPhone: z
      .string()
      .length(11, {
        message: 'Father Phone must be exactly 11 characters long',
      })
      .regex(/^\d+$/, {
        message: 'Father Phone must contain only numeric characters',
      }),
    motherName: z.string().nonempty('Mother Name is required'),
    motherOccupation: z.string().nonempty('Mother Occupation is required'),
    motherPhone: z
      .string()
      .length(11, {
        message: 'Mother Phone must be exactly 11 characters long',
      })
      .regex(/^\d+$/, {
        message: 'Mother Phone must contain only numeric characters',
      }),
  }),
  localGuardian: z.object({
    name: z.string().nonempty('Name is required'),
    occupation: z.string().nonempty('Occupation is required'),
    phone: z
      .string()
      .length(11, { message: 'Phone must be exactly 11 characters long' })
      .regex(/^\d+$/, {
        message: 'Phone must contain only numeric characters',
      }),
    address: z.string().nonempty('Address is required'),
  }),
  profileImg: z.string().nonempty('Profile Img is required'),
  isActive: z.enum(['Active', 'Inactive'], {
    errorMap: () => ({ message: 'isActive must be either Active or Inactive' }),
  }),
  isDeleted: z.boolean(),
});

export default zodValidationSchema;
