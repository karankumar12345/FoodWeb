import React from 'react';
import { MdError } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Loader() {
  return (
    <section className='NotFound'>
      <main style={{ textAlign: 'center', paddingTop: '100px' }}>
        <div>
          <h1 style={{ fontSize: '3rem' ,height:'4rem'}}>
            <MdError />
          </h1>
          <h1 style={{ fontSize: '3rem' }}>404</h1>
        </div>
        <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Page not found. Please refresh the page.</p>
        <Link to="/" style={{ fontSize: '1.5rem', textDecoration: 'none', color: '#007bff' , border:'2px solid red'}}>Go to Home</Link>
      </main>
    </section>
  );
}

export default Loader;

