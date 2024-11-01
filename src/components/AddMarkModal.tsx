import React, { useState } from 'react';
import type { AddMarkFormData } from '../types';

interface AddMarkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AddMarkFormData) => void;
}

export function AddMarkModal({ isOpen, onClose, onSubmit }: AddMarkModalProps) {
  const [formData, setFormData] = useState<AddMarkFormData>({
    subject: '',
    score: 0
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ subject: '', score: 0 });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Marks</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="score" className="block text-sm font-medium text-gray-700">
              Score (%)
            </label>
            <input
              type="number"
              id="score"
              required
              min="0"
              max="100"
              value={formData.score}
              onChange={(e) => setFormData({ ...formData, score: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Mark
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}