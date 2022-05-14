import {Header, Burger, Grid,Container, Anchor} from '@mantine/core';
import { createStyles } from '@mantine/core';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navToggledSelector } from '../../state/selectors/pageActions';
import { toggleNav } from '../../state/slices/pageActionsSlice';
import { Link } from 'react-router-dom';

const useStyles = createStyles(theme => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
      marginRight: '15px',
    },
  },
  title: {
    [theme.fn.smallerThan('sm')]: {
      marginLeft: '1.5em',
    },
    margin: '0',
    marginLeft: '1em',
    fontSize: theme.fontSizes.lg,
    '&:hover': {
      textDecoration: 'none',
    }
  }
}))

export function HeaderSimple() {
  const {classes, cx} = useStyles();
  return (<>
    <div className={classes.header}>
      <Burg />
      <HeaderTitle />
    </div>
  </>);
}

function HeaderTitle() {
  const {classes, cx} = useStyles();
  return (<>
    <h1 className={classes.title}>
      <Anchor component={Link} to="/">
        <h2>Horizon Abacus</h2>
      </Anchor>
    </h1>
  </>);
}

function Burg() {
    const {classes, cx} = useStyles();
    const opened = useSelector(navToggledSelector);
    const dispatch = useDispatch();
    const toggle = () => dispatch(toggleNav());
    
    return (<>
      <Burger
        opened={opened}
        onClick={() => toggle()}
        className={classes.burger}
        size="sm"
      />
    </>);
}