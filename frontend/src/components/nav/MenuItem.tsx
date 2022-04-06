import React from "react";
import { Menu } from "@mantine/core";
import { Link } from "react-router-dom";

export const MenuItem = ({ item }: any) => {
    return <Menu.Item component={Link} to={item.link} key={item.label}>{item.label}</Menu.Item>
}
