import "./globals.css";
import { TodosProvider } from "@/components/TodoContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <TodosProvider>
        <body>{children}</body>
      </TodosProvider>
    </html>
  );
}
