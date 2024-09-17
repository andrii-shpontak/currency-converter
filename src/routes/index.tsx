import { Heading, ThemePanel } from '@radix-ui/themes';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <Heading>Main page</Heading>
      <ThemePanel />
    </>
  ),
});
