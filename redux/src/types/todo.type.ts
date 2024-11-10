export interface ITodos {
  id?: number;
  todo?: string;
  completed?: boolean;
  userId?: number;
}

export interface ITodoList {
  limit?: number;
  skip?: number;
  total?: number;
  todos?: ITodos[];
}
