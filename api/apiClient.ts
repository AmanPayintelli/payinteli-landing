import axios, { AxiosError, Method } from "axios";

type ApiMethod = "get" | "post" | "patch" | "delete" | "put";

type ApiRequestArgs = {
  method: ApiMethod;
  url: string;
  body?: unknown;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
  sessionId?: string;
};

export const apiClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiRequest = async <T = unknown>({
  method,
  url,
  body,
  params,
  headers,
  sessionId,
}: ApiRequestArgs): Promise<T> => {
  try {
    const response = await apiClient.request<T>({
      method: method as Method,
      url,
      data: body,
      params,
      headers: {
        ...(sessionId ? { Authorization: `Bearer ${sessionId}` } : {}),
        ...(headers || {}),
      },
    });

    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string; error?: string }>;

    const message =
      err.response?.data?.message ||
      err.response?.data?.error ||
      "Request failed";

    throw new Error(message);
  }
};
