import '../styles/Exercise.css';
import React, { useState } from 'react';
import ExerciseItem from './ExerciseItem';
import ExerciseForm from './ExerciseForm';

function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const openModalForAdd = () => {
    setEditIndex(null);
    setIsModalOpen(true);
  };

  const openModalForEdit = (index) => {
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (exercise) => {
    if (editIndex !== null) {
      const updated = [...exercises];
      updated[editIndex] = exercise;
      setExercises(updated);
    } else {
      setExercises([...exercises, exercise]);
    }
    closeModal();
  };

  return (
    <>
      <div>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ margin: 0 }}>Meus Exercícios</h2>
        </div>

        {exercises.length === 0 && (
          <p style={{ textAlign: 'center', color: '#555', marginTop: '30px' }}>
            Ainda não há exercícios.
          </p>
        )}

        <ul className='exercise-list'>
          {exercises.map((exercise, index) => (
            <ExerciseItem
              key={index}
              exercise={exercise}
              onEdit={() => openModalForEdit(index)}
              onDelete={() => {
                const updated = exercises.filter((_, i) => i !== index);
                setExercises(updated);
              }}
            />
          ))}
        </ul>
      </div>

      <button
        onClick={openModalForAdd}
        className="floating-add-button"
        aria-label="Adicionar exercício"
      >
        +
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
          
            <ExerciseForm
              onSave={handleSave}
              onCancel={closeModal}
              existing={editIndex !== null ? exercises[editIndex] : null}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Exercises;
