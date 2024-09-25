import { GeneralResponse } from "@/utils/genType";
import { AxiosError } from "axios";

export interface LoginReq {
  userName: string;
  password: string;
}

export interface forgotPasswordReq {
  userName: string;
}

export interface changePasswordReq {
  newPassword: string;
  confirmPassword: string;
  token: string;
  userName: string;
}

export interface forgotPasswordRes {
  data?: GeneralResponse<forgotPasswordReq>;
  error?: AxiosError;
}

export interface changePasswordRes {
  data?: GeneralResponse<changePasswordReq>;
  error?: AxiosError;
}

export interface LoginRes {
  id: string;
  userName: string;
  email: string;
  userDetailsId: string;
  name: string;
  branchCode: string;
  location: string;
  department: string;
  status: number;
  isLoggedIn: boolean;
  isOnboarded: boolean;
  lastLoginTime: string;
  createdAt: string;
  updatedAt: string;
  roles: string[];
  claims: string[];
  jwToken: string;
  expiresIn: number;
  expiryDate: string;
}

export interface LoginResults {
  data?: GeneralResponse<LoginRes>;
  error?: AxiosError;
}

export interface PasswordCreationReq {
  usernameOrEmail: string;
  currentPassword?: string;
  newPassword?: string;
  confirmNewPassword: string;
}

export interface PasswordCreationRes {
  data: unknown;
}

export interface PasswordCreationResults {
  data?: GeneralResponse<PasswordCreationRes>;
  error?: AxiosError;
}

export interface CompleteProfileReq {
  Username?: string;
  Email: string;
  PhoneNumber?: string;
  CurrentPassword?: string;
  ProfilePicture?: File;
  ShortBio?: string;
}

export interface CompleteProfileRes {
  data: unknown;
}

export interface CompleteProfileResults {
  data?: GeneralResponse<CompleteProfileRes>;
  error?: AxiosError;
}

export interface LoggedUserResponse {
  name: string;
  status: number;
  isOnboarded: boolean;
  roleInStartup: string;
  isInStartup: boolean;
  createdAt: string;
  profilePictureUrl: string;
  shortBio: string;
  isAlumni: boolean;
  phoneNumber: string;
  email: string;
  userName: string;
}
