import React, { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';
import {
    Badge,
    useMantineTheme,
    Button,
    Group,
} from '@mantine/core';

export const Paragraph = ({ paragraph, updateParagraph }) => {
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

    // const handleUpdate = (data) => {
    //     onChange(data);
    //     updateParagraph({ _id, tags, name, text: value });
    // };

    return (
        <>
            <h1>{ name }</h1>
            <RichTextEditor value={editorState} onChange={setEditorState}  />
            <Group>
                { styledTags }
            </Group>
            <Button onClick={() => updateParagraph({ _id, tags, name, text: editorState })}>Update</Button>
        </>
    );
};
