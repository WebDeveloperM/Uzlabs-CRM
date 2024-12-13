import { useState, useEffect } from 'react';

const PaginationComponent = ({ data }: { data: any }) => {
    const [itemsPerPage, setItemsPerPage] = useState(10); // Dastlabki qiymat 10
    const [currentPage, setCurrentPage] = useState(1);

    // Ekran kengligini tekshirish va element miqdorini yangilash
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1536) { // 2xl o'lcham (1536px dan katta)
                setItemsPerPage(10);
            } else {
                setItemsPerPage(5);
            }
        };

        // Dastlabki o‘lchamni tekshirish
        handleResize();

        // Ekran o‘lchami o‘zgarganda tekshirish uchun event listener qo‘shish
        window.addEventListener('resize', handleResize);

        // Komponent unmounted bo‘lganda event listenerni o‘chirish
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Sahifadagi elementlarni hisoblash
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Sahifa almashtirish
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <ul>
                {currentItems.map((item: any, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div>
                {/* Pagination tugmalari */}
                {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(num => (
                    <button key={num} onClick={() => paginate(num + 1)}>
                        {num + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PaginationComponent;
