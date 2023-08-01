export type UserSignUpDto = {
  id?: string | number;
  email: string;
  name: string;
  password: string;
  permissions: number[];
};

export type Permission = {
  id: number;
  name: string;
  description?: string;
};

export type User = {
  id: number;
  user_id: string;
  user_name: string;
  email?: string;
  name?: string;
  permission: Permission[];
};

export type Pagination = {
  page: number;
  limit: number;
};

type CellAlign = 'left' | 'center' | 'right';

export type TableOptions = {
  columns: {
    [key: string]: {
      title: string;
      width?: string | number;
      align?: CellAlign;
    };
  };
  body?: {
    [key: string]: {
      align?: CellAlign;
    };
  };
};

export type SpinnerSize = 'small' | 'medium' | 'large';

export interface SelectOption extends Object {
  selected?: boolean;
}

export type OnChangeSelectFn<T> = (options: T[]) => void;

export type OnTouched = () => void;

export type TagColor =
  | 'slate'
  | 'amber'
  | 'emerald'
  | 'cyan'
  | 'blue'
  | 'indigo'
  | 'purple';

export enum TagBackgroundColor {
  slate = 'bg-slate-500',
  amber = 'bg-amber-500',
  emerald = 'bg-emerald-500',
  cyan = 'bg-cyan-500',
  blue = 'bg-blue-500',
  indigo = 'bg-indigo-500',
  purple = 'bg-purple-500',
}
