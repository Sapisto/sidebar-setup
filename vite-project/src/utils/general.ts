import { AxiosError } from "axios";

export const returnMsgFromAxiosError = (
  error: AxiosError<any, any>,
  fallBack: string
) => {
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.message
  ) {
    return error.response.data.message;
  } else if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.Message
  ) {
    return error.response.data.Message;
  } else if (error.message) {
    return error.message;
  } else {
    return fallBack;
  }
};

export const headers = {
  "x-api-version": "1.0",
};

export const convertSingleFileToBlob = async (file: File) => {
  let base64string: string = "";
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const base64String: any = reader.result;
    base64string = base64String;
  };

  const imageBlob = await fetch(base64string).then((response) =>
    response.blob()
  );

  return imageBlob;
};

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);

  return `${day}/${month}/${year}`;
}
