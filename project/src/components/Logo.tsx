import React from 'react';
import { Code2, Terminal } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Terminal className="h-8 w-8 text-blue-600" />
        <Code2 className="h-4 w-4 text-white absolute bottom-0 right-0" />
      </div>
      <div className="font-bold text-xl">
        <span className="text-blue-600">monal</span>
        <span className="text-gray-800">.tech</span>
        <p className="text-balance"> Made by team karzo..</p>
      </div>
      
    </div>
  );
}