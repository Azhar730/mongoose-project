import Joi from 'joi';

const joiValidationSchema = Joi.object({
  id: Joi.number().required().messages({
    'any.required': 'ID is required',
  }),
  name: Joi.object({
    firstName: Joi.string()
      .trim()
      .regex(/^[A-Z][a-zA-Z]*$/)
      .required()
      .messages({
        'any.required': 'First Name is required',
        'string.pattern.base':
          'First Name must start with a capital letter and contain only alphabetic characters',
      }),
    middleName: Joi.string().optional(),
    lastName: Joi.string().required().messages({
      'any.required': 'Last Name is required',
    }),
  }).required(),
  gender: Joi.string().valid('Male', 'Female', 'Others').required().messages({
    'any.required': 'Gender is required',
    'any.only': '{#value} is not a valid gender',
  }),
  DOB: Joi.string().required().messages({
    'any.required': 'DOB is required',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': '{#value} is not a valid email format',
  }),
  phone: Joi.string().length(11).pattern(/^\d+$/).required().messages({
    'any.required': 'Phone is required',
    'string.length': 'Phone must be 11 characters long',
    'string.pattern.base': 'Phone must contain only numeric characters',
  }),
  emergencyPhone: Joi.string().length(11).pattern(/^\d+$/).required().messages({
    'any.required': 'Emergency Phone is required',
    'string.length': 'Emergency Phone must be 11 characters long',
    'string.pattern.base':
      'Emergency Phone must contain only numeric characters',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional()
    .messages({
      'any.only': '{#value} is not a valid blood group',
    }),
  presentAddress: Joi.string().required().messages({
    'any.required': 'Present Address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'any.required': 'Permanent Address is required',
  }),
  guardian: Joi.object({
    fatherName: Joi.string().required().messages({
      'any.required': 'Father Name is required',
    }),
    fatherOccupation: Joi.string().required().messages({
      'any.required': 'Father Occupation is required',
    }),
    fatherPhone: Joi.string().length(11).pattern(/^\d+$/).required().messages({
      'any.required': 'Father Phone is required',
      'string.length': 'Father Phone must be 11 characters long',
      'string.pattern.base':
        'Father Phone must contain only numeric characters',
    }),
    motherName: Joi.string().required().messages({
      'any.required': 'Mother Name is required',
    }),
    motherOccupation: Joi.string().required().messages({
      'any.required': 'Mother Occupation is required',
    }),
    motherPhone: Joi.string().length(11).pattern(/^\d+$/).required().messages({
      'any.required': 'Mother Phone is required',
      'string.length': 'Mother Phone must be 11 characters long',
      'string.pattern.base':
        'Mother Phone must contain only numeric characters',
    }),
  }).required(),
  localGuardian: Joi.object({
    name: Joi.string().required().messages({
      'any.required': 'Name is required',
    }),
    occupation: Joi.string().required().messages({
      'any.required': 'Occupation is required',
    }),
    phone: Joi.string().length(11).pattern(/^\d+$/).required().messages({
      'any.required': 'Phone is required',
      'string.length': 'Phone must be 11 characters long',
      'string.pattern.base': 'Phone must contain only numeric characters',
    }),
    address: Joi.string().required().messages({
      'any.required': 'Address is required',
    }),
  }).required(),
  profileImg: Joi.string().required().messages({
    'any.required': 'Profile Img is required',
  }),
  isActive: Joi.string().valid('Active', 'Inactive').required().messages({
    'any.required': 'isActive is required',
    'any.only': '{#value} is not valid',
  }),
});
export default joiValidationSchema;
