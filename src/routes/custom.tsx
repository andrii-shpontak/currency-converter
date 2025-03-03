import { ThemePanel } from '@radix-ui/themes';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/custom')({
  component: ThemePanel,
});
