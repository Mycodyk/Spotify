"use client"

import {Song} from "@/types"

interface SongItemProps{
    data: Song;
    onClick: (id: string) => void
}

export const SongItem: React.FC<SongItemProps> = ({
    data,
    onClick
}) => {
    return(
        <div>
            Song Item
        </div>
    )
}