// src/components/ExerciseItem.jsx
import '../styles/ExerciseItem.css';

import React from 'react';



function ExerciseItem({ exercise, onEdit, onDelete }) {
  return (
    <li className='exercise-item'>
  <div className='exercise-header'>
    <strong className='exercise-title'>{exercise.name}</strong>
    <p className='exercise-type'>{exercise.type}</p>
  </div>

  <div className='exercise-stats'>
    <div><strong>Peso:</strong> {exercise.weight}kg</div>
    <div><strong>Repetições:</strong> {exercise.reps}</div>
  </div>

  <div className='exercise-buttons'>
    <button onClick={onEdit}>Editar</button>
    <button onClick={onDelete}>Remover</button>
  </div>
</li>

  );
}
  
  export default ExerciseItem;