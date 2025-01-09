interface IAuthInput {
  email: string!;
  password: string!;
}

interface ISigninResDto {
  signin: {
    id: string;
    token: string;
  };
}

interface IcreateUserResDto {
  createUser: {
    id: string;
    token: string;
  };
}
