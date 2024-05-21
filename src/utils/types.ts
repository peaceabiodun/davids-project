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
