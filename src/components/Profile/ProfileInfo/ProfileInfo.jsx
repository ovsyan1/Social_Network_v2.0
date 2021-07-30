import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
            <div>
                <div>
                    <img height="300px" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
                </div>
                <div className={classes.discriptionBlock}>
                ava + description
                </div>
            </div>
    )
}

export default ProfileInfo;