'use client';

import { useState } from 'react';

export default function TeamGrid({ teamMembers = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          MEET OUR TEAM{' '}
          <sup style={styles.superscript}>( KRIYA 2025 )</sup>
        </h1>
      </div>

      <div style={styles.grid}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={
              hoveredIndex === index
                ? { ...styles.cardBase, ...styles.cardafterhover }
                : { ...styles.cardBase, ...styles.cardbefore }
            }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div style={styles.cardBody}>
              <img
                src={member.image} // Replace with actual image URLs
                style={styles.image}
                alt={member.name}
              />
              {hoveredIndex === index && (
                <div>
                <div style={styles.textWrappe}>
                  <div style={styles.role}>{member.role}</div>
                </div>
                <div style={styles.textWrapper}>
                  <div style={styles.name}>{member.name}</div>
                </div>
                </div>
              )}
              <div style={styles.buttonWrapper}>
                <button style={styles.button}>{'>'}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#d3d3d3',
    padding: '20px',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  },
  cardBase: {
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
    width: '200px',
    height: '200px',
    padding: '0',
    transition: 'all 0.3s ease',
  },
  cardbefore: {
    background: '#d3d3d3',
  },
  cardafterhover: {
    background: 'linear-gradient(135deg, #e5d3ff, #ffffff)',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  cardBody: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  image: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '70%',
    height: '70%',
    objectFit: 'cover',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: '56%',
    right: '15%',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  textWrappe: {
    position: 'absolute',
    bottom: '85%',
    right: '0%',
    padding:'2%',
    textAlign: 'right',
    backgroundColor:'#bf8aff'
  },
  textWrapper: {
    position: 'absolute',
    bottom: '70%',
    right: '0%',
    padding:'3%',
    textAlign: 'right',
    backgroundColor:'white'
  },
  role: {
    fontSize: '0.6rem',
    fontWeight: 'bold',
    color: '#6a1b9a', 
    marginBottom: '0px',
  },
  name: {
    fontSize: '1.0rem',

    fontWeight: 'bold',
    color: '#000', // Adjust color as needed
  },
};
