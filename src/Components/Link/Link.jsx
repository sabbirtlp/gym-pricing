import PropTypes from 'prop-types';
const Link = ({route}) => {

    return (
        <div>
            <li className='text-xl font-semibold text-gray-300'><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route:PropTypes.object,
}
export default Link;