import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile){
        return (
            <div>
                <div>
                    <img height="300px" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
                </div>
                <div className={classes.discriptionBlock}>
                    <div>
                    <Preloader />
                    </div>
                ava + description
                </div>
            </div>
        )
    }
    
    return (
            <div>
                <div>
                    <img height="300px" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
                </div>
                <div className={classes.discriptionBlock}>
                    <img src={props.profile.photos.large}></img>
                ava + description
                </div>
            </div>
    )
}

export default ProfileInfo;