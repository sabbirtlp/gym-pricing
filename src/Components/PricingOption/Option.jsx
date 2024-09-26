import PropTypes from 'prop-types'
import { FaCheckCircle } from "react-icons/fa";

const Option = ({ option }) => {
    const { name, price, duration, features } = option;
    return (
        <div className='flex flex-col flex-grow px-4 py-10 gap-3 rounded-xl justify-between shadow-2xl bg-black'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-semibold text-white'>{name}</h1>
                <h2 className='text-xl font-semibold text-gray-400'>Price: {price}</h2>
                <h3 className='text-lg font-semibold text-green-500'>{duration}</h3>
            </div>
            <div><ul> {features.map((feature, idx) =>  <li className='flex hover:text-green-500 text-gray-400 gap-y-3 gap-x-2 text-lg items-center' key={idx}><FaCheckCircle ></FaCheckCircle>{feature}</li>)}</ul></div>
            <button className="text-white font-semibold hover:bg-green-400 bg-green-600 py-2 px-4 rounded">Buy Now</button>
        </div>
    );
};
Option.propTypes = {
    option: PropTypes.object,
}
export default Option;