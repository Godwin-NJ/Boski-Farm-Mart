import {useEffect, useState} from 'react'
import landingImage from '../src/srcimg/plethorafruits.jpg'
const Home = () => {
    const [user, setUser] = useState([]);

        useEffect(() => {
            setUser('LOADING ');
            return(
                 <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                        <div class="circle"></div>
                    </div><div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                    </div>
                </div>
            )
        },[])


    return ( 
        <div  >
            <img src={landingImage} alt="landing-page image" className="landpage"/>
            <p className="centered">
                    GRILL HUT <br />
                    Juice | Food | Grill <br/>
            Parfait || Food-Stuffs || Life and Frozen chicken
            </p>

        </div>
     );
}
 
export default Home;