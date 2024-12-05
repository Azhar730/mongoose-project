import { Model } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherPhone: string;
  motherName: string;
  motherOccupation: string;
  motherPhone: string;
};
export type TLocalGuardian = {
  name: string;
  occupation: string;
  phone: string;
  address: string;
};
export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  gender: 'Male' | 'Female' | 'Others';
  DOB: string;
  email: string;
  phone: string;
  emergencyPhone: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg: string;
  isActive: 'Active' | 'Inactive';
  isDeleted: boolean;
};
// implement custom static method
export interface StudentModel extends Model<TStudent> {
  isUserExist(id: string): Promise<TStudent | null>;
}
// // implement custom instance method
// export interface TStudentMethods {
//   isUserExist(id:string): Promise<TStudent|null>
// }
// export type StudentModel = Model<TStudent, Record<string,never>, TStudentMethods>;
