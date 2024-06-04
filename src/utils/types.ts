export type BreadcrumbType = { name: string; path: string };

export type StudentTableDataType = {
  key: string;
  sn: string;
  regNo: string;
  fullname: string;
  matric: string;
  department: string;
  gender: string;
  guardian: string;
  room: string;
};

export type YearTableDataType = {
  key: string;
  sn: string;
  courseCode: string;
  attendance: string;
  courseTitle: string;
  status: string;
};

export type CourseTableDataType = {
  key: string;
  sn: string;
  courseCode: string;
  courseTitle: string;
  department: string;
  level: string;
  attendance: string;
};

export type FilterOptionsType = {
  filter: string;
  options: string[];
};

export type RegistrationFormType = {
  matric_no: string;
  department: string;
  course: string;
  level: string;
  hostel_wing: string;
  room_no: string;
  guardian: {
    first_name: string;
    last_name: string;
    phone_no: string;
    relationship: string;
  };
};

export type StudentDetailsType = {
  id: number;
  created_at: string;
  matric_no: string;
  department: string;
  course: string;
  level: string;
  hostel_wing: string;
  room_no: string;
  guardian: {
    first_name: string;
    last_name: string;
    phone_no: string;
    relationship: string;
  };
  user_id: string;
};
