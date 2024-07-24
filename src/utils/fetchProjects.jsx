import { createClient } from "contentful";
import { useEffect, useState } from "react";

const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const client = createClient({
  space: SPACE_ID,
  environment: "master",
  accessToken: ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "portofolio" });
      const projects = response.items.map((item) => {
        const { name, link, gitLink, img, description, technologies } =
          item.fields;
        const id = item.sys.id;
        const image = img?.fields?.file.url;
        return { name, link, gitLink, description, id, technologies, image };
      });
      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};
