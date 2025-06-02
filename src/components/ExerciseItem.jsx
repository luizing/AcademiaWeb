// src/components/ExerciseItem.jsx
import '../styles/ExerciseItem.css';

import React from 'react';



function ExerciseItem({ exercise, onEdit, onDelete }) {
    return (
      <li className='exercise-item'>
        <div className='exercise-header'>
          <strong className='exercise-title'>{exercise.name}</strong>
          <div className='exercise-buttons'>
            <button onClick={onEdit}>Editar</button>
            <button onClick={onDelete}>Remover</button>
          </div>
        </div>
  
        <p className='exercise-type'>{exercise.type}</p>
  
        <div className='exercise-stats'>
          <span><strong>Peso:</strong> {exercise.weight}kg</span>
          <span><strong>Repetições:</strong> {exercise.reps}</span>
        </div>
      </li>
    );
  }
  