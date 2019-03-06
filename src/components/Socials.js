import React, {Component} from 'react';
import SOCIALS from '../data/socials';

const Social = props => {
        const { name, img, url } = props.social;

        return (
            <span style={{ margin: '10px'}}>
                <a href={url}><img src={img} alt={name} style={{ width: 50, height: 50}}/></a>

            </span>
        )
    }
const Socials = () => (
            <div>
                <h3>Connect With Me</h3>
                { SOCIALS.map(social => {
                    return (
                        <Social key={social.id} social={social}/>
                    )
                })}
            </div>
        )

export default Socials;