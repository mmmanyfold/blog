import axios from "axios";
import { useEffect, useState } from "react";
import { CDN_ASSETS, CDN_ENTRIES } from "../lib/constants";
import Project from "./project";
import Container from "./container";

export default function Projects() {
  const [assets, setAssets] = useState([]);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const {
          data: { items: entryData },
        } = await axios(CDN_ENTRIES);
        const {
          data: { items: assetData },
        } = await axios(CDN_ASSETS);
        setEntries(entryData);
        setAssets(assetData);
      } catch (e) {
        throw e;
      }
    };

    getProjects();
  }, []);

  return (
    <Container>
      <a href="#projects">
        <h3 className="mb-4 text-3xl md:text-3xl font-bold tracking-tighter leading-tight">Projects</h3>
      </a>
    { entries.length > 0 && entries.map((entry, i) =>
          <Project key={i} entry={entry} />)}
    </Container>
  );
}
