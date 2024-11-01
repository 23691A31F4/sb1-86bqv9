import React, { useState } from 'react';
import { StudentForm } from './components/StudentForm';
import { StudentList } from './components/StudentList';
import { AddMarkModal } from './components/AddMarkModal';
import type { Student, AddMarkFormData } from './types';

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddStudent = (studentData: Omit<Student, 'marks'>) => {
    setStudents([...students, { ...studentData, marks: [] }]);
  };

  const handleAddMark = (studentId: string) => {
    setSelectedStudentId(studentId);
    setIsModalOpen(true);
  };

  const handleMarkSubmit = (markData: AddMarkFormData) => {
    if (!selectedStudentId) return;

    setStudents(students.map(student => 
      student.id === selectedStudentId
        ? { ...student, marks: [...student.marks, markData] }
        : student
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Faculty Portal</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StudentForm onSubmit={handleAddStudent} />
            <StudentList students={students} onAddMark={handleAddMark} />
          </div>
        </div>
      </div>
      <AddMarkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleMarkSubmit}
      />
    </div>
  );
}

export default App;