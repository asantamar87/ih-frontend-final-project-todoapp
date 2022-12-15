import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    profile: null,
    usernamme:null,
    fullname:null
  }),
  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      if(user) {
        this.user = user;
        const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .match({ id: this.user.id })

        if (profile) this.profile = profile[0];
        //console.log('user in store: ', this.user);
        //console.log('profile in store: ', this.profile);
      }
    },

    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) {
        this.user = user;
        console.log(this.user);

        const { data: profile } = await supabase.from('profiles').insert([
          {
            user_id: this.user.id,
            username: email
          }
        ])
      }
    },

    async signIn(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      },
      {
        shouldCreateUser: false,
      });
      if (error) throw error;
      if (user) {
        this.user = user;
        const { data: profile } = await supabase
        .from('profiles')
        .select()
        .match({ user_id: this.user.id })

        if (profile) this.profile = profile[0];
        console.log('profile in store: ', profile);
      }
    },

    async signOut(){
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },

    async passwordRecovery (email){
      await supabase.auth.api.resetPasswordForEmail(email);
      console.log("Hola Pepsicola");
    },

    async updatePassword(mail, pass) {
      console.log("UPDATE PASSWORD");

      const {
        data,
        error
      } = await supabase.auth.api.updateUser({
        email: mail,
        password: pass,
        data: {
          hello: 'world'
        }
      })
      console.log(data);
    },

    //THIS FUNCTION UPDATE THE USERNAME IN THE PROFILES TABLE FROM SUABASE
    async updateUser(username,fullname,avatar_url,website) {
      const { data, error } = await supabase
        .from("profiles")
        .update([
          {
            username: username,
            fullname: fullname,
            avatar_url:avatar_url,
            website:website,
          },
        ])
        .match({ id: useUserStore().user.id });
    },
    
  //   async resetPassword  (accessToken, newPassword) {
  //     const {user, error} = await supabase.auth.api.updateUser(
  //       accessToken, 
  //       {password: newPassword}
  //   )
  //   if (error) throw error
  //   return user
    
  // },


  async loginWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      // provider can be 'github', 'google', 'gitlab', and more
      provider: "google",
    });
  },

  async loginWithGithub() {
    const { user, session, error } = await supabase.auth.signIn({
      // provider can be 'github', 'google', 'gitlab', and more
      provider: "github",
    });
  },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
