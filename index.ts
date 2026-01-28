```bash
npx create-next-app@latest my-nextjs-app-test-1 --typescript
cd my-nextjs-app-test-1
```

**Add a simple API route:**

Create a new file at `pages/api/hello.ts`:

```typescript
// pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Hello World' });
}
```

**Modify the main page:**

Edit the `pages/index.tsx` file to call the API and display the message:

```typescript
// pages/index.tsx
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setMessage(data.message);
    };
    fetchMessage();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Home;
```

**Run the application:**

In the terminal, run:

```bash
npm run dev
```

Your Next.js fullstack application is now set up! Visit `http://localhost:3000` to see "Hello World" displayed.