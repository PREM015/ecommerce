// src/constants/avatar.ts

import { AvatarCategory } from '@/types/avatar';

export const avatarCategories: AvatarCategory[] = [
  {
    name: 'male',
    images: [
      { name: 'Male 1', url: '/images/ui/avatar-placeholder/boy/AV1.png' },
      { name: 'Male 2', url: '/images/ui/avatar-placeholder/boy/AV2.png' },
      // ...
    ],
  },
  {
    name: 'female',
    images: [
      { name: 'Female 1', url: '/images/ui/avatar-placeholder/girl/AV1.png' },
      { name: 'Female 2', url: '/images/ui/avatar-placeholder/girl/AV2.png' },
      // ...
    ],
  },
  // add more categories if needed
];
