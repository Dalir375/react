import { useState } from 'react';
import './Vidosik.css'
function Vidosik(props){
    const { title, channelName, img } = props;
    const [likesCounter, setLikesPlus] = useState(0)
    const likesPlus = () =>{
      setLikesPlus(likesCounter + 1)
    }
    return (
    <div className='video'>
    <img className='video-img' src={img} alt="video image" />
    <p>{title}</p>
    <p>{channelName}</p>
    <div className='video-footer'>
      <p>likes: {likesCounter}</p>
      <button onClick={likesPlus}>Like</button>
    </div>
  </div>
    )
}
export default Vidosik;