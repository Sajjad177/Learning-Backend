// TODO : Batter version ----------------------------- -> :

import StudentModel from '../student.schema';
import { Student } from './student.interface';

const createStudentIntoDB = async (student: Student) => {
  try {
    const result = await StudentModel.create(student);
    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error creating student: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred while creating student');
    }
  }
};

const getAllStudentsFromDB = async () => {
  try {
    const result = await StudentModel.find();
    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error retrieving students: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred while retrieving students');
    }
  }
};

const getSingleStudentFromDB = async (id: string) => {
  try {
    const result = await StudentModel.findOne({ id });
    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error retrieving student: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred while retrieving student');
    }
  }
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};

// TODO : Old version ------------------------------- ->

// import StudentModel from '../student.schema';
// import { Student } from './student.interface';

// const createStudentIntoDB = async (student: Student) => {
//   const result = await StudentModel.create(student);
//   return result;
// };

// const getAllStudentsFromDB = async () => {
//   const result = await StudentModel.find();
//   return result;
// };

// export const StudentServices = {
//   createStudentIntoDB,
//   getAllStudentsFromDB,
// };
