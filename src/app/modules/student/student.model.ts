import { model, Schema } from 'mongoose';
import { Guardian, LocalGuardian, Student } from './student.interface';

const GuardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherPhone: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherPhone: { type: String, required: true },
});
const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
});

const StudentSchema = new Schema<Student>({
  id: { type: Number },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  gender: ['Male', 'Female'],
  DOB: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  emergencyPhone: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImg: { type: String, required: true },
  isActive: ['Active', 'Inactive'],
});

export const StudentModel = model<Student>('Student', StudentSchema);
