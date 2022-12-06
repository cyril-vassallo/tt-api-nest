export interface CommitInterface {
  url: string;
  hash: string;
}

export interface ErrorInterface {
  code: number;
  message: string;
}

export interface FeatureInterface {
  title: string;
  url: string;
  method: string;
  description: string;
}

export interface FeaturesInterface {
  user: FeatureInterface[];
  task: FeatureInterface[];
  github: FeatureInterface[];
  file: FeatureInterface[];
  auth: FeatureInterface[];
}

export interface FileUrlDataInterface {
  url?: string;
  code: number;
  message: string;
}

export interface GithubInterface {
  id: number;
  user: UserInterface;
  owner: string;
  repository: string;
  branch: string;
  enabled: boolean;
  token: string;
  committer: string;
}

export interface IdInterface {
  id: string;
}

export interface MetaInterface {
  method: string;
  urn: string;
  uri: string;
}

export interface NavigationItemInterface {
  id: number;
  label: string;
  title: string;
  path: string;
  isActive: boolean;
  componentId: string;
}

export interface RoleInterface {
  name: string;
  permissions: string[];
}

export interface TaskInterface {
  id?: string;
  user: UserInterface;
  date: string;
  list?: string[];
  commits?: CommitInterface[];
}

export interface UserInterface {
  id?: string;
  lastName: string;
  firstName: string;
  email?: string;
  password?: string;
  job?: string;
  description?: string;
  photo?: string;
  role: RoleInterface;
}

export interface JwtUserInterface {
  id?: string;
  email?: string;
}
