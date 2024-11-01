import React from 'react';
import { GraduationCap, Book } from 'lucide-react';
import type { Student } from '../types';

interface StudentListProps {
  students: Student[];
  onAddMark: (studentId: string) => void;
}

export function StudentList({ students, onAddMark }: StudentListProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <GraduationCap className="w-6 h-6 mr-2" />
          Students
        </h2>
        <div className="space-y-6">
          {students.map((student) => (
            <div
              key={student.id}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {student.name}
                  </h3>
                  <p className="text-sm text-gray-600">ID: {student.id}</p>
                  <p className="text-sm text-gray-600">{student.email}</p>
                  <p className="text-sm text-gray-600">Course: {student.course}</p>
                </div>
                <button
                  onClick={() => onAddMark(student.id)}
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
                >
                  Add Marks
                </button>
              </div>
              {student.marks.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Book className="w-4 h-4 mr-1" />
                    Marks
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {student.marks.map((mark, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-2 rounded text-sm flex justify-between"
                      >
                        <span className="text-gray-600">{mark.subject}</span>
                        <span className="font-medium">{mark.score}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}