import React from "react";
import AppCard from "./app_card";
import { SimpleGrid } from "@mantine/core";

const siddur = {
  name: "Siddur Torah Ohr, Chabad",
  description: "Only displays the text that you need to Daven now.",
  link: "/siddur",
  icon: "https://raw.githubusercontent.com/ShafehOrg/shafehorg.github.io/dev/src/images/siddur-icon.png",
}

const tikkun = {
  name: "Tikkun Korim, Torah",
  description: "Choose a Parsha from any Chumash including double Parshiot. Makes practicing much easier.",
  link: "/tikkun",
  icon: "https://raw.githubusercontent.com/ShafehOrg/shafehorg.github.io/dev/src/images/tikkun-icon.png",
}

const megillah = {
  name: "Tikkun Korim, Megillah",
  description: "Practice for Purim's Megillah reading.",
  link: "/megillah",
  icon: "https://raw.githubusercontent.com/ShafehOrg/shafehorg.github.io/dev/src/images/megillah-icon.png",
}

const apps = [
  siddur,
  tikkun,
  megillah,
];

export default function AppCards() {
  return (
    <>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: 'md' },
          { maxWidth: 755, cols: 2, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
      >
        {apps.map(app => {
          return (
            <AppCard key={app.name} app={app} />
          )
        })}
      </SimpleGrid>
    </>
  );
}
