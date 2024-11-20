import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    const result = await StudentServices.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are Retrieve Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const {studentId} = req.params
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Students are Retrieve Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudents
};
