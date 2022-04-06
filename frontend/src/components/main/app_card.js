import React from 'react';
import { Card, Image, Text, Group, Badge, createStyles, Button } from '@mantine/core';
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    imageSection: {
        padding: theme.spacing.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: -0.25,
        textTransform: 'uppercase',
    },

    section: {
        padding: theme.spacing.md,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    icon: {
        marginRight: 5,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
}));

const AppCard = ({ app }) => {
    const { classes } = useStyles();
    const { name, description, link, icon, } = app;

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section className={classes.imageSection}>
                <Image src={icon} alt={name} />
            </Card.Section>

            <Group position="apart" mt="md">
                <div>
                    <Text weight={500}>{ name }</Text>
                    <Text size="xs" color="dimmed">{ description }</Text>
                </div>
                <Group mb={20}>
                    <Badge variant="outline">free</Badge>
                </Group>
            </Group>

            <Card.Section className={classes.section}>
                <Group spacing={30}>
                    <Button component={Link} to={link} radius="xl" style={{ flex: 1 }}>
                        Learn more
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}

export default AppCard;
