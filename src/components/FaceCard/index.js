import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    c: {
        backgroundColor: 'white',
        position: "absolute",
        // maxWidth: "500px",
        // maxHeight: "500px",
        width: window.innerWidth - 6,
        height: window.innerHeight - 100,
        cursor: "pointer",
        willChange: ["transform", "opacity"],
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
    },

}));

function FaceCard(props) {
    const classes = useStyles();
    const { t, i18n } = useTranslation()
    const [flipped, set] = useState(true)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
            <div style={{
                height: window.innerHeight - 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} onClick={() => set(state => !state)}>

                {/* back */}
                <a.div className={classes.c} style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
                    <div>
                        <h3>{i18n.language === "en" ? props.data.name.en : props.data.name.th}</h3>
                    </div>
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <div style={{
                                width: 150
                            }}>
                                <h5>Rating</h5>
                            </div>
                            <div >
                                <Rating name="read-only" value={props.data.rating} readOnly />
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <div style={{
                                width: 150
                            }}>
                                <h5>Rank</h5>
                            </div>
                            <div>
                                <p>{props.data.rank} views</p>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <div style={{
                                width: 150
                            }}>
                                <h5>Genre(s)</h5>
                            </div>
                            <div>
                                {props.data.genre.map(_genre => (
                                    <Link key={_genre} href={`${_genre.type}${_genre.link}`}>{i18n.language === "en" ? _genre.name.en : _genre.name.th},</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </a.div>

                {/* font */}
                <a.div className={classes.c} style={{
                    backgroundImage: `url(${props.data.img})`,
                    backgroundSize: 'cover',
                    border: '3px solid #fff',
                    opacity,
                    transform: transform.interpolate(t => `${t} rotateX(180deg)`)
                }} />
            </div>
           
    )
}

export default FaceCard;