import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';

const Banner = () => {
    const sliders = [
        {
            id: 'slide1',
            img: img4,
            slider1: '#slide4',
            slider2: '#slide2',
            title: 'Affordable Price For Car Servicing',
            discription: 'There are many variations of passages of  available, but the majority have suffered alteration in some form'

        },
        {
            id: 'slide2',
            img: img1,
            slider1: '#slide1',
            slider2: '#slide3',
            title: 'Affordable Price For Car Servicing',
            discription: 'There are many variations of passages of  available, but the majority have suffered alteration in some form'

        },
        {
            id: 'slide3',
            img: img2,
            slider1: '#slide2',
            slider2: '#slide4',
            title: 'Affordable Price For Car Servicing',
            discription: 'There are many variations of passages of  available, but the majority have suffered alteration in some form'

        },
        {
            id: 'slide4',
            img: img3,
            slider1: '#slide3',
            slider2: '#slide1',
            title: 'Affordable Price For Car Servicing',
            discription: 'There are many variations of passages of  available, but the majority have suffered alteration in some form'

        },
    ]
    return (
        <div>
            <div className="carousel w-full h-96 rounded-xl">
                {sliders?.map(slider => (
                    <div key={slider.id} id={slider.id} className="carousel-item relative w-full ">
                        <img
                            src={slider.img}
                            className="w-full rounded-xl" />
                        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end ">
                            <a href={slider.slider1} className="btn btn-circle mr-5">❮</a>
                            <a href={slider.slider2} className="btn btn-circle bg-[#FF3811]">❯</a>
                        </div>
                        <div className="absolute h-full left-0  top-0 w-3/4 bg-gradient-to-r from-[#141414da] to-[#1b1a1a00]">
                            <div className='w-1/3 pt-16 pl-4 items-center'>
                                <h1 className='text-white font-semibold text-3xl'>{slider.title}</h1>
                                <p className='text-white text-sm'>{slider.discription}</p>
                                <div className='flex gap-3'>
                                    <button className="btn bg-[#FF3811] text-white">Discover More</button>
                                    <button className="btn btn-outline btn-info">Latest Project</button>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default Banner;