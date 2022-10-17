import { ReactNode } from "react";
import { GraphQLOrder } from "../graphql/types";

export interface ReactProps {
  children: ReactNode;
  className?: string;
}

export interface OrderProps {
  order: GraphQLOrder;
}
