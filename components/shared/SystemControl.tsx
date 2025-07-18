"use client";

import React, { useState } from 'react';
import { HiMoon, HiRefresh, HiLockClosed, HiLightningBolt } from 'react-icons/hi';

const SystemControl = () => {
  const [isExecuting, setIsExecuting] = useState<string | null>(null);

  const executeCommand = async (command: string) => {
    if (isExecuting) return;
    setIsExecuting(command);
    
    try {
      const response = await fetch('/api/system-control', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command }),
      });

      if (!response.ok) {
        const data = await response.json();
        console.error(`Failed to execute command '${command}':`, data.error);
      }
    } catch (error) {
      console.error('Error executing command:', error);
    } finally {
      setTimeout(() => setIsExecuting(null), 1000);
    }
  };

  const controls = [
    { cmd: 'sleep', title: 'Uyku', icon: <HiMoon />, color: 'text-blue-400' },
    { cmd: 'restart', title: 'Yeniden Başlat', icon: <HiRefresh />, color: 'text-yellow-400' },
    { cmd: 'shutdown', title: 'Kapat', icon: <HiLightningBolt />, color: 'text-red-500' },
    { cmd: 'lock', title: 'Kilitle', icon: <HiLockClosed />, color: 'text-green-400' },
  ];

  return (
    <div className="flex justify-center space-x-1 w-full">
      {controls.map(({ cmd, title, icon, color }) => (
        <button
          key={cmd}
          onClick={() => executeCommand(cmd)}
          title={title}
          className={`p-2 rounded-full transition-colors duration-200 ${isExecuting === cmd ? 'bg-gray-600 animate-pulse' : 'hover:bg-gray-800'}`}
          disabled={!!isExecuting}
        >
          {React.cloneElement(icon, { className: `w-4 h-4 ${color}` })}
        </button>
      ))}
    </div>
  );
};

export default SystemControl; 