import React, { Suspense } from 'react';
import { FaceCard } from '@n-manga/components';
import cover from '@n-manga/datas/maou_ni_natte_node_dungeon_tsukutte_jingai_musume_to_honobono_suru/cover'
import { Button } from '@material-ui/core';

function MaouNiNatteNodeDungeonTsukutteJingaiMusumeToHonobonoSuru() {

    return (
        <Suspense fallback="loading">
            <div>
                <FaceCard data={cover}></FaceCard>
                <div style={{
                height: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Button style={{
                    margin:5
                }} variant="contained" color="primary">อ่านตอนแรก</Button>
                <Button style={{
                    margin:5
                }} variant="contained" color="primary">อ่านตอนล่าสุด</Button>
            </div>
            <div style={{
                height:window.innerHeight,
                width:window.innerWidth
            }}></div>
            </div>
        </Suspense>
    )

}

export default MaouNiNatteNodeDungeonTsukutteJingaiMusumeToHonobonoSuru;