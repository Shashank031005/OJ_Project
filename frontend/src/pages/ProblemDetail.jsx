    import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../api/axios';

export default function ProblemDetail() {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState('');

  useEffect(() => {
    API.get(`problems/${id}/`).then(res => setProblem(res.data));
  }, [id]);

  const handleSubmit = async () => {
    try {
      await API.post('submissions/', {
        problem_id: id,
        code,
        language: 'python'
      });
      alert('Submitted!');
    } catch {
      alert('Failed to submit');
    }
  };

  if (!problem) return <div style={{ padding: '20px' }}>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{problem.title}</h2>
      <p style={{ whiteSpace: 'pre-wrap', marginBottom: '20px' }}>{problem.description}</p>
      <textarea
        value={code}
        onChange={e => setCode(e.target.value)}
        rows={10}
        style={{ width: '100%', marginBottom: '20px', padding: '10px' }}
      />
      <button onClick={handleSubmit} style={{ padding: '10px 20px' }}>Submit</button>
    </div>
  );
}
