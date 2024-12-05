import { Request, Response } from 'express';
import { studentServices } from './student.service';
import { number, string } from 'joi';
import joiValidationSchema from './student.joi';
import { ifError } from 'assert';
import zodValidationSchema from './student.zod';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // data validation using zod
    try {
      zodValidationSchema.parse(studentData); // Validates the data
      console.log('Validation passed');
    } catch (error: any) {
      console.error('Validation failed:', error.errors);
    }

    // data validation using joi
    // const { error, value } = joiValidationSchema.validate(studentData);
    // const result = await studentServices.createStudentIntoDB(value);
    // if (error)
    //   return res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     data: error,
    //   });

    // mongoose validation
    const { error, value } = joiValidationSchema.validate(studentData);
    const result = await studentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student created Successfully',
      data: result,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Something went wrong',
      data: error,
    });
  }
};
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrieve successfully',
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: true,
      message: 'Something went wrong',
      data: error,
    });
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Students are retrieve successfully',
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: true,
      message: 'Something went wrong',
      data: error,
    });
  }
};
const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Students are deleted successfully',
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: true,
      message: 'Something went wrong',
      data: error,
    });
  }
};
export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteSingleStudent
};
