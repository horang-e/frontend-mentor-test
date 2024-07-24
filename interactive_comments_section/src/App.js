import React, { Suspense } from 'react';
import { CommentProvider } from './providers';
import Main from './pages/Main';

export default function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <CommentProvider>
        <Main />
      </CommentProvider>
    </Suspense>
  );
}
