import { ReactNode } from "react"
import Button from "./Button"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { clsx } from "clsx"
import Container from "@core/components/Container.tsx"
import { Link } from "react-router-dom"

export type Props = {
    title?: string
    backTo?: string
    start?: ReactNode
    middle?: ReactNode
    end?: ReactNode
    className?: string
}

export function Navbar({ title, start, middle, end, backTo, className }: Props) {
    return (
        <div className={clsx("w-full items-center z-50", className)}>
            <Container className="navbar h-20">
                <div className="navbar-start">
                    {backTo ? (
                        <Button to={backTo} icon={ArrowLeftIcon} color="ghost" size="sm" className="mr-3 -ml-2" />
                    ) : null}
                    {start}
                    <Link to="/" className="text-xl text-primary font-semibold">
                        {title}
                    </Link>
                </div>

                <div className="navbar-center">{middle}</div>
                <div className="navbar-end">{end}</div>
            </Container>
            <div className="w-full bg-primary h-2" />
        </div>
    )
}
