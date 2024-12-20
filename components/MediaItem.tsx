"use client"

import {Song} from "@/types";
import {useLoadingImage} from "@/hooks/useLoadingImage";
import Image from "next/image";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
}

export const MediaItem: React.FC<MediaItemProps> = ({
    data,
    onClick
}) => {
    const imageUrl = useLoadingImage(data);

    const handleClick = () => {
        if(onClick) {
            return onClick(data.id);
        }

        //Default turn on player
    }


    return(
        <div onClick={handleClick}
        className="
        flex
        items-center
        gap-x-3
        cursor-pointer
        hover:bg-neutral-800/50
        w-fullp-2
        rounded-md
        "
        >
            <div
            className="
            relative
            rounded-md
            min-h-[48px]
            min-w-[48px]
            overflow-hidden
            ">
                <Image fill src={imageUrl || '/images/liked.png'} alt='Media Item' className="object-cover"/>
            </div>
            <div className="
            flex
            flex-col
            gap-y-1
            overflow-hidden
            ">
                <p className="text-white truncate">{data.title}</p>
                <p className="text-neutral-400 text-sm truncate">{data.author}</p>
            </div>
        </div>
    )
}