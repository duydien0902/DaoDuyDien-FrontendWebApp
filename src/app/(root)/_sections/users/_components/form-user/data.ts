export const data: {
  placeholder?: string;
  name: "email" | "fullname" | "phone" | "status" | "role";
  label: string;
  type: "input" | "checkbox" | "select";
  require: boolean;
  data?: {
    label: string;
    value: string;
  }[];
}[] = [
  {
    placeholder: "Enter full name...",
    name: "fullname",
    label: "Full Name",
    type: "input",
    require: true,
  },
  {
    placeholder: "Enter email...",
    name: "email",
    label: "Email",
    type: "input",
    require: true,
  },
  {
    placeholder: "Enter phone...",
    name: "phone",
    label: "Phone",
    type: "input",
    require: true,
  },
  {
    placeholder: "Choose role",
    name: "role",
    label: "Role",
    type: "select",
    require: true,
    data: [
      {
        label: "UX/UI",
        value: "ux/ui",
      },
      {
        label: "FRONT END",
        value: "front end",
      },
      {
        label: "BACK END",
        value: "back end",
      },
    ],
  },
  {
    name: "status",
    label: "active",
    type: "checkbox",
    require: false,
  },
];
