export const data: {
  placeholder?: string;
  name: "email" | "password";
  label: string;
  type: "input" | "password";
  require: boolean;
}[] = [
  {
    placeholder: "Enter email...",
    name: "email",
    label: "Email",
    type: "input",
    require: true,
  },
  {
    placeholder: "Enter password...",
    name: "password",
    label: "Password",
    type: "password",
    require: true,
  },
];
