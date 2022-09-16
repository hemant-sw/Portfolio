import React from 'react';
import "./skillcard.css";

export default function SkillCard({skill}) {
  return (
    <div className='skill-card'>
        <div className='skill-icon'>{skill.icon}</div>
        <label className='skill-name'>{skill.names}</label>
    </div>
  )
}
