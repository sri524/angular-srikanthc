export interface Empdetails {
  id: number;
  First_Name: string;
  Last_Name: string;
  Username: string;
  email: string;
  gender: string;
  DateOfBirth: Date;
  City: string;
  Country: string;
  Photourl: string;
  Password: string;
}

export interface Login{
  Username: string;
  Password: string;
}