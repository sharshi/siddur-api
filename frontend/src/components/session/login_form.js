import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { FaceIdError } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
  },

  form: {
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const LoginForm = ({ login, errors, history, clearErrors }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { classes } = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      email,
      password
    };

    login(user, history);
  }

  useEffect(() => {
    if (errors) {
      Object.keys(errors).forEach(error => {
        showNotification({
          message: errors[error],
          color: 'red',
          icon: <FaceIdError />,
          position: "top-center",
          onClose: () => clearErrors(),
        });
      });
    }
  }, [errors]);

  const renderErrors = () => {
    return (
      <ul>
        {errors ? Object.keys(errors).map((error, i) => (
          <li key={`error-${i}`}>{errors[error]}</li>
        )) : ""}
      </ul>
    );
  }
    return <div className={classes.wrapper}>
      <Paper onSubmit={handleSubmit} className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
          Welcome back to Shafeh!
        </Title>
        <TextInput
          label="Email address"
          placeholder="Email" size="md" 
          type="text"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
        />
        <PasswordInput
          type="password"
          label="Password"
          placeholder="Your password" 
          mt="md"
          size="md"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
          />
        <br />
        <Button 
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          fullWidth
          mt="xl"
          size="md"
        >
          Login
        </Button>
        {renderErrors()}
        <Text align="center" mt="md">
          Did you mean to <Link to="signup">signup</Link>?
        </Text>
      </Paper>
    </div>
  }


export default withRouter(LoginForm);
