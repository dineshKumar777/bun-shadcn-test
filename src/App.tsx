import { useState } from 'react';
import { Button } from './components/ui/button';
import { AlertDialogDemo } from './components/shadcnComponents/AlertDialog';
import { Separator } from './components/ui/separator';
import MDXContentExample from './input.mdx';

function App() {
  const [count, setCount] = useState(0);

  function handleCountUpdate() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>
        <p className="text-sm font-medium leading-none">
          This is a simple Vite React Typescript starterpack
        </p>
        <h2>testing skdjfklsdfj</h2>
        <Separator className="my-4" />
        <MDXContentExample />
        <Separator className="my-4" />

        <div className="flex items-center space-x-2 text-sm">
          <Button onClick={handleCountUpdate}>Inc Count: {count}</Button>
          <Separator orientation="vertical" />
          <AlertDialogDemo />
        </div>
        <Separator className="my-4" />
      </div>
    </>
  );
}

export default App;
