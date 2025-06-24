import React from 'react';

export default function SchoolCard({ college, program, deadline }) {
  return (
    <div className="school-card">
      <div className="school-deadline">{deadline}</div>
      <div className="school-name">{college}</div>
      <div className="school-program">{program}</div>
      {/* 这里可以加编辑按钮 */}
    </div>
  );
}