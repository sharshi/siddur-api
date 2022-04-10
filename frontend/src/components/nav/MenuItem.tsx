import React from "react";
import { Menu } from "@mantine/core";
import { Link } from "react-router-dom";
import { ITab } from "../../types";

interface IMenuItemProps {
    item: ITab,
}

export const MenuItem = ({ item }: IMenuItemProps) => {
    return (
        <Menu.Item component={Link as any} to={item.url}>
            {item.label}
        </Menu.Item>
    );
}
