import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'


const CheckOut = () => {
    const { title, price, _id, img } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true)


    const hendelSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const CustomerName = form.name.value;
        const email = form.email.value;
        const BookingDate = form.date.value;
        const CustomerComment = form.textarea.value;
        const Service = title;
        const BookingPrice = price;
        const BookingID = _id;


        const BookingService = {
            BookingID,
            CustomerName,
            email,
            Service,
            img,
            BookingPrice,
            BookingDate,
            CustomerComment,

        }
        console.log(BookingService);
        setLoading(true);
        fetch('http://localhost:3000/bookingService', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(BookingService),
        })
            .then(req => req.json())
            .then(data => {
                setLoading(false);
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: `Successfuly adding ${Service}`,

                        icon: "success"
                    });
                }
            });



    }
    return (
        <div>
            <div className="w-full flex items-center justify-center  mx-auto">
                <div className="max-w-md space-y-6 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
                    <div className="flex flex-col space-y-1">
                        <h3 className="text-3xl font-bold tracking-tight">Booking to : {title}</h3>
                    </div>
                    <div>
                        <form onSubmit={hendelSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2 text-sm">
                                    <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                        id="name"
                                        defaultValue={user?.displayName}
                                        placeholder="Enter  name"
                                        name="name"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2 text-sm">
                                    <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="last_name">
                                        Service Price
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                        id="price"
                                        defaultValue={price}
                                        readOnly
                                        placeholder="Enter Price"
                                        name="price"
                                        type="text"
                                    />
                                </div>

                                <div className="space-y-2 text-sm">
                                    <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                        id="email"
                                        defaultValue={user?.email}
                                        readOnly
                                        placeholder="Enter your email"
                                        name="email"
                                        type="email"
                                    />
                                </div>
                                <div className="space-y-2 text-sm">
                                    <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="password_">
                                        date
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                        id="date"
                                        placeholder="date"
                                        name="date"
                                        type="date"
                                    />
                                </div>
                            </div>
                            <textarea className="w-full" name="textarea" />
                            <br />
                            <input type="submit" value="Submit" className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;