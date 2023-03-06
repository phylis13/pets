import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
    {
    id: 2,
    url: '/pets',
    text: 'pets',
  },
  {
    id: 3,
    url: '/about',
    text: 'about',
  },

  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
  
]