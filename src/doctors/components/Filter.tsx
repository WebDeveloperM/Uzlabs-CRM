
type Props = {
    filter: boolean
}

export default function Filter({ filter }: Props) {

    return (

        <div className={`${filter ? 'block' : 'hidden'}  duration-500 2xl:m-5 mx-3 `}>
            <div className="sm:grid grid-cols-12 ">
                <div className="lg:col-span-2 ">
                    <div className="relative m-[2px] mb-3 mr-5 float-left flex items-center gap-2">
                        <span>ID: </span>
                        <input id="inputSearch" type="text" className="block w-24 2xl:w-64 rounded-lg border dark:border-none dark:bg-neutral-600 py-1 pl-2 pr-4 text-sm focus:border-secondary/50 focus:outline-none focus:ring-1 focus:ring-secondary/50" />
                    </div>

                </div>
                <div className="lg:col-span-3  ">
                    <div className="relative m-[2px] mb-3 mr-5 float-left flex items-center gap-2">
                        <span>Фамилия: </span>
                        <input id="inputSearch" type="text" className="block w-48 rounded-lg border dark:border-none dark:bg-neutral-600 py-1 pl-2 pr-4 text-sm focus:border-secondary/50 focus:outline-none focus:ring-1 focus:ring-secondary/50" />
                    </div>
                </div>
                <div className="lg:col-span-3  sm:ms-5">
                    <div className="relative m-[2px] mb-3 mr-5 float-left flex items-center gap-2">
                        <span>Имя: </span>
                        <input id="inputSearch" type="text" className="block w-48 rounded-lg border dark:border-none dark:bg-neutral-600 py-1 pl-2 pr-4 text-sm focus:border-secondary/50 focus:outline-none focus:ring-1 focus:ring-secondary/50" />
                    </div>
                </div>
                <div className="lg:col-span-3 sm:ms-6">
                    <div className="relative m-[2px] mb-3 mr-5 float-left flex items-center gap-2">
                        <span>Отчество: </span>
                        <input id="inputSearch" type="text" className="block w-48  rounded-lg border dark:border-none dark:bg-neutral-600 py-1 pl-2 pr-4 text-sm focus:border-secondary/50 focus:outline-none focus:ring-1 focus:ring-secondary/50" />
                    </div>
                </div>

            </div>


        </div>
    )
}
