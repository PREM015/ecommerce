export type AvatarCategory = {
  name: string;
  avatars: {
    name: string;
    url: string;
  }[];
};

export const avatarCategories: AvatarCategory[] = [
  {
    name: "Boy",
    avatars: [
      {
        name: "AV9",
        url: "/images/ui/avatar-placeholder/boy/AV9.png",
      },
    ],
  },
  {
    name: "Girl",
    avatars: [
      {
        name: "AV57",
        url: "/images/ui/avatar-placeholder/girl/AV57.png",
      },
    ],
  },
  {
    name: "ID",
    avatars: [
      {
        name: "AV99",
        url: "/images/ui/avatar-placeholder/id/AV99.png",
      },
    ],
  },
  {
    name: "Job - Astronomer",
    avatars: [
      {
        name: "Astronomer Female",
        url: "/images/ui/avatar-placeholder/job/astronomer/female.png",
      },
      {
        name: "Astronomer Male",
        url: "/images/ui/avatar-placeholder/job/astronomer/male.png",
      },
    ],
  },
  {
    name: "Job - Chef",
    avatars: [
      {
        name: "Chef Male",
        url: "/images/ui/avatar-placeholder/job/chef/male.png",
      },
      {
        name: "Chef Female",
        url: "/images/ui/avatar-placeholder/job/chef/female.png",
      },
    ],
  },
  {
    name: "Job - Designer",
    avatars: [
      {
        name: "Designer Male",
        url: "/images/ui/avatar-placeholder/job/designer/male.png",
      },
      {
        name: "Designer Female",
        url: "/images/ui/avatar-placeholder/job/designer/female.png",
      },
    ],
  },
  {
    name: "Job - Doctor",
    avatars: [
      {
        name: "Doctor Male",
        url: "/images/ui/avatar-placeholder/job/doctor/male.png",
      },
      {
        name: "Doctor Female",
        url: "/images/ui/avatar-placeholder/job/doctor/female.png",
      },
    ],
  },
];
