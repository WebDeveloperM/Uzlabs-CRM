import { useWorkerPositions } from "@clinica/hooks/addClinic";




export function getRelevantIds(language: 'uz'): number[] {
    const workerPositions = useWorkerPositions()
    // Define categories to extract based on language
    const categories = language === 'uz'
        ? ['Kassa', 'Laboratoriya', 'Shifokor']
        : ['Касса', 'Лаборатория', 'Врач'];
    // const categories = ['Kassa', 'Laboratoriya', 'Shifokor']


    // Access the relevant language data
    const languageData = workerPositions.data?.data[language];

    if (!languageData) {
        console.error(`Language data for '${language}' not found.`);
        return [];
    }

    // Extract IDs from the specified categories
    const ids: number[] = categories.flatMap(category => {
        const items = languageData[category] || [];
        return items.map(item => item.id);
    });

    return ids;
}

// // Example usage
// const uzbekIds = getRelevantIds('uz');
// console.log('Uzbek IDs:', uzbekIds);

// const russianIds = getRelevantIds('rus');
// console.log('Russian IDs:', russianIds);
