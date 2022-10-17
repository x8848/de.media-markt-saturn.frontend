const LOCAL_GRAPHQL_API_URL = "http://localhost:4000/graphql";

export const GRAPHQL_API_URL =
  process.env.GRAPHQL_API_URL || LOCAL_GRAPHQL_API_URL;

export const DATE_TIME_FORMAT = "DD/MM/YYYY HH:mm";
