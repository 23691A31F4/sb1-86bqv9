export interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  marks: {
    subject: string;
    score: number;
  }[];
}

export interface AddMarkFormData {
  subject: string;
  score: number;
}