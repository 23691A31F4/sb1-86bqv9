import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import type { Student } from '../types';

interface StudentFormProps {
  onSubmit: (student: Omit<Student, 'marks'>) => void;
}

export function StudentForm({ onSubmit }: StudentFormProps) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    course: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ id: '', name: '', email: '', course: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Student</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
            Student ID
          </label>
          <input
            type="text"
            id="id"
            required
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="course" className="block text-sm font-medium text-gray-700">
            Course
          </label>
          <input
            type="text"
            id="course"
            required
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Add Student
        </button>
      </div>
    </form>
  );
}