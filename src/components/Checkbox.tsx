import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <div className="relative w-5 h-5">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className={`w-5 h-5 border-2 rounded ${checked ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
          {checked && <Check className="w-4 h-4 text-white" />}
        </div>
      </div>
      <span className="ml-2 text-sm">{label}</span>
    </label>
  );
}