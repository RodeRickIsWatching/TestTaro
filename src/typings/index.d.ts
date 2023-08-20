export interface ObjectType {
  [key: string]: any;
}

export type ObjectArray = ObjectType[];

export type SortType = 'upward' | 'mediad' | 'downward';

export interface TokenBalance {
  balance: string;
  balanceReadable: string;
  allowance?: string;
}

export interface TokenBalanceInterface {
  [key: string]: TokenBalance;
}
