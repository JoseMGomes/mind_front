import { FiHome, FiClipboard } from "react-icons/fi";

export const routes = {
  protected: [
    {
      path: "dashboard/Home",
      title: "Home",
      discription: "moaiefii",
      icon: FiHome,
      component: <h1>Pagina Principal</h1>,
    },
    {
      path: "dashboard/cursos",
      title: "Cursos",
      discription: "moaiefii",
      icon: FiClipboard,
      component: <h1>Cursos</h1>,
    },
  ],
};
