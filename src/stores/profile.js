import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";


export const useProfileStore = defineStore("profiles", {
    state: () => ({
      profiles: null,
    }),
    actions: {
      async fetchProfiles() {
        const { data: profiles } = await supabase
          .from("profiles")
          .select("*")
          .order("id", { ascending: false });
        this.profiles = profiles;
        return this.profiles;
      },

      async updateProfile(username, full_name, website) {
        const { data, error } = await supabase
          .from("profiles")
          .update({ username: username, full_name: full_name, website: website })
          .match({ id: id });
      },

    }
  });