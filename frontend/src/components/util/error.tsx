import React from 'react';
import { Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

export function ErrorPage() {
    return (
        <>
            <Text>404</Text>
            <Button component={Link as any} to="/">Go to Home Page</Button>
        </>
    );
}
