import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStyles, Navbar, Anchor } from '@mantine/core';
import {
  Receipt2,
  Logout,
} from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { toggleNav } from '../../state/slices/pageActionsSlice';
import { navToggledSelector } from '../../state/selectors/pageActions';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
	header: {
	  paddingBottom: theme.spacing.md,
	  marginBottom: theme.spacing.md * 1.5,
	  borderBottom: `1px solid ${
		theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
	  }`,
	},

	footer: {
	  paddingTop: theme.spacing.md,
	  marginTop: theme.spacing.md,
	  borderTop: `1px solid ${
		theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
	  }`,
	},

	link: {
	  ...theme.fn.focusStyles(),
	  display: 'flex',
	  alignItems: 'center',
	  textDecoration: 'none',
	  fontSize: theme.fontSizes.sm,
	  color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
	  padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
	  borderRadius: theme.radius.sm,
	  fontWeight: 500,

	  '&:hover': {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		textDecoration: 'none',

		[`& .${icon}`]: {
		  color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		},
	  },
	},

	linkIcon: {
	  ref: icon,
	  color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
	  marginRight: theme.spacing.sm,
	},

	linkActive: {
	  '&, &:hover': {
		backgroundColor:
		  theme.colorScheme === 'dark'
			? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
			: theme.colors[theme.primaryColor][0],
		color: theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][7],
		[`& .${icon}`]: {
		  color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 7],
		},
	  },
	},
  };
});

const data = [
  { link: 'enquiry', label: 'Enquiry Generator', icon: Receipt2 },
];

export function NavbarSimple() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
	<Anchor
	  className={cx(classes.link, { [classes.linkActive]: item.label === active })}
	  href={item.link}
	  key={item.label}
	  component = {Link}
	  to={item.link}
	>
	  <item.icon className={classes.linkIcon} />
	  <span>{item.label}</span>
	</Anchor>
  ));

  const navToggled = useSelector(navToggledSelector);

  return (
	<Navbar hidden={!navToggled} height={700} width={{ sm: 300 }} p="md">
	  <Navbar.Section grow>
		{links}
	  </Navbar.Section>

	  <Navbar.Section className={classes.footer}>
		<a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
		  <Logout className={classes.linkIcon} />
		  <span>Logout</span>
		</a>
	  </Navbar.Section>
	</Navbar>
  );
}