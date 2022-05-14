import { AppShell } from '@mantine/core';
import { NavbarSimple } from './components/common/Nav';
import { HeaderSimple } from './components/common/Header';
import { Outlet } from 'react-router';


export function _AppShell() {
  return (
    <AppShell
      padding="md"
      navbar={<NavbarSimple />}
      header={<HeaderSimple />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Outlet />
    </AppShell>
  );
}
