import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      <p>layout de autenticação</p>
    </div>
  );
}
