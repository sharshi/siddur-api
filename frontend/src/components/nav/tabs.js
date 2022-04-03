import React from "react";
import { Link } from "react-router-dom";
import {
    Group,
    createStyles,
    Menu,
    Center,
} from "@mantine/core"
import { ChevronDown } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    links: {
        [theme.fn.smallerThan('sm')]: {
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

export default  ({ tabs, loggedIn }) => {
    const { classes } = useStyles();
    const items = tabs.map((link) => {
        if (!loggedIn && !link.showWhenLoggedOut) return '';
        return (
            <a
                key={link.label}
                href={link.url}
                className={classes.link}
            >
                {link.label}
            </a>
        );
    });


    return (
        <Group spacing={5} className={classes.links}>
            {items}
        </Group>
    );
}
