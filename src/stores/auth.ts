import { ref } from 'vue';
import axios from 'axios';
import { defineStore } from 'pinia';

export interface GetProfile {

};

export interface GetFavorites {

};

export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref(!!localStorage.getItem('isAuth'));
  const profile = ref<GetProfile[]>([]);
  const fav = ref<GetFavorites[]>([]);

  async function SignUp(signInEmail: string, signInPass: string, signInName: string, signInSurname: string) {
    try {
      await axios.post('https://cinemaguide.skillbox.cc/user', {
        email: signInEmail,
        password: signInPass,
        name: signInName,
        surname: signInSurname
      }, {
        withCredentials: true
      });
    } catch (error) {
      throw new Error('Sign up error');
    };
  };

  async function LogIn(logInEmail: string, logInPass: string) {
    try {
      await axios.post('https://cinemaguide.skillbox.cc/auth/login', {
        email: logInEmail,
        password: logInPass
      }, {
        withCredentials: true
      });
      isAuth.value = true;
      localStorage.setItem('isAuth', 'true');
    } catch (error) {
      throw new Error('Log in error');
    };
  };

  async function GetProfile() {
    try {
      const data = await fetch('https://cinemaguide.skillbox.cc/profile', {credentials: 'include'});
      const response = await data.json();
      profile.value = response;
    } catch(error) {
      throw new Error('Error loading data from profile');
    };
  };

  async function EddFavorites(filmId: number) {
    try {
      await axios.post('https://cinemaguide.skillbox.cc/favorites', {id: filmId},
      {
        withCredentials: true
      });
    } catch (error) {
      throw new Error('Error adding film to favorites');
    };
  };

  async function GetFavorites() {
    try {
      const data = await fetch('https://cinemaguide.skillbox.cc/favorites', {credentials: 'include'});
      const response = await data.json();
      fav.value = response;
    } catch(error) {
      throw new Error('Error loading films from favorites');
    };
  };

  async function DeleteFavorites(deleteFilm: number) {
    try {
      await axios.post('https://cinemaguide.skillbox.cc/favorites', {id: deleteFilm},
      {
        withCredentials: true
      });
    } catch (error) {
      throw new Error('Error removing film from favorites');
    };
  };

  async function LoginOut() {
    try {
      await fetch('https://cinemaguide.skillbox.cc/auth/logout', {credentials: 'include'});
      isAuth.value = false;
      localStorage.removeItem('isAuth');
    } catch(error) {
      throw new Error('Unlogout error');
    };
  };

  return {SignUp, LogIn, isAuth, GetProfile, profile, EddFavorites, GetFavorites, fav, DeleteFavorites, LoginOut};
});