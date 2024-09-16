import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/custom')({
  component: () => <h1>Customization</h1>,
});
