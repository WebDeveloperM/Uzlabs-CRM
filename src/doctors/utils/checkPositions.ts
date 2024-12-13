type Position = number[];

interface Item {
  id: number;
  nameUz?: string;
  nameRu?: string;
}

interface Category {
  [key: string]: Item[];
}

interface Data {
  uz: Category;
  rus: Category;
}

export default function getCategoryNames(data: Data, positions: Position): string[] {
  const categories = data.uz; // faqat o'zbek tilidagi kategoriyalarni ishlatamiz
  const categoryNames: string[] = [];

  for (const [categoryName, items] of Object.entries(categories)) {
    if (items.some(item => positions.includes(item.id))) {
      categoryNames.push(`${categoryName} `);
      
    }
  }

  return categoryNames;
}
