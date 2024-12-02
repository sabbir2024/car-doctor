import { useEffect, useState } from "react";
import HeadLine from "../../../../components/HeadLine";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <HeadLine title={'Service'} description={'Our Service Area'} />

            <p className="text-center text-sm text-[#737373] pb-6">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;