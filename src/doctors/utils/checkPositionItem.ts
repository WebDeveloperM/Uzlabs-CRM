interface Item {
    id: number;
    nameUz: string;
    nameRu?: string;
}

interface Data {
    [key: string]: {
        [key: string]: Item[];
    };
}


export const getMatchedItems = (data: Data, position: number[], language: 'uz' | 'rus') => {
    const items: Item[] = [];

    Object.values(data[language]).forEach((category) => {
        category.forEach((item) => {
            if (position.includes(item.id)) {
                items.push(item)
            
            }
        });
    });

    return items;
};

