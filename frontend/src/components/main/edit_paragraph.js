import React, { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';
import {
    Badge,
    useMantineTheme,
    Button,
    Group,
} from '@mantine/core';

export const Paragraph = ({ paragraph, updateParagraph, loggedIn }) => {
    const { name, text, tags, _id } = paragraph;
    const [editorState, setEditorState] = useState(text);
    const theme = useMantineTheme();

    const styledTags = tags.map((tag) => (
        <Badge
            color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
            key={tag}
        >
            { tag }
        </Badge>
    ));

    return (
        <>
            <h1>{ name }</h1>
            <RichTextEditor readOnly={!loggedIn} value={editorState} onChange={setEditorState}  />
            <Group>
                { styledTags }
            </Group>
            {loggedIn && <Button onClick={() => updateParagraph({ _id, tags, name, text: editorState })}>Update</Button>}
        </>
    );
};
