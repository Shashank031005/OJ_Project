const { execSync } = require('child_process');

try {
  console.log('Starting Vite development server...');
  execSync('npx vite', { stdio: 'inherit' });
} catch (error) {
  console.error('Error starting Vite:', error.message);
} 