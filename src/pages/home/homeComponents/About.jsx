import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative'>
                    <img
                        src={person}
                        className="max-w-sm rounded-lg shadow-2xl " />
                    <img
                        src={parts}
                        className="h-40 w-35 rounded-lg shadow-2xl absolute -right-4 -bottom-4" />
                </div>
                <div className='pl-4'>
                    <h1 className="text-sm text-[#FF3811] font-bold">About us</h1>
                    <h3 className="py-2 font-bold text-black text-xl w-2/3">
                        We are qualified & of experience in this field
                    </h3>
                    <p className='text-[#737373] text-sm w-3/4'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className='text-[#737373] text-sm w-3/4'>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn bg-[#FF3811] text-white mt-3">Get more info</button>
                </div>
            </div>
        </div>
    );
};

export default About;