import { get } from "./httpMethods";

export const api = {
  getToDos: async () => await get("/api/to-do"),
};