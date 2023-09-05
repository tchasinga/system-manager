import AnimationPhone from '../Animation/animation_lm68r58u.json';
import Lottie from 'lottie-react';

const Bringphone = () => {
    return (
        <div className='majorContainer'>
            <h1>Bringphone</h1>
            <Lottie className='PhoneAnimate' animationData={AnimationPhone} />
        </div>
    );
}

export default Bringphone;
