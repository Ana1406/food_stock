export type UserSignUpDto = {
  id?: string | number;
  email: string;
  name: string;
  password: string;
  permissions: number[];
};

export type Pagination = {
  page: number;
  limit: number;
};

export type TableOptions = {
  columns: {
    [key: string]: {
      title: string;
    };
  };
};
