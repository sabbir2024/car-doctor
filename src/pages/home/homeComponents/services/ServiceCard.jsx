import { Link } from "react-router-dom";
import { FaRightLong } from "react-icons/fa6";


const ServiceCard = ({ service }) => {
    return (
        <div>
            <div className="card bg-base-100 group shadow-xl ">
                <figure>
                    <img
                        className="h-[200px] group-hover:scale-110 group-hover:duration-150 transform"
                        src={service?.img}
                        alt={service?.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service?.title}</h2>
                    <div className="flex justify-between">
                        <p className="font-bold text-[#FF3811]">price: {service?.price}</p>
                        <Link to={`checkout/${service?._id}`}><button className="text-xl text-[#FF3811] animate-pulse"><FaRightLong /></button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;