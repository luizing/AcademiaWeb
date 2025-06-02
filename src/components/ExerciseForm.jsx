// src/components/ExerciseForm.jsx
import React, { useState, useEffect } from 'react';

function ExerciseForm({ onSave, onCancel, existing }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  useEffect(() => {
    if (existing) {
      setName(existing.name);
      setType(existing.type);
      setWeight(existing.weight);
      setReps(existing.reps);
    } else {
      setName('');
      setType('');
      setWeight('');
      setReps('');
    }
  }, [existing]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !type || !weight || !reps) return;

    onSave({ name, type, weight, reps });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Nome do exercício"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tipo (cardio, força...)"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="number"
        placeholder="Peso (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Repetições"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <button type="submit">{existing ? 'Salvar' : 'Adicionar'}</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
}

export default ExerciseForm;
