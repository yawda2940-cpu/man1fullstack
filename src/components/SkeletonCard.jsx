import React from 'react';

export default function SkeletonCard() {
  return (
    <div style={{ 
      border: '1px solid #e5e7eb', 
      borderRadius: '12px', 
      padding: '16px', 
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Gambar Kerangka */}
      <div className="skeleton-box skeleton-img"></div>
      
      {/* Judul Kerangka */}
      <div className="skeleton-box skeleton-title"></div>
      
      {/* Paragraf Kerangka */}
      <div className="skeleton-box skeleton-text"></div>
      <div className="skeleton-box skeleton-text"></div>
      <div className="skeleton-box skeleton-text-short"></div>
    </div>
  );
}