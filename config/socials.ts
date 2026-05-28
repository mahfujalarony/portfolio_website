import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@mahfujalarony",
    icon: Icons.gitHub,
    link: "https://github.com/mahfujalarony",
  },
  {
    name: "LinkedIn",
    username: "Mahfuj Alam",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/mahfuj-alam-rony/",
  },
  {
    name: "LeetCode",
    username: "@mahhfujalamrony",
    icon: Icons.leetcode,
    link: "https://leetcode.com/u/mahhfujalamrony/",
  },
  {
    name: "Gmail",
    username: "mahfujalamrony07",
    icon: Icons.gmail,
    link: "mailto:mahfujalamrony07@gmail.com",
  },
];
