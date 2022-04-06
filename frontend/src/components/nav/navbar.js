import React, { useState } from 'react';
import {
  createStyles,
  Header,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Button,
  Container,
} from '@mantine/core';
import {
  Logout,
  Login,
  UserPlus,
  ChevronDown,
} from 'tabler-icons-react';
import Tabs, { MobileTabs } from './tabs_container';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
      }`,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  userMenu: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  sessionButton: {
    [theme.fn.smallerThan('sm')]: {
      fontSize: 0,
    }
  },

  dropdown: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export default function HeaderTabs({ user, ...props }) {
  const { classes, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <Header height={56}>
      <Container>
        <div className={classes.inner}>
          <Text component={Link} to='/' >Shafeh.org</Text>

            <MobileTabs />
            <Tabs />

            {props.loggedIn ?
            <>
              <Menu
                size={260}
                placement="end"
                transition="pop-top-right"
                className={classes.userMenu}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                control={
                  <UnstyledButton
                    className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                  >
                    <Group spacing={7}>
                          <Avatar alt={user.username} radius="xl" size={20} />
                          <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                            {user.name}
                          </Text>
                          <ChevronDown size={12} />
                    </Group>
                  </UnstyledButton>
                }
                >
                <Menu.Item onClick={props.logout} icon={<Logout size={14} />}>Logout</Menu.Item>
              </Menu>
              </>
              : <>
              <Group>
                <Button className={classes.sessionButton} component={Link} to="/login" leftIcon={<Login size={14} />} variant="white">Login</Button>
                <Button className={classes.sessionButton} component={Link} to="/signup" leftIcon={<UserPlus size={14}/>}>Signup</Button>
              </Group>
            </>
          }
        </div>
      </Container>
    </Header>
  );
}