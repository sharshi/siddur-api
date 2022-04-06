import React from "react";
import {
    Group,
    Menu,
    Text,
    Center,
    createStyles,
} from '@mantine/core';
import {
    ChevronDown,
} from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import { ITab } from "../../reducers/ui_reducer";

const useStyles = createStyles((theme) => ({
    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    linksMobile: {
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

interface ITabsProps {
    tabs: ITab[],
    loggedIn: boolean
}

export const MobileMenu = ({ tabs, loggedIn }: ITabsProps) => {
    const { classes } = useStyles();
    if (!tabs) {
        return null;
    }
    const filteredItems = tabs.filter((tab) => !loggedIn && !tab.showWhenLoggedOut);

    const menuItems = filteredItems.map((item) => {
        return <MenuItem key={item.label} item={item} />
    });

    return (
        <Menu
            className={classes.linksMobile}
            trigger="hover"
            delay={0}
            transitionDuration={0}
            placement="end"
            gutter={1}
            children={menuItems}
            control={<div
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                <Center
                    children={
                    <>
                        <span className={classes.linkLabel}>menu</span>
                        <ChevronDown size={12} />
                    </>
                    }
                />
            </div>}
        />
    );
}

export const Tabs = ({ tabs, loggedIn }: ITabsProps) => {
    const { classes } = useStyles();
    if (!tabs) {
        return null;
    }
    const filteredItems = tabs.filter((tab) => {
        if (!loggedIn && !tab.showWhenLoggedOut) {
            return false;
        } else {
            return true;
        }});

    const items = filteredItems.map((link: any) => {
        return (
            <Text
                component={Link}
                to={link.url}
                key={link.label}
                className={classes.link}
                children={link.label}
            />
        );
    });

    return (
        <Group spacing={5} className={classes.links}>
            {items}
        </Group>
    );
}

export default Tabs;
