import React from "react";
import AppCards from "./app_cards";
import { createStyles, Text, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,
    marginTop: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));
const MainPage = () => {
  const { classes } = useStyles();
  return (
    <>
      <Title className={classes.title}>
        Shafeh: <span className={classes.highlight}>Your</span> Bookcase.
      </Title>

      <Text color="dimmed" mt="md">
        We provide resources for common Jewish practices.
      </Text>

      <AppCards />
    </>
  );
}

export default MainPage;