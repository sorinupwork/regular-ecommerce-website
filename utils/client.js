import client from "@sanity/client";
import config from "./config";

export default client({
  projectId: config.projectId,
  dataset: config.dataset,
  useCdn: true,

  // apiVersion: "2022-04-10",
});
