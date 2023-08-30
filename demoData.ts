interface base {
  id: number;
  name: string;
}

interface Menu extends base {
  price: number;
  description?: string;
}

interface MenuCategories extends base {
  companyId: number;
}

interface Appdata {
  menu: Menu[];
  menuCategories: MenuCategories[];
}

const menu: Menu[] = [
  { id: 1, name: "Mote Hin Kar", price: 1000, description: "hot and spicy" },
  { id: 2, name: "Shan Khout Swal", price: 1000, description: "hot and spicy" },
  { id: 3, name: "La Phat Tote", price: 1000, description: "hot and spicy" },
];

const menuCategories: MenuCategories[] = [
  { id: 1, name: "Most Popular", companyId: 1 },
  { id: 2, name: "Hot Dish", companyId: 1 },
  { id: 3, name: "Cold Dish", companyId: 1 },
];

export const appData: Appdata = {
  menu,
  menuCategories,
};
