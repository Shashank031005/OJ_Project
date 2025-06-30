import { useEffect, useState } from 'react';
import API from '../api/axios';
import { Link } from 'react-router-dom';

export default function ProblemList() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    API.get('problems/').then(res => setProblems(res.data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Problems</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {problems.map(p => (
          <li key={p.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <Link to={`/problems/${p.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
