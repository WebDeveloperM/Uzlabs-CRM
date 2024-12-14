import { useEffect } from 'react'
import $ from "jquery"; // jQuery import qilish

export default function JqueryHandler() {

    useEffect(() => {
        $(".toggle-sidebar").on("click", function () {
            $(".page-wrapper").toggleClass("toggled");
        });

        // Sidebarni pin qilish
        $(".pin-sidebar").on("click", function () {
            if ($(".page-wrapper").hasClass("pinned")) {
                // Hoverda unpin qilish
                $(".page-wrapper").removeClass("pinned");
                $("#sidebar").unbind("hover");
            } else {
                $(".page-wrapper").addClass("pinned");
                $("#sidebar").on("mouseenter", function () {
                    console.log("mouseenter");
                    $(".page-wrapper").addClass("sidebar-hovered");
                });

                $("#sidebar").on("mouseleave", function () {
                    console.log("mouseout");
                    $(".page-wrapper").removeClass("sidebar-hovered");
                });
            }
        });

        $("#loading-wrapper").fadeOut(3000);

        // Sidebarni overlay orqali toggle qilish
        $("#overlay").on("click", function () {
            $(".page-wrapper").toggleClass("toggled");
        });

        // Oynaning o'lchami o'zgarganda
        const handleResize = () => {
            const width = (window as Window).innerWidth; // `window`ni to'g'ri aniqlash
            if (width <= 768) {
                $(".page-wrapper").removeClass("pinned");
            }
            if (width >= 768) {
                $(".page-wrapper").removeClass("toggled");
            }
        };

        $(window).resize(handleResize);
        handleResize(); // initial resize check

        // Cleanup: Komponent o'chirilganda jQuery hodisalarini olib tashlash
        return () => {
            $(".toggle-sidebar").off("click");
            $(".pin-sidebar").off("click");
            $("#overlay").off("click");
            $(window).off("resize", handleResize);
            $("#loading-wrapper").stop();
        };
    }, []); // Empty dependency array — bu faqat bir marta ishlaydi

    return (
        <div></div>
    )
}
