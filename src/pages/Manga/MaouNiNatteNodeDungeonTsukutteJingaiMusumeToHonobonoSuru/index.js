import React, { Suspense } from 'react';
import { FaceCard } from '@n-manga/components';
import cover from '@n-manga/datas/maou_ni_natte_node_dungeon_tsukutte_jingai_musume_to_honobono_suru/cover'


function MaouNiNatteNodeDungeonTsukutteJingaiMusumeToHonobonoSuru() {

    return (
        <Suspense fallback="loading">
            <div>
                <FaceCard data={cover}></FaceCard>
            </div>
        </Suspense>
    )

}

export default MaouNiNatteNodeDungeonTsukutteJingaiMusumeToHonobonoSuru;