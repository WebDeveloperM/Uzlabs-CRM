import notFound from "@core/static/not_found.svg"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src={notFound} alt="404" />
            <p>Упс! Страница не найдена</p>
        </div>
    )
}
