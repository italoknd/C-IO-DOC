import { http } from "./api-config";

export default {
  save: (person) => {
    return http.post("people", person);
  },

  update: (person) => {
    return http.put("people", person);
  },

  findAll: () => {
    return http.get("people");
  },

  delete: (person) => {
    return http.delete(`people/${person.id}`);
  },
};