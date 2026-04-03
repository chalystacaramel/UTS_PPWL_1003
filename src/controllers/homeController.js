import { render } from "../config/viewEngine";
import { prisma } from "../config/prisma";

export const home = async (c) => {
  const mahasiswa = await prisma.mahasiswa.findMany();
  const html = await render("home", {
    title: "Dashboard Bun MVC",
    mahasiswa: mahasiswa,
  });
  return c.html(html);
};
