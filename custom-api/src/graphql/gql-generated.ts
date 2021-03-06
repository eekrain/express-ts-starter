import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  citext: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type BulkUpdateVariantsMetadataOutput = {
  __typename?: 'BulkUpdateVariantsMetadataOutput';
  is_any_update?: Maybe<Scalars['Boolean']>;
  variant_title?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type InventoryVariantMetadataInsertInput = {
  variant_title?: InputMaybe<Scalars['String']>;
  variant_value?: InputMaybe<Scalars['String']>;
};

export type InventoryVariantMetadataNeedUpdateInput = {
  id: Scalars['Int'];
  variant_value?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "auth.account_providers" */
export type Auth_Account_Providers = {
  __typename?: 'auth_account_providers';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  auth_provider: Scalars['String'];
  auth_provider_unique_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: Auth_Providers;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate = {
  __typename?: 'auth_account_providers_aggregate';
  aggregate?: Maybe<Auth_Account_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Account_Providers>;
};

/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Fields = {
  __typename?: 'auth_account_providers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Account_Providers_Max_Fields>;
  min?: Maybe<Auth_Account_Providers_Min_Fields>;
};


/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Account_Providers_Max_Order_By>;
  min?: InputMaybe<Auth_Account_Providers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_providers" */
export type Auth_Account_Providers_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Providers_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auth_Account_Providers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_providers". All fields are combined with a logical 'AND'. */
export type Auth_Account_Providers_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Account_Providers_Bool_Exp>>;
  _not?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Account_Providers_Bool_Exp>>;
  account?: InputMaybe<Auth_Accounts_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  auth_provider?: InputMaybe<String_Comparison_Exp>;
  auth_provider_unique_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<Auth_Providers_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.account_providers" */
export enum Auth_Account_Providers_Constraint {
  /** unique or primary key constraint */
  AccountProvidersAccountIdAuthProviderKey = 'account_providers_account_id_auth_provider_key',
  /** unique or primary key constraint */
  AccountProvidersAuthProviderAuthProviderUniqueIdKey = 'account_providers_auth_provider_auth_provider_unique_id_key',
  /** unique or primary key constraint */
  AccountProvidersPkey = 'account_providers_pkey'
}

/** input type for inserting data into table "auth.account_providers" */
export type Auth_Account_Providers_Insert_Input = {
  account?: InputMaybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']>;
  auth_provider?: InputMaybe<Scalars['String']>;
  auth_provider_unique_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<Auth_Providers_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Auth_Account_Providers_Max_Fields = {
  __typename?: 'auth_account_providers_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  auth_provider?: InputMaybe<Order_By>;
  auth_provider_unique_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Providers_Min_Fields = {
  __typename?: 'auth_account_providers_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  auth_provider?: InputMaybe<Order_By>;
  auth_provider_unique_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.account_providers" */
export type Auth_Account_Providers_Mutation_Response = {
  __typename?: 'auth_account_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account_Providers>;
};

/** on conflict condition type for table "auth.account_providers" */
export type Auth_Account_Providers_On_Conflict = {
  constraint: Auth_Account_Providers_Constraint;
  update_columns?: Array<Auth_Account_Providers_Update_Column>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account_providers". */
export type Auth_Account_Providers_Order_By = {
  account?: InputMaybe<Auth_Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  auth_provider?: InputMaybe<Order_By>;
  auth_provider_unique_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<Auth_Providers_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_account_providers */
export type Auth_Account_Providers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_providers" */
export enum Auth_Account_Providers_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AuthProviderUniqueId = 'auth_provider_unique_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.account_providers" */
export type Auth_Account_Providers_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  auth_provider?: InputMaybe<Scalars['String']>;
  auth_provider_unique_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.account_providers" */
export enum Auth_Account_Providers_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AuthProviderUniqueId = 'auth_provider_unique_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "auth.account_roles" */
export type Auth_Account_Roles = {
  __typename?: 'auth_account_roles';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: Auth_Roles;
};

/** aggregated selection of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate = {
  __typename?: 'auth_account_roles_aggregate';
  aggregate?: Maybe<Auth_Account_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Account_Roles>;
};

/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Fields = {
  __typename?: 'auth_account_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Account_Roles_Max_Fields>;
  min?: Maybe<Auth_Account_Roles_Min_Fields>;
};


/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Account_Roles_Max_Order_By>;
  min?: InputMaybe<Auth_Account_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_roles" */
export type Auth_Account_Roles_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Roles_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auth_Account_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_roles". All fields are combined with a logical 'AND'. */
export type Auth_Account_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Account_Roles_Bool_Exp>>;
  _not?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Account_Roles_Bool_Exp>>;
  account?: InputMaybe<Auth_Accounts_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<Auth_Roles_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.account_roles" */
export enum Auth_Account_Roles_Constraint {
  /** unique or primary key constraint */
  AccountRolesPkey = 'account_roles_pkey',
  /** unique or primary key constraint */
  UserRolesAccountIdRoleKey = 'user_roles_account_id_role_key'
}

/** input type for inserting data into table "auth.account_roles" */
export type Auth_Account_Roles_Insert_Input = {
  account?: InputMaybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<Auth_Roles_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Auth_Account_Roles_Max_Fields = {
  __typename?: 'auth_account_roles_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Roles_Min_Fields = {
  __typename?: 'auth_account_roles_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.account_roles" */
export type Auth_Account_Roles_Mutation_Response = {
  __typename?: 'auth_account_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account_Roles>;
};

/** on conflict condition type for table "auth.account_roles" */
export type Auth_Account_Roles_On_Conflict = {
  constraint: Auth_Account_Roles_Constraint;
  update_columns?: Array<Auth_Account_Roles_Update_Column>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account_roles". */
export type Auth_Account_Roles_Order_By = {
  account?: InputMaybe<Auth_Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<Auth_Roles_Order_By>;
};

/** primary key columns input for table: auth_account_roles */
export type Auth_Account_Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.account_roles" */
export type Auth_Account_Roles_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** columns and relationships of "auth.accounts" */
export type Auth_Accounts = {
  __typename?: 'auth_accounts';
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>;
  /** An aggregate relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  id: Scalars['uuid'];
  is_anonymous: Scalars['Boolean'];
  mfa_enabled: Scalars['Boolean'];
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  /** An array relationship */
  refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** An aggregate relationship */
  refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** An object relationship */
  role: Auth_Roles;
  ticket: Scalars['uuid'];
  ticket_expires_at: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsCustom_Register_DataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_TokensArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** aggregated selection of "auth.accounts" */
export type Auth_Accounts_Aggregate = {
  __typename?: 'auth_accounts_aggregate';
  aggregate?: Maybe<Auth_Accounts_Aggregate_Fields>;
  nodes: Array<Auth_Accounts>;
};

/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_Fields = {
  __typename?: 'auth_accounts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Accounts_Max_Fields>;
  min?: Maybe<Auth_Accounts_Min_Fields>;
};


/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.accounts" */
export type Auth_Accounts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Accounts_Max_Order_By>;
  min?: InputMaybe<Auth_Accounts_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Append_Input = {
  custom_register_data?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.accounts" */
export type Auth_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Auth_Accounts_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auth_Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.accounts". All fields are combined with a logical 'AND'. */
export type Auth_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Auth_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Accounts_Bool_Exp>>;
  account_providers?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
  account_roles?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  custom_register_data?: InputMaybe<Jsonb_Comparison_Exp>;
  default_role?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_anonymous?: InputMaybe<Boolean_Comparison_Exp>;
  mfa_enabled?: InputMaybe<Boolean_Comparison_Exp>;
  new_email?: InputMaybe<Citext_Comparison_Exp>;
  otp_secret?: InputMaybe<String_Comparison_Exp>;
  password_hash?: InputMaybe<String_Comparison_Exp>;
  refresh_tokens?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
  role?: InputMaybe<Auth_Roles_Bool_Exp>;
  ticket?: InputMaybe<Uuid_Comparison_Exp>;
  ticket_expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.accounts" */
export enum Auth_Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsEmailKey = 'accounts_email_key',
  /** unique or primary key constraint */
  AccountsNewEmailKey = 'accounts_new_email_key',
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey',
  /** unique or primary key constraint */
  AccountsUserIdKey = 'accounts_user_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Accounts_Delete_At_Path_Input = {
  custom_register_data?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Accounts_Delete_Elem_Input = {
  custom_register_data?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Accounts_Delete_Key_Input = {
  custom_register_data?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.accounts" */
export type Auth_Accounts_Insert_Input = {
  account_providers?: InputMaybe<Auth_Account_Providers_Arr_Rel_Insert_Input>;
  account_roles?: InputMaybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  custom_register_data?: InputMaybe<Scalars['jsonb']>;
  default_role?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_anonymous?: InputMaybe<Scalars['Boolean']>;
  mfa_enabled?: InputMaybe<Scalars['Boolean']>;
  new_email?: InputMaybe<Scalars['citext']>;
  otp_secret?: InputMaybe<Scalars['String']>;
  password_hash?: InputMaybe<Scalars['String']>;
  refresh_tokens?: InputMaybe<Auth_Refresh_Tokens_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Auth_Roles_Obj_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['uuid']>;
  ticket_expires_at?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auth_Accounts_Max_Fields = {
  __typename?: 'auth_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.accounts" */
export type Auth_Accounts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  default_role?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  new_email?: InputMaybe<Order_By>;
  otp_secret?: InputMaybe<Order_By>;
  password_hash?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticket_expires_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Accounts_Min_Fields = {
  __typename?: 'auth_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.accounts" */
export type Auth_Accounts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  default_role?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  new_email?: InputMaybe<Order_By>;
  otp_secret?: InputMaybe<Order_By>;
  password_hash?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticket_expires_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.accounts" */
export type Auth_Accounts_Mutation_Response = {
  __typename?: 'auth_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Accounts>;
};

/** input type for inserting object relation for remote table "auth.accounts" */
export type Auth_Accounts_Obj_Rel_Insert_Input = {
  data: Auth_Accounts_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auth_Accounts_On_Conflict>;
};

/** on conflict condition type for table "auth.accounts" */
export type Auth_Accounts_On_Conflict = {
  constraint: Auth_Accounts_Constraint;
  update_columns?: Array<Auth_Accounts_Update_Column>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.accounts". */
export type Auth_Accounts_Order_By = {
  account_providers_aggregate?: InputMaybe<Auth_Account_Providers_Aggregate_Order_By>;
  account_roles_aggregate?: InputMaybe<Auth_Account_Roles_Aggregate_Order_By>;
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  custom_register_data?: InputMaybe<Order_By>;
  default_role?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_anonymous?: InputMaybe<Order_By>;
  mfa_enabled?: InputMaybe<Order_By>;
  new_email?: InputMaybe<Order_By>;
  otp_secret?: InputMaybe<Order_By>;
  password_hash?: InputMaybe<Order_By>;
  refresh_tokens_aggregate?: InputMaybe<Auth_Refresh_Tokens_Aggregate_Order_By>;
  role?: InputMaybe<Auth_Roles_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticket_expires_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_accounts */
export type Auth_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Prepend_Input = {
  custom_register_data?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.accounts" */
export enum Auth_Accounts_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRegisterData = 'custom_register_data',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  MfaEnabled = 'mfa_enabled',
  /** column name */
  NewEmail = 'new_email',
  /** column name */
  OtpSecret = 'otp_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.accounts" */
export type Auth_Accounts_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  custom_register_data?: InputMaybe<Scalars['jsonb']>;
  default_role?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_anonymous?: InputMaybe<Scalars['Boolean']>;
  mfa_enabled?: InputMaybe<Scalars['Boolean']>;
  new_email?: InputMaybe<Scalars['citext']>;
  otp_secret?: InputMaybe<Scalars['String']>;
  password_hash?: InputMaybe<Scalars['String']>;
  ticket?: InputMaybe<Scalars['uuid']>;
  ticket_expires_at?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.accounts" */
export enum Auth_Accounts_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRegisterData = 'custom_register_data',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  MfaEnabled = 'mfa_enabled',
  /** column name */
  NewEmail = 'new_email',
  /** column name */
  OtpSecret = 'otp_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "auth.providers" */
export type Auth_Providers = {
  __typename?: 'auth_providers';
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>;
  /** An aggregate relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate;
  provider: Scalars['String'];
};


/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type Auth_Providers_Aggregate = {
  __typename?: 'auth_providers_aggregate';
  aggregate?: Maybe<Auth_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Providers>;
};

/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_Fields = {
  __typename?: 'auth_providers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Providers_Max_Fields>;
  min?: Maybe<Auth_Providers_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Providers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type Auth_Providers_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Providers_Bool_Exp>>;
  _not?: InputMaybe<Auth_Providers_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Providers_Bool_Exp>>;
  account_providers?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum Auth_Providers_Constraint {
  /** unique or primary key constraint */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type Auth_Providers_Insert_Input = {
  account_providers?: InputMaybe<Auth_Account_Providers_Arr_Rel_Insert_Input>;
  provider?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Providers_Max_Fields = {
  __typename?: 'auth_providers_max_fields';
  provider?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Providers_Min_Fields = {
  __typename?: 'auth_providers_min_fields';
  provider?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type Auth_Providers_Mutation_Response = {
  __typename?: 'auth_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Providers>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type Auth_Providers_Obj_Rel_Insert_Input = {
  data: Auth_Providers_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auth_Providers_On_Conflict>;
};

/** on conflict condition type for table "auth.providers" */
export type Auth_Providers_On_Conflict = {
  constraint: Auth_Providers_Constraint;
  update_columns?: Array<Auth_Providers_Update_Column>;
  where?: InputMaybe<Auth_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type Auth_Providers_Order_By = {
  account_providers_aggregate?: InputMaybe<Auth_Account_Providers_Aggregate_Order_By>;
  provider?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_providers */
export type Auth_Providers_Pk_Columns_Input = {
  provider: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum Auth_Providers_Select_Column {
  /** column name */
  Provider = 'provider'
}

/** input type for updating data in table "auth.providers" */
export type Auth_Providers_Set_Input = {
  provider?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum Auth_Providers_Update_Column {
  /** column name */
  Provider = 'provider'
}

/** columns and relationships of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens = {
  __typename?: 'auth_refresh_tokens';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  expires_at: Scalars['timestamptz'];
  refresh_token: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate = {
  __typename?: 'auth_refresh_tokens_aggregate';
  aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Fields>;
  nodes: Array<Auth_Refresh_Tokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Fields = {
  __typename?: 'auth_refresh_tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Refresh_Tokens_Max_Fields>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Refresh_Tokens_Max_Order_By>;
  min?: InputMaybe<Auth_Refresh_Tokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Auth_Refresh_Tokens_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auth_Refresh_Tokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type Auth_Refresh_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Refresh_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Refresh_Tokens_Bool_Exp>>;
  account?: InputMaybe<Auth_Accounts_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  refresh_token?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Constraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Insert_Input = {
  account?: InputMaybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['timestamptz']>;
  refresh_token?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auth_Refresh_Tokens_Max_Fields = {
  __typename?: 'auth_refresh_tokens_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Refresh_Tokens_Min_Fields = {
  __typename?: 'auth_refresh_tokens_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Mutation_Response = {
  __typename?: 'auth_refresh_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Refresh_Tokens>;
};

/** on conflict condition type for table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_On_Conflict = {
  constraint: Auth_Refresh_Tokens_Constraint;
  update_columns?: Array<Auth_Refresh_Tokens_Update_Column>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type Auth_Refresh_Tokens_Order_By = {
  account?: InputMaybe<Auth_Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_refresh_tokens */
export type Auth_Refresh_Tokens_Pk_Columns_Input = {
  refresh_token: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['timestamptz']>;
  refresh_token?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** columns and relationships of "auth.roles" */
export type Auth_Roles = {
  __typename?: 'auth_roles';
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** An array relationship */
  accounts: Array<Auth_Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Auth_Accounts_Aggregate;
  role: Scalars['String'];
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccountsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type Auth_Roles_Aggregate = {
  __typename?: 'auth_roles_aggregate';
  aggregate?: Maybe<Auth_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Roles>;
};

/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_Fields = {
  __typename?: 'auth_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Roles_Max_Fields>;
  min?: Maybe<Auth_Roles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type Auth_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Roles_Bool_Exp>>;
  _not?: InputMaybe<Auth_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Roles_Bool_Exp>>;
  account_roles?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
  accounts?: InputMaybe<Auth_Accounts_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum Auth_Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type Auth_Roles_Insert_Input = {
  account_roles?: InputMaybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  accounts?: InputMaybe<Auth_Accounts_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Roles_Max_Fields = {
  __typename?: 'auth_roles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Roles_Min_Fields = {
  __typename?: 'auth_roles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type Auth_Roles_Mutation_Response = {
  __typename?: 'auth_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Roles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type Auth_Roles_Obj_Rel_Insert_Input = {
  data: Auth_Roles_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auth_Roles_On_Conflict>;
};

/** on conflict condition type for table "auth.roles" */
export type Auth_Roles_On_Conflict = {
  constraint: Auth_Roles_Constraint;
  update_columns?: Array<Auth_Roles_Update_Column>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type Auth_Roles_Order_By = {
  account_roles_aggregate?: InputMaybe<Auth_Account_Roles_Aggregate_Order_By>;
  accounts_aggregate?: InputMaybe<Auth_Accounts_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_roles */
export type Auth_Roles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum Auth_Roles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type Auth_Roles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum Auth_Roles_Update_Column {
  /** column name */
  Role = 'role'
}

export type BulkUpdateInventoryProductOutput = {
  __typename?: 'bulkUpdateInventoryProductOutput';
  insert_inventory_product_variants_affected_rows?: Maybe<Scalars['Int']>;
  inventory_product_name?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

export type Insert_Inventory_Product_Variants = {
  inventory_product_id?: InputMaybe<Scalars['uuid']>;
  inventory_variant_metadata_id?: InputMaybe<Scalars['Int']>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  bulkUpdateInventoryProduct?: Maybe<BulkUpdateInventoryProductOutput>;
  bulkUpdateVariantsMetadata?: Maybe<BulkUpdateVariantsMetadataOutput>;
  /** delete data from the table: "auth.account_providers" */
  delete_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.account_providers" */
  delete_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** delete data from the table: "auth.account_roles" */
  delete_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.account_roles" */
  delete_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** delete data from the table: "auth.accounts" */
  delete_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** delete single row from the table: "auth.accounts" */
  delete_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** delete data from the table: "auth.providers" */
  delete_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.providers" */
  delete_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** delete data from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** delete data from the table: "auth.roles" */
  delete_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  delete_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** delete data from the table: "rocketjaket.inventory_product" */
  delete_rocketjaket_inventory_product?: Maybe<Rocketjaket_Inventory_Product_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.inventory_product" */
  delete_rocketjaket_inventory_product_by_pk?: Maybe<Rocketjaket_Inventory_Product>;
  /** delete data from the table: "rocketjaket.inventory_product_variant" */
  delete_rocketjaket_inventory_product_variant?: Maybe<Rocketjaket_Inventory_Product_Variant_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.inventory_product_variant" */
  delete_rocketjaket_inventory_product_variant_by_pk?: Maybe<Rocketjaket_Inventory_Product_Variant>;
  /** delete data from the table: "rocketjaket.inventory_variant_metadata" */
  delete_rocketjaket_inventory_variant_metadata?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.inventory_variant_metadata" */
  delete_rocketjaket_inventory_variant_metadata_by_pk?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** delete data from the table: "rocketjaket.product" */
  delete_rocketjaket_product?: Maybe<Rocketjaket_Product_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.product" */
  delete_rocketjaket_product_by_pk?: Maybe<Rocketjaket_Product>;
  /** delete data from the table: "rocketjaket.product_category" */
  delete_rocketjaket_product_category?: Maybe<Rocketjaket_Product_Category_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.product_category" */
  delete_rocketjaket_product_category_by_pk?: Maybe<Rocketjaket_Product_Category>;
  /** delete data from the table: "rocketjaket.store" */
  delete_rocketjaket_store?: Maybe<Rocketjaket_Store_Mutation_Response>;
  /** delete single row from the table: "rocketjaket.store" */
  delete_rocketjaket_store_by_pk?: Maybe<Rocketjaket_Store>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "auth.account_providers" */
  insert_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.account_providers" */
  insert_auth_account_providers_one?: Maybe<Auth_Account_Providers>;
  /** insert data into the table: "auth.account_roles" */
  insert_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.account_roles" */
  insert_auth_account_roles_one?: Maybe<Auth_Account_Roles>;
  /** insert data into the table: "auth.accounts" */
  insert_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** insert a single row into the table: "auth.accounts" */
  insert_auth_accounts_one?: Maybe<Auth_Accounts>;
  /** insert data into the table: "auth.providers" */
  insert_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.providers" */
  insert_auth_providers_one?: Maybe<Auth_Providers>;
  /** insert data into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens_one?: Maybe<Auth_Refresh_Tokens>;
  /** insert data into the table: "auth.roles" */
  insert_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insert_auth_roles_one?: Maybe<Auth_Roles>;
  /** insert data into the table: "rocketjaket.inventory_product" */
  insert_rocketjaket_inventory_product?: Maybe<Rocketjaket_Inventory_Product_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.inventory_product" */
  insert_rocketjaket_inventory_product_one?: Maybe<Rocketjaket_Inventory_Product>;
  /** insert data into the table: "rocketjaket.inventory_product_variant" */
  insert_rocketjaket_inventory_product_variant?: Maybe<Rocketjaket_Inventory_Product_Variant_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.inventory_product_variant" */
  insert_rocketjaket_inventory_product_variant_one?: Maybe<Rocketjaket_Inventory_Product_Variant>;
  /** insert data into the table: "rocketjaket.inventory_variant_metadata" */
  insert_rocketjaket_inventory_variant_metadata?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.inventory_variant_metadata" */
  insert_rocketjaket_inventory_variant_metadata_one?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** insert data into the table: "rocketjaket.product" */
  insert_rocketjaket_product?: Maybe<Rocketjaket_Product_Mutation_Response>;
  /** insert data into the table: "rocketjaket.product_category" */
  insert_rocketjaket_product_category?: Maybe<Rocketjaket_Product_Category_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.product_category" */
  insert_rocketjaket_product_category_one?: Maybe<Rocketjaket_Product_Category>;
  /** insert a single row into the table: "rocketjaket.product" */
  insert_rocketjaket_product_one?: Maybe<Rocketjaket_Product>;
  /** insert data into the table: "rocketjaket.store" */
  insert_rocketjaket_store?: Maybe<Rocketjaket_Store_Mutation_Response>;
  /** insert a single row into the table: "rocketjaket.store" */
  insert_rocketjaket_store_one?: Maybe<Rocketjaket_Store>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "auth.account_providers" */
  update_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** update single row of the table: "auth.account_providers" */
  update_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** update data of the table: "auth.account_roles" */
  update_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** update single row of the table: "auth.account_roles" */
  update_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** update data of the table: "auth.accounts" */
  update_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** update single row of the table: "auth.accounts" */
  update_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** update data of the table: "auth.providers" */
  update_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** update single row of the table: "auth.providers" */
  update_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** update data of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** update data of the table: "auth.roles" */
  update_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  update_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** update data of the table: "rocketjaket.inventory_product" */
  update_rocketjaket_inventory_product?: Maybe<Rocketjaket_Inventory_Product_Mutation_Response>;
  /** update single row of the table: "rocketjaket.inventory_product" */
  update_rocketjaket_inventory_product_by_pk?: Maybe<Rocketjaket_Inventory_Product>;
  /** update data of the table: "rocketjaket.inventory_product_variant" */
  update_rocketjaket_inventory_product_variant?: Maybe<Rocketjaket_Inventory_Product_Variant_Mutation_Response>;
  /** update single row of the table: "rocketjaket.inventory_product_variant" */
  update_rocketjaket_inventory_product_variant_by_pk?: Maybe<Rocketjaket_Inventory_Product_Variant>;
  /** update data of the table: "rocketjaket.inventory_variant_metadata" */
  update_rocketjaket_inventory_variant_metadata?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Mutation_Response>;
  /** update single row of the table: "rocketjaket.inventory_variant_metadata" */
  update_rocketjaket_inventory_variant_metadata_by_pk?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** update data of the table: "rocketjaket.product" */
  update_rocketjaket_product?: Maybe<Rocketjaket_Product_Mutation_Response>;
  /** update single row of the table: "rocketjaket.product" */
  update_rocketjaket_product_by_pk?: Maybe<Rocketjaket_Product>;
  /** update data of the table: "rocketjaket.product_category" */
  update_rocketjaket_product_category?: Maybe<Rocketjaket_Product_Category_Mutation_Response>;
  /** update single row of the table: "rocketjaket.product_category" */
  update_rocketjaket_product_category_by_pk?: Maybe<Rocketjaket_Product_Category>;
  /** update data of the table: "rocketjaket.store" */
  update_rocketjaket_store?: Maybe<Rocketjaket_Store_Mutation_Response>;
  /** update single row of the table: "rocketjaket.store" */
  update_rocketjaket_store_by_pk?: Maybe<Rocketjaket_Store>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootBulkUpdateInventoryProductArgs = {
  insert_update_inventory_product: Array<Insert_Inventory_Product_Variants>;
  inventory_product_id: Scalars['uuid'];
  set_inventory_product: Update_Inventory_Product;
};


/** mutation root */
export type Mutation_RootBulkUpdateVariantsMetadataArgs = {
  needAddVariantMetadata: Array<InventoryVariantMetadataInsertInput>;
  needDeleteIds: Array<Scalars['Int']>;
  needUpdateVariantMetadata: Array<InventoryVariantMetadataNeedUpdateInput>;
  new_variant_title: Scalars['String'];
  old_variant_title: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_ProvidersArgs = {
  where: Auth_Account_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_RolesArgs = {
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_AccountsArgs = {
  where: Auth_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_ProvidersArgs = {
  where: Auth_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_TokensArgs = {
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_RolesArgs = {
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Inventory_ProductArgs = {
  where: Rocketjaket_Inventory_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Inventory_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Inventory_Product_VariantArgs = {
  where: Rocketjaket_Inventory_Product_Variant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Inventory_Product_Variant_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Inventory_Variant_MetadataArgs = {
  where: Rocketjaket_Inventory_Variant_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Inventory_Variant_Metadata_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_ProductArgs = {
  where: Rocketjaket_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Product_CategoryArgs = {
  where: Rocketjaket_Product_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Product_Category_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_StoreArgs = {
  where: Rocketjaket_Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rocketjaket_Store_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_ProvidersArgs = {
  objects: Array<Auth_Account_Providers_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Account_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Providers_OneArgs = {
  object: Auth_Account_Providers_Insert_Input;
  on_conflict?: InputMaybe<Auth_Account_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_RolesArgs = {
  objects: Array<Auth_Account_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Roles_OneArgs = {
  object: Auth_Account_Roles_Insert_Input;
  on_conflict?: InputMaybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_AccountsArgs = {
  objects: Array<Auth_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Accounts_OneArgs = {
  object: Auth_Accounts_Insert_Input;
  on_conflict?: InputMaybe<Auth_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_ProvidersArgs = {
  objects: Array<Auth_Providers_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Providers_OneArgs = {
  object: Auth_Providers_Insert_Input;
  on_conflict?: InputMaybe<Auth_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_TokensArgs = {
  objects: Array<Auth_Refresh_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_Tokens_OneArgs = {
  object: Auth_Refresh_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_RolesArgs = {
  objects: Array<Auth_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Roles_OneArgs = {
  object: Auth_Roles_Insert_Input;
  on_conflict?: InputMaybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Inventory_ProductArgs = {
  objects: Array<Rocketjaket_Inventory_Product_Insert_Input>;
  on_conflict?: InputMaybe<Rocketjaket_Inventory_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Inventory_Product_OneArgs = {
  object: Rocketjaket_Inventory_Product_Insert_Input;
  on_conflict?: InputMaybe<Rocketjaket_Inventory_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Inventory_Product_VariantArgs = {
  objects: Array<Rocketjaket_Inventory_Product_Variant_Insert_Input>;
  on_conflict?: InputMaybe<Rocketjaket_Inventory_Product_Variant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Inventory_Product_Variant_OneArgs = {
  object: Rocketjaket_Inventory_Product_Variant_Insert_Input;
  on_conflict?: InputMaybe<Rocketjaket_Inventory_Product_Variant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Inventory_Variant_MetadataArgs = {
  objects: Array<Rocketjaket_Inventory_Variant_Metadata_Insert_Input>;
  on_conflict?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Inventory_Variant_Metadata_OneArgs = {
  object: Rocketjaket_Inventory_Variant_Metadata_Insert_Input;
  on_conflict?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_ProductArgs = {
  objects: Array<Rocketjaket_Product_Insert_Input>;
  on_conflict?: InputMaybe<Rocketjaket_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Product_CategoryArgs = {
  objects: Array<Rocketjaket_Product_Category_Insert_Input>;
  on_conflict?: InputMaybe<Rocketjaket_Product_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Product_Category_OneArgs = {
  object: Rocketjaket_Product_Category_Insert_Input;
  on_conflict?: InputMaybe<Rocketjaket_Product_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Product_OneArgs = {
  object: Rocketjaket_Product_Insert_Input;
  on_conflict?: InputMaybe<Rocketjaket_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_StoreArgs = {
  objects: Array<Rocketjaket_Store_Insert_Input>;
  on_conflict?: InputMaybe<Rocketjaket_Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rocketjaket_Store_OneArgs = {
  object: Rocketjaket_Store_Insert_Input;
  on_conflict?: InputMaybe<Rocketjaket_Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_ProvidersArgs = {
  _set?: InputMaybe<Auth_Account_Providers_Set_Input>;
  where: Auth_Account_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Providers_By_PkArgs = {
  _set?: InputMaybe<Auth_Account_Providers_Set_Input>;
  pk_columns: Auth_Account_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_RolesArgs = {
  _set?: InputMaybe<Auth_Account_Roles_Set_Input>;
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Roles_By_PkArgs = {
  _set?: InputMaybe<Auth_Account_Roles_Set_Input>;
  pk_columns: Auth_Account_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_AccountsArgs = {
  _append?: InputMaybe<Auth_Accounts_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Accounts_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Accounts_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Accounts_Delete_Key_Input>;
  _prepend?: InputMaybe<Auth_Accounts_Prepend_Input>;
  _set?: InputMaybe<Auth_Accounts_Set_Input>;
  where: Auth_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Accounts_By_PkArgs = {
  _append?: InputMaybe<Auth_Accounts_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Accounts_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Accounts_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Accounts_Delete_Key_Input>;
  _prepend?: InputMaybe<Auth_Accounts_Prepend_Input>;
  _set?: InputMaybe<Auth_Accounts_Set_Input>;
  pk_columns: Auth_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_ProvidersArgs = {
  _set?: InputMaybe<Auth_Providers_Set_Input>;
  where: Auth_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Providers_By_PkArgs = {
  _set?: InputMaybe<Auth_Providers_Set_Input>;
  pk_columns: Auth_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_TokensArgs = {
  _set?: InputMaybe<Auth_Refresh_Tokens_Set_Input>;
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_Tokens_By_PkArgs = {
  _set?: InputMaybe<Auth_Refresh_Tokens_Set_Input>;
  pk_columns: Auth_Refresh_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_RolesArgs = {
  _set?: InputMaybe<Auth_Roles_Set_Input>;
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Roles_By_PkArgs = {
  _set?: InputMaybe<Auth_Roles_Set_Input>;
  pk_columns: Auth_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Inventory_ProductArgs = {
  _inc?: InputMaybe<Rocketjaket_Inventory_Product_Inc_Input>;
  _set?: InputMaybe<Rocketjaket_Inventory_Product_Set_Input>;
  where: Rocketjaket_Inventory_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Inventory_Product_By_PkArgs = {
  _inc?: InputMaybe<Rocketjaket_Inventory_Product_Inc_Input>;
  _set?: InputMaybe<Rocketjaket_Inventory_Product_Set_Input>;
  pk_columns: Rocketjaket_Inventory_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Inventory_Product_VariantArgs = {
  _inc?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Inc_Input>;
  _set?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Set_Input>;
  where: Rocketjaket_Inventory_Product_Variant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Inventory_Product_Variant_By_PkArgs = {
  _inc?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Inc_Input>;
  _set?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Set_Input>;
  pk_columns: Rocketjaket_Inventory_Product_Variant_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Inventory_Variant_MetadataArgs = {
  _inc?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_Inc_Input>;
  _set?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_Set_Input>;
  where: Rocketjaket_Inventory_Variant_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Inventory_Variant_Metadata_By_PkArgs = {
  _inc?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_Inc_Input>;
  _set?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_Set_Input>;
  pk_columns: Rocketjaket_Inventory_Variant_Metadata_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_ProductArgs = {
  _inc?: InputMaybe<Rocketjaket_Product_Inc_Input>;
  _set?: InputMaybe<Rocketjaket_Product_Set_Input>;
  where: Rocketjaket_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Product_By_PkArgs = {
  _inc?: InputMaybe<Rocketjaket_Product_Inc_Input>;
  _set?: InputMaybe<Rocketjaket_Product_Set_Input>;
  pk_columns: Rocketjaket_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Product_CategoryArgs = {
  _inc?: InputMaybe<Rocketjaket_Product_Category_Inc_Input>;
  _set?: InputMaybe<Rocketjaket_Product_Category_Set_Input>;
  where: Rocketjaket_Product_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Product_Category_By_PkArgs = {
  _inc?: InputMaybe<Rocketjaket_Product_Category_Inc_Input>;
  _set?: InputMaybe<Rocketjaket_Product_Category_Set_Input>;
  pk_columns: Rocketjaket_Product_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_StoreArgs = {
  _inc?: InputMaybe<Rocketjaket_Store_Inc_Input>;
  _set?: InputMaybe<Rocketjaket_Store_Set_Input>;
  where: Rocketjaket_Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rocketjaket_Store_By_PkArgs = {
  _inc?: InputMaybe<Rocketjaket_Store_Inc_Input>;
  _set?: InputMaybe<Rocketjaket_Store_Set_Input>;
  pk_columns: Rocketjaket_Store_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** fetch data from the table: "rocketjaket.inventory_product" */
  rocketjaket_inventory_product: Array<Rocketjaket_Inventory_Product>;
  /** fetch aggregated fields from the table: "rocketjaket.inventory_product" */
  rocketjaket_inventory_product_aggregate: Rocketjaket_Inventory_Product_Aggregate;
  /** fetch data from the table: "rocketjaket.inventory_product" using primary key columns */
  rocketjaket_inventory_product_by_pk?: Maybe<Rocketjaket_Inventory_Product>;
  /** fetch data from the table: "rocketjaket.inventory_product_variant" */
  rocketjaket_inventory_product_variant: Array<Rocketjaket_Inventory_Product_Variant>;
  /** fetch aggregated fields from the table: "rocketjaket.inventory_product_variant" */
  rocketjaket_inventory_product_variant_aggregate: Rocketjaket_Inventory_Product_Variant_Aggregate;
  /** fetch data from the table: "rocketjaket.inventory_product_variant" using primary key columns */
  rocketjaket_inventory_product_variant_by_pk?: Maybe<Rocketjaket_Inventory_Product_Variant>;
  /** fetch data from the table: "rocketjaket.inventory_variant_metadata" */
  rocketjaket_inventory_variant_metadata: Array<Rocketjaket_Inventory_Variant_Metadata>;
  /** fetch aggregated fields from the table: "rocketjaket.inventory_variant_metadata" */
  rocketjaket_inventory_variant_metadata_aggregate: Rocketjaket_Inventory_Variant_Metadata_Aggregate;
  /** fetch data from the table: "rocketjaket.inventory_variant_metadata" using primary key columns */
  rocketjaket_inventory_variant_metadata_by_pk?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** fetch data from the table: "rocketjaket.product" */
  rocketjaket_product: Array<Rocketjaket_Product>;
  /** fetch aggregated fields from the table: "rocketjaket.product" */
  rocketjaket_product_aggregate: Rocketjaket_Product_Aggregate;
  /** fetch data from the table: "rocketjaket.product" using primary key columns */
  rocketjaket_product_by_pk?: Maybe<Rocketjaket_Product>;
  /** fetch data from the table: "rocketjaket.product_category" */
  rocketjaket_product_category: Array<Rocketjaket_Product_Category>;
  /** fetch aggregated fields from the table: "rocketjaket.product_category" */
  rocketjaket_product_category_aggregate: Rocketjaket_Product_Category_Aggregate;
  /** fetch data from the table: "rocketjaket.product_category" using primary key columns */
  rocketjaket_product_category_by_pk?: Maybe<Rocketjaket_Product_Category>;
  /** fetch data from the table: "rocketjaket.store" */
  rocketjaket_store: Array<Rocketjaket_Store>;
  /** fetch aggregated fields from the table: "rocketjaket.store" */
  rocketjaket_store_aggregate: Rocketjaket_Store_Aggregate;
  /** fetch data from the table: "rocketjaket.store" using primary key columns */
  rocketjaket_store_by_pk?: Maybe<Rocketjaket_Store>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAuth_Account_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};


export type Query_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};


export type Query_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_Account_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


export type Query_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


export type Query_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};


export type Query_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};


export type Query_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Providers_Order_By>>;
  where?: InputMaybe<Auth_Providers_Bool_Exp>;
};


export type Query_RootAuth_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Providers_Order_By>>;
  where?: InputMaybe<Auth_Providers_Bool_Exp>;
};


export type Query_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


export type Query_RootAuth_Refresh_TokensArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Query_RootAuth_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


export type Query_RootRocketjaket_Inventory_ProductArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Product_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Bool_Exp>;
};


export type Query_RootRocketjaket_Inventory_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Product_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Bool_Exp>;
};


export type Query_RootRocketjaket_Inventory_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRocketjaket_Inventory_Product_VariantArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};


export type Query_RootRocketjaket_Inventory_Product_Variant_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};


export type Query_RootRocketjaket_Inventory_Product_Variant_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRocketjaket_Inventory_Variant_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Variant_Metadata_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};


export type Query_RootRocketjaket_Inventory_Variant_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Variant_Metadata_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};


export type Query_RootRocketjaket_Inventory_Variant_Metadata_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRocketjaket_ProductArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Product_Order_By>>;
  where?: InputMaybe<Rocketjaket_Product_Bool_Exp>;
};


export type Query_RootRocketjaket_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Product_Order_By>>;
  where?: InputMaybe<Rocketjaket_Product_Bool_Exp>;
};


export type Query_RootRocketjaket_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRocketjaket_Product_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Product_Category_Order_By>>;
  where?: InputMaybe<Rocketjaket_Product_Category_Bool_Exp>;
};


export type Query_RootRocketjaket_Product_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Product_Category_Order_By>>;
  where?: InputMaybe<Rocketjaket_Product_Category_Bool_Exp>;
};


export type Query_RootRocketjaket_Product_Category_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRocketjaket_StoreArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Store_Order_By>>;
  where?: InputMaybe<Rocketjaket_Store_Bool_Exp>;
};


export type Query_RootRocketjaket_Store_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Store_Order_By>>;
  where?: InputMaybe<Rocketjaket_Store_Bool_Exp>;
};


export type Query_RootRocketjaket_Store_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product = {
  __typename?: 'rocketjaket_inventory_product';
  available_qty: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  inventory_product_variants: Array<Rocketjaket_Inventory_Product_Variant>;
  /** An aggregate relationship */
  inventory_product_variants_aggregate: Rocketjaket_Inventory_Product_Variant_Aggregate;
  min_available_qty?: Maybe<Scalars['Int']>;
  override_capital_price?: Maybe<Scalars['Int']>;
  override_discount?: Maybe<Scalars['Int']>;
  override_selling_price?: Maybe<Scalars['Int']>;
  /** An object relationship */
  product: Rocketjaket_Product;
  product_id: Scalars['uuid'];
  store_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_ProductInventory_Product_VariantsArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_ProductInventory_Product_Variants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Aggregate = {
  __typename?: 'rocketjaket_inventory_product_aggregate';
  aggregate?: Maybe<Rocketjaket_Inventory_Product_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Inventory_Product>;
};

/** aggregate fields of "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Aggregate_Fields = {
  __typename?: 'rocketjaket_inventory_product_aggregate_fields';
  avg?: Maybe<Rocketjaket_Inventory_Product_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Inventory_Product_Max_Fields>;
  min?: Maybe<Rocketjaket_Inventory_Product_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Inventory_Product_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Inventory_Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Inventory_Product_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Inventory_Product_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Inventory_Product_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Inventory_Product_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Inventory_Product_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rocketjaket_Inventory_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Aggregate_Order_By = {
  avg?: InputMaybe<Rocketjaket_Inventory_Product_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rocketjaket_Inventory_Product_Max_Order_By>;
  min?: InputMaybe<Rocketjaket_Inventory_Product_Min_Order_By>;
  stddev?: InputMaybe<Rocketjaket_Inventory_Product_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rocketjaket_Inventory_Product_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rocketjaket_Inventory_Product_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rocketjaket_Inventory_Product_Sum_Order_By>;
  var_pop?: InputMaybe<Rocketjaket_Inventory_Product_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rocketjaket_Inventory_Product_Var_Samp_Order_By>;
  variance?: InputMaybe<Rocketjaket_Inventory_Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Arr_Rel_Insert_Input = {
  data: Array<Rocketjaket_Inventory_Product_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Rocketjaket_Inventory_Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Rocketjaket_Inventory_Product_Avg_Fields = {
  __typename?: 'rocketjaket_inventory_product_avg_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Avg_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rocketjaket.inventory_product". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Inventory_Product_Bool_Exp = {
  _and?: InputMaybe<Array<Rocketjaket_Inventory_Product_Bool_Exp>>;
  _not?: InputMaybe<Rocketjaket_Inventory_Product_Bool_Exp>;
  _or?: InputMaybe<Array<Rocketjaket_Inventory_Product_Bool_Exp>>;
  available_qty?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inventory_product_variants?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
  min_available_qty?: InputMaybe<Int_Comparison_Exp>;
  override_capital_price?: InputMaybe<Int_Comparison_Exp>;
  override_discount?: InputMaybe<Int_Comparison_Exp>;
  override_selling_price?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Rocketjaket_Product_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  store_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.inventory_product" */
export enum Rocketjaket_Inventory_Product_Constraint {
  /** unique or primary key constraint */
  InventoryProductPkey = 'inventory_product_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Inc_Input = {
  available_qty?: InputMaybe<Scalars['Int']>;
  min_available_qty?: InputMaybe<Scalars['Int']>;
  override_capital_price?: InputMaybe<Scalars['Int']>;
  override_discount?: InputMaybe<Scalars['Int']>;
  override_selling_price?: InputMaybe<Scalars['Int']>;
  store_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Insert_Input = {
  available_qty?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  inventory_product_variants?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Arr_Rel_Insert_Input>;
  min_available_qty?: InputMaybe<Scalars['Int']>;
  override_capital_price?: InputMaybe<Scalars['Int']>;
  override_discount?: InputMaybe<Scalars['Int']>;
  override_selling_price?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<Rocketjaket_Product_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']>;
  store_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rocketjaket_Inventory_Product_Max_Fields = {
  __typename?: 'rocketjaket_inventory_product_max_fields';
  available_qty?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  min_available_qty?: Maybe<Scalars['Int']>;
  override_capital_price?: Maybe<Scalars['Int']>;
  override_discount?: Maybe<Scalars['Int']>;
  override_selling_price?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Max_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rocketjaket_Inventory_Product_Min_Fields = {
  __typename?: 'rocketjaket_inventory_product_min_fields';
  available_qty?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  min_available_qty?: Maybe<Scalars['Int']>;
  override_capital_price?: Maybe<Scalars['Int']>;
  override_discount?: Maybe<Scalars['Int']>;
  override_selling_price?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['uuid']>;
  store_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Min_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Mutation_Response = {
  __typename?: 'rocketjaket_inventory_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Inventory_Product>;
};

/** input type for inserting object relation for remote table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Inventory_Product_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Rocketjaket_Inventory_Product_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_On_Conflict = {
  constraint: Rocketjaket_Inventory_Product_Constraint;
  update_columns?: Array<Rocketjaket_Inventory_Product_Update_Column>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.inventory_product". */
export type Rocketjaket_Inventory_Product_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inventory_product_variants_aggregate?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Aggregate_Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  product?: InputMaybe<Rocketjaket_Product_Order_By>;
  product_id?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_inventory_product */
export type Rocketjaket_Inventory_Product_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "rocketjaket.inventory_product" */
export enum Rocketjaket_Inventory_Product_Select_Column {
  /** column name */
  AvailableQty = 'available_qty',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MinAvailableQty = 'min_available_qty',
  /** column name */
  OverrideCapitalPrice = 'override_capital_price',
  /** column name */
  OverrideDiscount = 'override_discount',
  /** column name */
  OverrideSellingPrice = 'override_selling_price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Set_Input = {
  available_qty?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  min_available_qty?: InputMaybe<Scalars['Int']>;
  override_capital_price?: InputMaybe<Scalars['Int']>;
  override_discount?: InputMaybe<Scalars['Int']>;
  override_selling_price?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['uuid']>;
  store_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Inventory_Product_Stddev_Fields = {
  __typename?: 'rocketjaket_inventory_product_stddev_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Stddev_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Inventory_Product_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_inventory_product_stddev_pop_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Stddev_Pop_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Inventory_Product_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_inventory_product_stddev_samp_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Stddev_Samp_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Rocketjaket_Inventory_Product_Sum_Fields = {
  __typename?: 'rocketjaket_inventory_product_sum_fields';
  available_qty?: Maybe<Scalars['Int']>;
  min_available_qty?: Maybe<Scalars['Int']>;
  override_capital_price?: Maybe<Scalars['Int']>;
  override_discount?: Maybe<Scalars['Int']>;
  override_selling_price?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Sum_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** update columns of table "rocketjaket.inventory_product" */
export enum Rocketjaket_Inventory_Product_Update_Column {
  /** column name */
  AvailableQty = 'available_qty',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MinAvailableQty = 'min_available_qty',
  /** column name */
  OverrideCapitalPrice = 'override_capital_price',
  /** column name */
  OverrideDiscount = 'override_discount',
  /** column name */
  OverrideSellingPrice = 'override_selling_price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Inventory_Product_Var_Pop_Fields = {
  __typename?: 'rocketjaket_inventory_product_var_pop_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Var_Pop_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Inventory_Product_Var_Samp_Fields = {
  __typename?: 'rocketjaket_inventory_product_var_samp_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Var_Samp_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rocketjaket_Inventory_Product_Variance_Fields = {
  __typename?: 'rocketjaket_inventory_product_variance_fields';
  available_qty?: Maybe<Scalars['Float']>;
  min_available_qty?: Maybe<Scalars['Float']>;
  override_capital_price?: Maybe<Scalars['Float']>;
  override_discount?: Maybe<Scalars['Float']>;
  override_selling_price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rocketjaket.inventory_product" */
export type Rocketjaket_Inventory_Product_Variance_Order_By = {
  available_qty?: InputMaybe<Order_By>;
  min_available_qty?: InputMaybe<Order_By>;
  override_capital_price?: InputMaybe<Order_By>;
  override_discount?: InputMaybe<Order_By>;
  override_selling_price?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant = {
  __typename?: 'rocketjaket_inventory_product_variant';
  id: Scalars['Int'];
  /** An object relationship */
  inventory_product: Rocketjaket_Inventory_Product;
  inventory_product_id: Scalars['uuid'];
  /** An object relationship */
  inventory_variant_metadata: Rocketjaket_Inventory_Variant_Metadata;
  inventory_variant_metadata_id: Scalars['Int'];
};

/** aggregated selection of "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Aggregate = {
  __typename?: 'rocketjaket_inventory_product_variant_aggregate';
  aggregate?: Maybe<Rocketjaket_Inventory_Product_Variant_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Inventory_Product_Variant>;
};

/** aggregate fields of "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Aggregate_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_aggregate_fields';
  avg?: Maybe<Rocketjaket_Inventory_Product_Variant_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Inventory_Product_Variant_Max_Fields>;
  min?: Maybe<Rocketjaket_Inventory_Product_Variant_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Inventory_Product_Variant_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Inventory_Product_Variant_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Inventory_Product_Variant_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Inventory_Product_Variant_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Inventory_Product_Variant_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Inventory_Product_Variant_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Inventory_Product_Variant_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Aggregate_Order_By = {
  avg?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Max_Order_By>;
  min?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Min_Order_By>;
  stddev?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Sum_Order_By>;
  var_pop?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Var_Samp_Order_By>;
  variance?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Arr_Rel_Insert_Input = {
  data: Array<Rocketjaket_Inventory_Product_Variant_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Rocketjaket_Inventory_Product_Variant_On_Conflict>;
};

/** aggregate avg on columns */
export type Rocketjaket_Inventory_Product_Variant_Avg_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_avg_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rocketjaket.inventory_product_variant". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Inventory_Product_Variant_Bool_Exp = {
  _and?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Bool_Exp>>;
  _not?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
  _or?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  inventory_product?: InputMaybe<Rocketjaket_Inventory_Product_Bool_Exp>;
  inventory_product_id?: InputMaybe<Uuid_Comparison_Exp>;
  inventory_variant_metadata?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
  inventory_variant_metadata_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.inventory_product_variant" */
export enum Rocketjaket_Inventory_Product_Variant_Constraint {
  /** unique or primary key constraint */
  InventoryProductVariantPkey = 'inventory_product_variant_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  inventory_variant_metadata_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  inventory_product?: InputMaybe<Rocketjaket_Inventory_Product_Obj_Rel_Insert_Input>;
  inventory_product_id?: InputMaybe<Scalars['uuid']>;
  inventory_variant_metadata?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_Obj_Rel_Insert_Input>;
  inventory_variant_metadata_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Rocketjaket_Inventory_Product_Variant_Max_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_max_fields';
  id?: Maybe<Scalars['Int']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_product_id?: InputMaybe<Order_By>;
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rocketjaket_Inventory_Product_Variant_Min_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_min_fields';
  id?: Maybe<Scalars['Int']>;
  inventory_product_id?: Maybe<Scalars['uuid']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_product_id?: InputMaybe<Order_By>;
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Mutation_Response = {
  __typename?: 'rocketjaket_inventory_product_variant_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Inventory_Product_Variant>;
};

/** on conflict condition type for table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_On_Conflict = {
  constraint: Rocketjaket_Inventory_Product_Variant_Constraint;
  update_columns?: Array<Rocketjaket_Inventory_Product_Variant_Update_Column>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.inventory_product_variant". */
export type Rocketjaket_Inventory_Product_Variant_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_product?: InputMaybe<Rocketjaket_Inventory_Product_Order_By>;
  inventory_product_id?: InputMaybe<Order_By>;
  inventory_variant_metadata?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_Order_By>;
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_inventory_product_variant */
export type Rocketjaket_Inventory_Product_Variant_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rocketjaket.inventory_product_variant" */
export enum Rocketjaket_Inventory_Product_Variant_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InventoryProductId = 'inventory_product_id',
  /** column name */
  InventoryVariantMetadataId = 'inventory_variant_metadata_id'
}

/** input type for updating data in table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  inventory_product_id?: InputMaybe<Scalars['uuid']>;
  inventory_variant_metadata_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Inventory_Product_Variant_Stddev_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Inventory_Product_Variant_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Inventory_Product_Variant_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Rocketjaket_Inventory_Product_Variant_Sum_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_sum_fields';
  id?: Maybe<Scalars['Int']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** update columns of table "rocketjaket.inventory_product_variant" */
export enum Rocketjaket_Inventory_Product_Variant_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InventoryProductId = 'inventory_product_id',
  /** column name */
  InventoryVariantMetadataId = 'inventory_variant_metadata_id'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Inventory_Product_Variant_Var_Pop_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Inventory_Product_Variant_Var_Samp_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rocketjaket_Inventory_Product_Variant_Variance_Fields = {
  __typename?: 'rocketjaket_inventory_product_variant_variance_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_variant_metadata_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rocketjaket.inventory_product_variant" */
export type Rocketjaket_Inventory_Product_Variant_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  inventory_variant_metadata_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata = {
  __typename?: 'rocketjaket_inventory_variant_metadata';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  inventory_product_variants: Array<Rocketjaket_Inventory_Product_Variant>;
  /** An aggregate relationship */
  inventory_product_variants_aggregate: Rocketjaket_Inventory_Product_Variant_Aggregate;
  updated_at: Scalars['timestamptz'];
  variant_title: Scalars['String'];
  variant_value: Scalars['String'];
};


/** columns and relationships of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_MetadataInventory_Product_VariantsArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_MetadataInventory_Product_Variants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Aggregate = {
  __typename?: 'rocketjaket_inventory_variant_metadata_aggregate';
  aggregate?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Inventory_Variant_Metadata>;
};

/** aggregate fields of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Aggregate_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_aggregate_fields';
  avg?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Max_Fields>;
  min?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Inventory_Variant_Metadata_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Avg_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rocketjaket.inventory_variant_metadata". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Inventory_Variant_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  inventory_product_variants?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  variant_title?: InputMaybe<String_Comparison_Exp>;
  variant_value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.inventory_variant_metadata" */
export enum Rocketjaket_Inventory_Variant_Metadata_Constraint {
  /** unique or primary key constraint */
  InventoryVariantMetadataPkey = 'inventory_variant_metadata_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  inventory_product_variants?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  variant_title?: InputMaybe<Scalars['String']>;
  variant_value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Max_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant_title?: Maybe<Scalars['String']>;
  variant_value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Min_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant_title?: Maybe<Scalars['String']>;
  variant_value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Mutation_Response = {
  __typename?: 'rocketjaket_inventory_variant_metadata_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Inventory_Variant_Metadata>;
};

/** input type for inserting object relation for remote table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Inventory_Variant_Metadata_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_On_Conflict = {
  constraint: Rocketjaket_Inventory_Variant_Metadata_Constraint;
  update_columns?: Array<Rocketjaket_Inventory_Variant_Metadata_Update_Column>;
  where?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.inventory_variant_metadata". */
export type Rocketjaket_Inventory_Variant_Metadata_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inventory_product_variants_aggregate?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  variant_title?: InputMaybe<Order_By>;
  variant_value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_inventory_variant_metadata */
export type Rocketjaket_Inventory_Variant_Metadata_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rocketjaket.inventory_variant_metadata" */
export enum Rocketjaket_Inventory_Variant_Metadata_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VariantTitle = 'variant_title',
  /** column name */
  VariantValue = 'variant_value'
}

/** input type for updating data in table "rocketjaket.inventory_variant_metadata" */
export type Rocketjaket_Inventory_Variant_Metadata_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  variant_title?: InputMaybe<Scalars['String']>;
  variant_value?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Stddev_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Sum_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "rocketjaket.inventory_variant_metadata" */
export enum Rocketjaket_Inventory_Variant_Metadata_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VariantTitle = 'variant_title',
  /** column name */
  VariantValue = 'variant_value'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Var_Pop_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Var_Samp_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rocketjaket_Inventory_Variant_Metadata_Variance_Fields = {
  __typename?: 'rocketjaket_inventory_variant_metadata_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "rocketjaket.product" */
export type Rocketjaket_Product = {
  __typename?: 'rocketjaket_product';
  capital_price: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  discount: Scalars['Int'];
  id: Scalars['uuid'];
  /** An array relationship */
  inventory_products: Array<Rocketjaket_Inventory_Product>;
  /** An aggregate relationship */
  inventory_products_aggregate: Rocketjaket_Inventory_Product_Aggregate;
  name: Scalars['String'];
  photo_url?: Maybe<Scalars['String']>;
  /** An object relationship */
  product_category: Rocketjaket_Product_Category;
  product_category_id: Scalars['Int'];
  selling_price: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "rocketjaket.product" */
export type Rocketjaket_ProductInventory_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Product_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.product" */
export type Rocketjaket_ProductInventory_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Product_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.product" */
export type Rocketjaket_Product_Aggregate = {
  __typename?: 'rocketjaket_product_aggregate';
  aggregate?: Maybe<Rocketjaket_Product_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Product>;
};

/** aggregate fields of "rocketjaket.product" */
export type Rocketjaket_Product_Aggregate_Fields = {
  __typename?: 'rocketjaket_product_aggregate_fields';
  avg?: Maybe<Rocketjaket_Product_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Product_Max_Fields>;
  min?: Maybe<Rocketjaket_Product_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Product_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Product_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Product_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Product_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Product_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Product_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.product" */
export type Rocketjaket_Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rocketjaket_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rocketjaket.product" */
export type Rocketjaket_Product_Aggregate_Order_By = {
  avg?: InputMaybe<Rocketjaket_Product_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rocketjaket_Product_Max_Order_By>;
  min?: InputMaybe<Rocketjaket_Product_Min_Order_By>;
  stddev?: InputMaybe<Rocketjaket_Product_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rocketjaket_Product_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rocketjaket_Product_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rocketjaket_Product_Sum_Order_By>;
  var_pop?: InputMaybe<Rocketjaket_Product_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rocketjaket_Product_Var_Samp_Order_By>;
  variance?: InputMaybe<Rocketjaket_Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rocketjaket.product" */
export type Rocketjaket_Product_Arr_Rel_Insert_Input = {
  data: Array<Rocketjaket_Product_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Rocketjaket_Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Rocketjaket_Product_Avg_Fields = {
  __typename?: 'rocketjaket_product_avg_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Avg_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rocketjaket.product". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Product_Bool_Exp = {
  _and?: InputMaybe<Array<Rocketjaket_Product_Bool_Exp>>;
  _not?: InputMaybe<Rocketjaket_Product_Bool_Exp>;
  _or?: InputMaybe<Array<Rocketjaket_Product_Bool_Exp>>;
  capital_price?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  discount?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inventory_products?: InputMaybe<Rocketjaket_Inventory_Product_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  photo_url?: InputMaybe<String_Comparison_Exp>;
  product_category?: InputMaybe<Rocketjaket_Product_Category_Bool_Exp>;
  product_category_id?: InputMaybe<Int_Comparison_Exp>;
  selling_price?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "rocketjaket.product_category" */
export type Rocketjaket_Product_Category = {
  __typename?: 'rocketjaket_product_category';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  products: Array<Rocketjaket_Product>;
  /** An aggregate relationship */
  products_aggregate: Rocketjaket_Product_Aggregate;
};


/** columns and relationships of "rocketjaket.product_category" */
export type Rocketjaket_Product_CategoryProductsArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Product_Order_By>>;
  where?: InputMaybe<Rocketjaket_Product_Bool_Exp>;
};


/** columns and relationships of "rocketjaket.product_category" */
export type Rocketjaket_Product_CategoryProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Product_Order_By>>;
  where?: InputMaybe<Rocketjaket_Product_Bool_Exp>;
};

/** aggregated selection of "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Aggregate = {
  __typename?: 'rocketjaket_product_category_aggregate';
  aggregate?: Maybe<Rocketjaket_Product_Category_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Product_Category>;
};

/** aggregate fields of "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Aggregate_Fields = {
  __typename?: 'rocketjaket_product_category_aggregate_fields';
  avg?: Maybe<Rocketjaket_Product_Category_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Product_Category_Max_Fields>;
  min?: Maybe<Rocketjaket_Product_Category_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Product_Category_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Product_Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Product_Category_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Product_Category_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Product_Category_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Product_Category_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Product_Category_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rocketjaket_Product_Category_Avg_Fields = {
  __typename?: 'rocketjaket_product_category_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rocketjaket.product_category". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Product_Category_Bool_Exp = {
  _and?: InputMaybe<Array<Rocketjaket_Product_Category_Bool_Exp>>;
  _not?: InputMaybe<Rocketjaket_Product_Category_Bool_Exp>;
  _or?: InputMaybe<Array<Rocketjaket_Product_Category_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Rocketjaket_Product_Bool_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.product_category" */
export enum Rocketjaket_Product_Category_Constraint {
  /** unique or primary key constraint */
  ProductCategoryPkey = 'product_category_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Rocketjaket_Product_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rocketjaket_Product_Category_Max_Fields = {
  __typename?: 'rocketjaket_product_category_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rocketjaket_Product_Category_Min_Fields = {
  __typename?: 'rocketjaket_product_category_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Mutation_Response = {
  __typename?: 'rocketjaket_product_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Product_Category>;
};

/** input type for inserting object relation for remote table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Product_Category_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Rocketjaket_Product_Category_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_On_Conflict = {
  constraint: Rocketjaket_Product_Category_Constraint;
  update_columns?: Array<Rocketjaket_Product_Category_Update_Column>;
  where?: InputMaybe<Rocketjaket_Product_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.product_category". */
export type Rocketjaket_Product_Category_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Rocketjaket_Product_Aggregate_Order_By>;
};

/** primary key columns input for table: rocketjaket_product_category */
export type Rocketjaket_Product_Category_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rocketjaket.product_category" */
export enum Rocketjaket_Product_Category_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "rocketjaket.product_category" */
export type Rocketjaket_Product_Category_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Product_Category_Stddev_Fields = {
  __typename?: 'rocketjaket_product_category_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Product_Category_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_product_category_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Product_Category_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_product_category_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rocketjaket_Product_Category_Sum_Fields = {
  __typename?: 'rocketjaket_product_category_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "rocketjaket.product_category" */
export enum Rocketjaket_Product_Category_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Product_Category_Var_Pop_Fields = {
  __typename?: 'rocketjaket_product_category_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Product_Category_Var_Samp_Fields = {
  __typename?: 'rocketjaket_product_category_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rocketjaket_Product_Category_Variance_Fields = {
  __typename?: 'rocketjaket_product_category_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** unique or primary key constraints on table "rocketjaket.product" */
export enum Rocketjaket_Product_Constraint {
  /** unique or primary key constraint */
  ProductPkey = 'product_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.product" */
export type Rocketjaket_Product_Inc_Input = {
  capital_price?: InputMaybe<Scalars['Int']>;
  discount?: InputMaybe<Scalars['Int']>;
  product_category_id?: InputMaybe<Scalars['Int']>;
  selling_price?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.product" */
export type Rocketjaket_Product_Insert_Input = {
  capital_price?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  discount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  inventory_products?: InputMaybe<Rocketjaket_Inventory_Product_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  photo_url?: InputMaybe<Scalars['String']>;
  product_category?: InputMaybe<Rocketjaket_Product_Category_Obj_Rel_Insert_Input>;
  product_category_id?: InputMaybe<Scalars['Int']>;
  selling_price?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rocketjaket_Product_Max_Fields = {
  __typename?: 'rocketjaket_product_max_fields';
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Max_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  photo_url?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rocketjaket_Product_Min_Fields = {
  __typename?: 'rocketjaket_product_min_fields';
  capital_price?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Min_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  photo_url?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rocketjaket.product" */
export type Rocketjaket_Product_Mutation_Response = {
  __typename?: 'rocketjaket_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Product>;
};

/** input type for inserting object relation for remote table "rocketjaket.product" */
export type Rocketjaket_Product_Obj_Rel_Insert_Input = {
  data: Rocketjaket_Product_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Rocketjaket_Product_On_Conflict>;
};

/** on conflict condition type for table "rocketjaket.product" */
export type Rocketjaket_Product_On_Conflict = {
  constraint: Rocketjaket_Product_Constraint;
  update_columns?: Array<Rocketjaket_Product_Update_Column>;
  where?: InputMaybe<Rocketjaket_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.product". */
export type Rocketjaket_Product_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inventory_products_aggregate?: InputMaybe<Rocketjaket_Inventory_Product_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  photo_url?: InputMaybe<Order_By>;
  product_category?: InputMaybe<Rocketjaket_Product_Category_Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_product */
export type Rocketjaket_Product_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "rocketjaket.product" */
export enum Rocketjaket_Product_Select_Column {
  /** column name */
  CapitalPrice = 'capital_price',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  ProductCategoryId = 'product_category_id',
  /** column name */
  SellingPrice = 'selling_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rocketjaket.product" */
export type Rocketjaket_Product_Set_Input = {
  capital_price?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  discount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  photo_url?: InputMaybe<Scalars['String']>;
  product_category_id?: InputMaybe<Scalars['Int']>;
  selling_price?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Product_Stddev_Fields = {
  __typename?: 'rocketjaket_product_stddev_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Stddev_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Product_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_product_stddev_pop_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Stddev_Pop_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Product_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_product_stddev_samp_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Stddev_Samp_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Rocketjaket_Product_Sum_Fields = {
  __typename?: 'rocketjaket_product_sum_fields';
  capital_price?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
  product_category_id?: Maybe<Scalars['Int']>;
  selling_price?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Sum_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** update columns of table "rocketjaket.product" */
export enum Rocketjaket_Product_Update_Column {
  /** column name */
  CapitalPrice = 'capital_price',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  ProductCategoryId = 'product_category_id',
  /** column name */
  SellingPrice = 'selling_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Product_Var_Pop_Fields = {
  __typename?: 'rocketjaket_product_var_pop_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Var_Pop_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Product_Var_Samp_Fields = {
  __typename?: 'rocketjaket_product_var_samp_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Var_Samp_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rocketjaket_Product_Variance_Fields = {
  __typename?: 'rocketjaket_product_variance_fields';
  capital_price?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product_category_id?: Maybe<Scalars['Float']>;
  selling_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rocketjaket.product" */
export type Rocketjaket_Product_Variance_Order_By = {
  capital_price?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  product_category_id?: InputMaybe<Order_By>;
  selling_price?: InputMaybe<Order_By>;
};

/** columns and relationships of "rocketjaket.store" */
export type Rocketjaket_Store = {
  __typename?: 'rocketjaket_store';
  address?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "rocketjaket.store" */
export type Rocketjaket_Store_Aggregate = {
  __typename?: 'rocketjaket_store_aggregate';
  aggregate?: Maybe<Rocketjaket_Store_Aggregate_Fields>;
  nodes: Array<Rocketjaket_Store>;
};

/** aggregate fields of "rocketjaket.store" */
export type Rocketjaket_Store_Aggregate_Fields = {
  __typename?: 'rocketjaket_store_aggregate_fields';
  avg?: Maybe<Rocketjaket_Store_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rocketjaket_Store_Max_Fields>;
  min?: Maybe<Rocketjaket_Store_Min_Fields>;
  stddev?: Maybe<Rocketjaket_Store_Stddev_Fields>;
  stddev_pop?: Maybe<Rocketjaket_Store_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rocketjaket_Store_Stddev_Samp_Fields>;
  sum?: Maybe<Rocketjaket_Store_Sum_Fields>;
  var_pop?: Maybe<Rocketjaket_Store_Var_Pop_Fields>;
  var_samp?: Maybe<Rocketjaket_Store_Var_Samp_Fields>;
  variance?: Maybe<Rocketjaket_Store_Variance_Fields>;
};


/** aggregate fields of "rocketjaket.store" */
export type Rocketjaket_Store_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rocketjaket_Store_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rocketjaket_Store_Avg_Fields = {
  __typename?: 'rocketjaket_store_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rocketjaket.store". All fields are combined with a logical 'AND'. */
export type Rocketjaket_Store_Bool_Exp = {
  _and?: InputMaybe<Array<Rocketjaket_Store_Bool_Exp>>;
  _not?: InputMaybe<Rocketjaket_Store_Bool_Exp>;
  _or?: InputMaybe<Array<Rocketjaket_Store_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  latitude?: InputMaybe<String_Comparison_Exp>;
  longitude?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rocketjaket.store" */
export enum Rocketjaket_Store_Constraint {
  /** unique or primary key constraint */
  StoreNameKey = 'store_name_key',
  /** unique or primary key constraint */
  StorePkey = 'store_pkey'
}

/** input type for incrementing numeric columns in table "rocketjaket.store" */
export type Rocketjaket_Store_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rocketjaket.store" */
export type Rocketjaket_Store_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rocketjaket_Store_Max_Fields = {
  __typename?: 'rocketjaket_store_max_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rocketjaket_Store_Min_Fields = {
  __typename?: 'rocketjaket_store_min_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rocketjaket.store" */
export type Rocketjaket_Store_Mutation_Response = {
  __typename?: 'rocketjaket_store_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rocketjaket_Store>;
};

/** on conflict condition type for table "rocketjaket.store" */
export type Rocketjaket_Store_On_Conflict = {
  constraint: Rocketjaket_Store_Constraint;
  update_columns?: Array<Rocketjaket_Store_Update_Column>;
  where?: InputMaybe<Rocketjaket_Store_Bool_Exp>;
};

/** Ordering options when selecting data from "rocketjaket.store". */
export type Rocketjaket_Store_Order_By = {
  address?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rocketjaket_store */
export type Rocketjaket_Store_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rocketjaket.store" */
export enum Rocketjaket_Store_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rocketjaket.store" */
export type Rocketjaket_Store_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Rocketjaket_Store_Stddev_Fields = {
  __typename?: 'rocketjaket_store_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rocketjaket_Store_Stddev_Pop_Fields = {
  __typename?: 'rocketjaket_store_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rocketjaket_Store_Stddev_Samp_Fields = {
  __typename?: 'rocketjaket_store_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rocketjaket_Store_Sum_Fields = {
  __typename?: 'rocketjaket_store_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "rocketjaket.store" */
export enum Rocketjaket_Store_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Rocketjaket_Store_Var_Pop_Fields = {
  __typename?: 'rocketjaket_store_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rocketjaket_Store_Var_Samp_Fields = {
  __typename?: 'rocketjaket_store_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rocketjaket_Store_Variance_Fields = {
  __typename?: 'rocketjaket_store_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** fetch data from the table: "rocketjaket.inventory_product" */
  rocketjaket_inventory_product: Array<Rocketjaket_Inventory_Product>;
  /** fetch aggregated fields from the table: "rocketjaket.inventory_product" */
  rocketjaket_inventory_product_aggregate: Rocketjaket_Inventory_Product_Aggregate;
  /** fetch data from the table: "rocketjaket.inventory_product" using primary key columns */
  rocketjaket_inventory_product_by_pk?: Maybe<Rocketjaket_Inventory_Product>;
  /** fetch data from the table: "rocketjaket.inventory_product_variant" */
  rocketjaket_inventory_product_variant: Array<Rocketjaket_Inventory_Product_Variant>;
  /** fetch aggregated fields from the table: "rocketjaket.inventory_product_variant" */
  rocketjaket_inventory_product_variant_aggregate: Rocketjaket_Inventory_Product_Variant_Aggregate;
  /** fetch data from the table: "rocketjaket.inventory_product_variant" using primary key columns */
  rocketjaket_inventory_product_variant_by_pk?: Maybe<Rocketjaket_Inventory_Product_Variant>;
  /** fetch data from the table: "rocketjaket.inventory_variant_metadata" */
  rocketjaket_inventory_variant_metadata: Array<Rocketjaket_Inventory_Variant_Metadata>;
  /** fetch aggregated fields from the table: "rocketjaket.inventory_variant_metadata" */
  rocketjaket_inventory_variant_metadata_aggregate: Rocketjaket_Inventory_Variant_Metadata_Aggregate;
  /** fetch data from the table: "rocketjaket.inventory_variant_metadata" using primary key columns */
  rocketjaket_inventory_variant_metadata_by_pk?: Maybe<Rocketjaket_Inventory_Variant_Metadata>;
  /** fetch data from the table: "rocketjaket.product" */
  rocketjaket_product: Array<Rocketjaket_Product>;
  /** fetch aggregated fields from the table: "rocketjaket.product" */
  rocketjaket_product_aggregate: Rocketjaket_Product_Aggregate;
  /** fetch data from the table: "rocketjaket.product" using primary key columns */
  rocketjaket_product_by_pk?: Maybe<Rocketjaket_Product>;
  /** fetch data from the table: "rocketjaket.product_category" */
  rocketjaket_product_category: Array<Rocketjaket_Product_Category>;
  /** fetch aggregated fields from the table: "rocketjaket.product_category" */
  rocketjaket_product_category_aggregate: Rocketjaket_Product_Category_Aggregate;
  /** fetch data from the table: "rocketjaket.product_category" using primary key columns */
  rocketjaket_product_category_by_pk?: Maybe<Rocketjaket_Product_Category>;
  /** fetch data from the table: "rocketjaket.store" */
  rocketjaket_store: Array<Rocketjaket_Store>;
  /** fetch aggregated fields from the table: "rocketjaket.store" */
  rocketjaket_store_aggregate: Rocketjaket_Store_Aggregate;
  /** fetch data from the table: "rocketjaket.store" using primary key columns */
  rocketjaket_store_by_pk?: Maybe<Rocketjaket_Store>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootAuth_Account_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_Account_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};


export type Subscription_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};


export type Subscription_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Providers_Order_By>>;
  where?: InputMaybe<Auth_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Providers_Order_By>>;
  where?: InputMaybe<Auth_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


export type Subscription_RootAuth_Refresh_TokensArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Subscription_RootAuth_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


export type Subscription_RootRocketjaket_Inventory_ProductArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Product_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Inventory_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Product_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Inventory_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRocketjaket_Inventory_Product_VariantArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Inventory_Product_Variant_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Product_Variant_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Product_Variant_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Inventory_Product_Variant_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRocketjaket_Inventory_Variant_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Variant_Metadata_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Inventory_Variant_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Inventory_Variant_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Inventory_Variant_Metadata_Order_By>>;
  where?: InputMaybe<Rocketjaket_Inventory_Variant_Metadata_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Inventory_Variant_Metadata_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRocketjaket_ProductArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Product_Order_By>>;
  where?: InputMaybe<Rocketjaket_Product_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Product_Order_By>>;
  where?: InputMaybe<Rocketjaket_Product_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRocketjaket_Product_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Product_Category_Order_By>>;
  where?: InputMaybe<Rocketjaket_Product_Category_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Product_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Product_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Product_Category_Order_By>>;
  where?: InputMaybe<Rocketjaket_Product_Category_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Product_Category_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRocketjaket_StoreArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Store_Order_By>>;
  where?: InputMaybe<Rocketjaket_Store_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Store_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rocketjaket_Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rocketjaket_Store_Order_By>>;
  where?: InputMaybe<Rocketjaket_Store_Bool_Exp>;
};


export type Subscription_RootRocketjaket_Store_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type Update_Inventory_Product = {
  available_qty?: InputMaybe<Scalars['Int']>;
  min_available_qty?: InputMaybe<Scalars['Int']>;
  override_capital_price?: InputMaybe<Scalars['Int']>;
  override_discount?: InputMaybe<Scalars['Int']>;
  override_selling_price?: InputMaybe<Scalars['Int']>;
  product_id: Scalars['uuid'];
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An object relationship */
  account?: Maybe<Auth_Accounts>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  account?: InputMaybe<Auth_Accounts_Bool_Exp>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  account?: InputMaybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  display_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  account?: InputMaybe<Auth_Accounts_Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  display_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type Inventory_BulkDeleteInventoryProductVariantByIdMutationVariables = Exact<{
  inventory_product_id?: InputMaybe<Scalars['uuid']>;
}>;


export type Inventory_BulkDeleteInventoryProductVariantByIdMutation = { __typename?: 'mutation_root', delete_rocketjaket_inventory_product_variant?: { __typename?: 'rocketjaket_inventory_product_variant_mutation_response', affected_rows: number } | null | undefined };

export type Inventory_BulkDeleteInventoryVariantByPKsMutationVariables = Exact<{
  deleteIds: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type Inventory_BulkDeleteInventoryVariantByPKsMutation = { __typename?: 'mutation_root', delete_rocketjaket_inventory_variant_metadata?: { __typename?: 'rocketjaket_inventory_variant_metadata_mutation_response', affected_rows: number } | null | undefined };

export type Inventory_BulkUpdateInventoryVariantTitleMutationVariables = Exact<{
  old_variant_title: Scalars['String'];
  new_variant_title: Scalars['String'];
}>;


export type Inventory_BulkUpdateInventoryVariantTitleMutation = { __typename?: 'mutation_root', update_rocketjaket_inventory_variant_metadata?: { __typename?: 'rocketjaket_inventory_variant_metadata_mutation_response', affected_rows: number } | null | undefined };

export type Inventory_CreateInventoryProductVariantsMutationVariables = Exact<{
  insert_rocketjaket_inventory_product_variant: Array<Rocketjaket_Inventory_Product_Variant_Insert_Input> | Rocketjaket_Inventory_Product_Variant_Insert_Input;
}>;


export type Inventory_CreateInventoryProductVariantsMutation = { __typename?: 'mutation_root', insert_rocketjaket_inventory_product_variant?: { __typename?: 'rocketjaket_inventory_product_variant_mutation_response', affected_rows: number } | null | undefined };

export type Inventory_CreateInventoryVariantMetadataMutationVariables = Exact<{
  objects: Array<Rocketjaket_Inventory_Variant_Metadata_Insert_Input> | Rocketjaket_Inventory_Variant_Metadata_Insert_Input;
}>;


export type Inventory_CreateInventoryVariantMetadataMutation = { __typename?: 'mutation_root', insert_rocketjaket_inventory_variant_metadata?: { __typename?: 'rocketjaket_inventory_variant_metadata_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'rocketjaket_inventory_variant_metadata', id: number, variant_title: string }> } | null | undefined };

export type Inventory_UpdateInventoryProductByPkMutationVariables = Exact<{
  id: Scalars['uuid'];
  available_qty?: InputMaybe<Scalars['Int']>;
  min_available_qty?: InputMaybe<Scalars['Int']>;
  override_capital_price?: InputMaybe<Scalars['Int']>;
  override_selling_price?: InputMaybe<Scalars['Int']>;
  override_discount?: InputMaybe<Scalars['Int']>;
  product_id: Scalars['uuid'];
}>;


export type Inventory_UpdateInventoryProductByPkMutation = { __typename?: 'mutation_root', update_rocketjaket_inventory_product_by_pk?: { __typename?: 'rocketjaket_inventory_product', product: { __typename?: 'rocketjaket_product', name: string, product_category: { __typename?: 'rocketjaket_product_category', name: string } } } | null | undefined };

export type Inventory_UpdateOneVariantValueByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  variant_value?: InputMaybe<Scalars['String']>;
}>;


export type Inventory_UpdateOneVariantValueByPkMutation = { __typename?: 'mutation_root', update_rocketjaket_inventory_variant_metadata_by_pk?: { __typename?: 'rocketjaket_inventory_variant_metadata', id: number } | null | undefined };


export const Inventory_BulkDeleteInventoryProductVariantByIdDocument = gql`
    mutation Inventory_BulkDeleteInventoryProductVariantById($inventory_product_id: uuid = "") {
  delete_rocketjaket_inventory_product_variant(
    where: {inventory_product_id: {_eq: $inventory_product_id}}
  ) {
    affected_rows
  }
}
    `;
export const Inventory_BulkDeleteInventoryVariantByPKsDocument = gql`
    mutation Inventory_BulkDeleteInventoryVariantByPKs($deleteIds: [Int!]!) {
  delete_rocketjaket_inventory_variant_metadata(where: {id: {_in: $deleteIds}}) {
    affected_rows
  }
}
    `;
export const Inventory_BulkUpdateInventoryVariantTitleDocument = gql`
    mutation Inventory_BulkUpdateInventoryVariantTitle($old_variant_title: String!, $new_variant_title: String!) {
  update_rocketjaket_inventory_variant_metadata(
    where: {variant_title: {_eq: $old_variant_title}}
    _set: {variant_title: $new_variant_title}
  ) {
    affected_rows
  }
}
    `;
export const Inventory_CreateInventoryProductVariantsDocument = gql`
    mutation Inventory_CreateInventoryProductVariants($insert_rocketjaket_inventory_product_variant: [rocketjaket_inventory_product_variant_insert_input!]!) {
  insert_rocketjaket_inventory_product_variant(
    objects: $insert_rocketjaket_inventory_product_variant
  ) {
    affected_rows
  }
}
    `;
export const Inventory_CreateInventoryVariantMetadataDocument = gql`
    mutation Inventory_CreateInventoryVariantMetadata($objects: [rocketjaket_inventory_variant_metadata_insert_input!]!) {
  insert_rocketjaket_inventory_variant_metadata(objects: $objects) {
    affected_rows
    returning {
      id
      variant_title
    }
  }
}
    `;
export const Inventory_UpdateInventoryProductByPkDocument = gql`
    mutation Inventory_UpdateInventoryProductByPK($id: uuid!, $available_qty: Int, $min_available_qty: Int, $override_capital_price: Int, $override_selling_price: Int, $override_discount: Int, $product_id: uuid!) {
  update_rocketjaket_inventory_product_by_pk(
    pk_columns: {id: $id}
    _set: {available_qty: $available_qty, min_available_qty: $min_available_qty, override_capital_price: $override_capital_price, override_selling_price: $override_selling_price, override_discount: $override_discount, product_id: $product_id}
  ) {
    product {
      name
      product_category {
        name
      }
    }
  }
}
    `;
export const Inventory_UpdateOneVariantValueByPkDocument = gql`
    mutation Inventory_UpdateOneVariantValueByPK($id: Int!, $variant_value: String) {
  update_rocketjaket_inventory_variant_metadata_by_pk(
    pk_columns: {id: $id}
    _set: {variant_value: $variant_value}
  ) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const Inventory_BulkDeleteInventoryProductVariantByIdDocumentString = print(Inventory_BulkDeleteInventoryProductVariantByIdDocument);
const Inventory_BulkDeleteInventoryVariantByPKsDocumentString = print(Inventory_BulkDeleteInventoryVariantByPKsDocument);
const Inventory_BulkUpdateInventoryVariantTitleDocumentString = print(Inventory_BulkUpdateInventoryVariantTitleDocument);
const Inventory_CreateInventoryProductVariantsDocumentString = print(Inventory_CreateInventoryProductVariantsDocument);
const Inventory_CreateInventoryVariantMetadataDocumentString = print(Inventory_CreateInventoryVariantMetadataDocument);
const Inventory_UpdateInventoryProductByPkDocumentString = print(Inventory_UpdateInventoryProductByPkDocument);
const Inventory_UpdateOneVariantValueByPkDocumentString = print(Inventory_UpdateOneVariantValueByPkDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Inventory_BulkDeleteInventoryProductVariantById(variables?: Inventory_BulkDeleteInventoryProductVariantByIdMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: Inventory_BulkDeleteInventoryProductVariantByIdMutation | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Inventory_BulkDeleteInventoryProductVariantByIdMutation>(Inventory_BulkDeleteInventoryProductVariantByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Inventory_BulkDeleteInventoryProductVariantById');
    },
    Inventory_BulkDeleteInventoryVariantByPKs(variables: Inventory_BulkDeleteInventoryVariantByPKsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: Inventory_BulkDeleteInventoryVariantByPKsMutation | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Inventory_BulkDeleteInventoryVariantByPKsMutation>(Inventory_BulkDeleteInventoryVariantByPKsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Inventory_BulkDeleteInventoryVariantByPKs');
    },
    Inventory_BulkUpdateInventoryVariantTitle(variables: Inventory_BulkUpdateInventoryVariantTitleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: Inventory_BulkUpdateInventoryVariantTitleMutation | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Inventory_BulkUpdateInventoryVariantTitleMutation>(Inventory_BulkUpdateInventoryVariantTitleDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Inventory_BulkUpdateInventoryVariantTitle');
    },
    Inventory_CreateInventoryProductVariants(variables: Inventory_CreateInventoryProductVariantsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: Inventory_CreateInventoryProductVariantsMutation | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Inventory_CreateInventoryProductVariantsMutation>(Inventory_CreateInventoryProductVariantsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Inventory_CreateInventoryProductVariants');
    },
    Inventory_CreateInventoryVariantMetadata(variables: Inventory_CreateInventoryVariantMetadataMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: Inventory_CreateInventoryVariantMetadataMutation | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Inventory_CreateInventoryVariantMetadataMutation>(Inventory_CreateInventoryVariantMetadataDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Inventory_CreateInventoryVariantMetadata');
    },
    Inventory_UpdateInventoryProductByPK(variables: Inventory_UpdateInventoryProductByPkMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: Inventory_UpdateInventoryProductByPkMutation | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Inventory_UpdateInventoryProductByPkMutation>(Inventory_UpdateInventoryProductByPkDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Inventory_UpdateInventoryProductByPK');
    },
    Inventory_UpdateOneVariantValueByPK(variables: Inventory_UpdateOneVariantValueByPkMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: Inventory_UpdateOneVariantValueByPkMutation | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<Inventory_UpdateOneVariantValueByPkMutation>(Inventory_UpdateOneVariantValueByPkDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Inventory_UpdateOneVariantValueByPK');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;