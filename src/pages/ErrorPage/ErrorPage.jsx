import img from '../../assets/class/404 .jpg'
import { useSpring, animated,config } from '@react-spring/web'
import './Error.css'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  const imageAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0)' },
    config: config.wobbly,
    delay: 500,
  });
  return (
    <div className="not-found">
    <animated.div style={imageAnimation}>
      <img src={img} alt="404 Not Found" className='w-[100%] h-[100vh]'/>
    </animated.div>
    <Link to="/" className="button top-left">
      Go to Home Page
    </Link>
  </div>
  );
};

export default ErrorPage;