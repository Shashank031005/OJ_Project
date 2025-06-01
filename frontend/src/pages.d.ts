// Declare module for pages to fix TypeScript import issues
declare module './pages/*' {
  import React from 'react';
  const Component: React.ComponentType<any>;
  export default Component;
}

declare module './pages/ProblemDetailPage' {
  import React from 'react';
  const Component: React.ComponentType<any>;
  export default Component;
}

declare module './pages/LeaderboardPage' {
  import React from 'react';
  const Component: React.ComponentType<any>;
  export default Component;
}

declare module './pages/LoginPage' {
  import React from 'react';
  const Component: React.ComponentType<any>;
  export default Component;
}

declare module './pages/RegisterPage' {
  import React from 'react';
  const Component: React.ComponentType<any>;
  export default Component;
}

declare module './pages/NotFoundPage' {
  import React from 'react';
  const Component: React.ComponentType<any>;
  export default Component;
} 