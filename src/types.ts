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
