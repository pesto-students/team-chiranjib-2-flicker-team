export interface User {
  _id?: string;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  picture: string;
  token: string;
  documents?: Array<string>;
  sharedDocuments?: Array<string>;
}