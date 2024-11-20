export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherPhone: string;
  motherName: string;
  motherOccupation: string;
  motherPhone: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  phone: string;
  address: string;
};

export type Student = {
  id: number;
  name: UserName;
  gender: 'Male' | 'Female';
  DOB: string;
  email: string;
  phone: string;
  emergencyPhone: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg: string;
  isActive: 'Active' | 'Inactive';
};
