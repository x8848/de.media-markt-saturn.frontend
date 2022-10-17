export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
}

export interface GraphQLCustomer {
  __typename?: 'Customer';
  _id: Scalars['ID'];
  name: Scalars['String'];
}

export interface GraphQLEmployee {
  __typename?: 'Employee';
  _id: Scalars['ID'];
  name: Scalars['String'];
}

export interface GraphQLItem {
  __typename?: 'Item';
  _id: Scalars['ID'];
  name: Scalars['String'];
}

export interface GraphQLMutation {
  __typename?: 'Mutation';
  updateOrderStatus: GraphQLOrder;
}


export interface GraphQLMutationUpdateOrderStatusArgs {
  id: Scalars['String'];
  status: Scalars['String'];
}

export interface GraphQLOrder {
  __typename?: 'Order';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  customer: GraphQLCustomer;
  employee?: Maybe<GraphQLEmployee>;
  history: Array<GraphQLOrderHistory>;
  items: Array<GraphQLItem>;
  status: GraphQLOrderStatus;
  updatedAt: Scalars['DateTime'];
}

export interface GraphQLOrderHistory {
  __typename?: 'OrderHistory';
  status: GraphQLOrderStatus;
  updatedAt: Scalars['DateTime'];
}

export enum GraphQLOrderStatus {
  Complete = 'COMPLETE',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN'
}

export interface GraphQLQuery {
  __typename?: 'Query';
  order: GraphQLOrder;
  orders: Array<GraphQLOrder>;
}


export interface GraphQLQueryOrderArgs {
  id: Scalars['String'];
}
