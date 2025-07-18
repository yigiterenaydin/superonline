"use client";

import { useState, useEffect } from 'react';
import { HiDocumentText, HiTrash, HiPlus } from 'react-icons/hi';

interface Note {
  id: string;
  text: string;
  timestamp: Date;
}

const NotesWidget = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('quickNotes');
    if (savedNotes) {
      try {
        const parsedNotes = JSON.parse(savedNotes).map((note: any) => ({
          ...note,
          timestamp: new Date(note.timestamp)
        }));
        setNotes(parsedNotes);
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    }
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('quickNotes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim()) {
      const note: Note = {
        id: Date.now().toString(),
        text: newNote.trim(),
        timestamp: new Date()
      };
      setNotes([note, ...notes]);
      setNewNote('');
    }
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('de-DE', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="w-full">
      {!isExpanded ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <HiDocumentText className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">
              {notes.length} Notiz{notes.length !== 1 ? 'en' : ''}
            </span>
          </div>
          <button
            onClick={() => setIsExpanded(true)}
            className="p-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            <HiPlus className="w-4 h-4 text-white" />
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Add new note */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addNote()}
              placeholder="Neue Notiz..."
              className="flex-1 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg border border-slate-600 focus:outline-none focus:border-purple-400"
            />
            <button
              onClick={addNote}
              className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <HiPlus className="w-4 h-4" />
            </button>
          </div>

          {/* Notes list */}
          <div className="max-h-32 overflow-y-auto space-y-2">
            {notes.slice(0, 3).map((note) => (
              <div key={note.id} className="flex items-start space-x-2 p-2 bg-slate-800 rounded-lg">
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm break-words">{note.text}</p>
                  <p className="text-slate-400 text-xs mt-1">
                    {formatTime(note.timestamp)}
                  </p>
                </div>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="p-1 text-slate-400 hover:text-red-400 transition-colors"
                >
                  <HiTrash className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          {notes.length > 3 && (
            <p className="text-slate-400 text-xs text-center">
              +{notes.length - 3} weitere Notizen
            </p>
          )}

          <button
            onClick={() => setIsExpanded(false)}
            className="w-full py-2 bg-slate-700 text-white text-sm rounded-lg hover:bg-slate-600 transition-colors"
          >
            Schließen
          </button>
        </div>
      )}
    </div>
  );
};

export default NotesWidget; 