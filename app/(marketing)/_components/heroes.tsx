import Image from "next/image";

export const Heroes = ()=> {
    return(
        <div className="flex flex-col items-center justify-center
        max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px]
                sm:h-[350px] md:w-[380px] md:h-[380px]">
                    <Image
                        src="/documents.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="document"
                    />
                    <Image
                        src="/documents-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="document"
                    />
                </div>
                <div className="relative w-[380px] h-[380px] hidden
                md:block">
                    <Image
                        src='/reading.png'
                        fill
                        className="object-contain dark:hidden"
                        alt="Reading"
                    />
                    <Image
                        src='/reading-dark.png'
                        fill
                        className="object-contain hidden dark:block"
                        alt="Reading"
                    />
                </div>
            </div>
        </div>
    )
}