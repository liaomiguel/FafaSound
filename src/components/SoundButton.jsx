import React from 'react';

const SoundButton = ({ sound, isActive, onClick }) => {
  const className = [
    'sound-btn',
    isActive ? 'active' : '',
    sound.isNew ? 'sound-btn-new' : ''
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={className}
      onClick={() => onClick(sound.id)}
    >
      {sound.isNew && <span className="sound-badge">NUEVO</span>}
      <span className="material-icons-outlined">{sound.icon}</span>
      {sound.label}
    </button>
  );
};

export default React.memo(SoundButton);
