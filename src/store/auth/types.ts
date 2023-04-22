type IAuthState = {
  credentials: {
    token: string;
  };
  setCredentials: (token: string) => void;
};

export { IAuthState };
