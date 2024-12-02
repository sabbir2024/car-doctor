import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const url = `http://localhost:3000/bookingService/?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, [url]); // Add url to dependencies to ensure it refetches if the url changes

    const openModal = (booking) => {
        setSelectedBooking(booking);
        document.getElementById("my_modal_3").showModal();
    };

    const closeModal = () => {
        setSelectedBooking(null);
        document.getElementById("my_modal_3").close();
    };

    return (
        <div className="container w-full mx-auto">
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 bg-white shadow-lg">
                    {/* Table Header */}
                    <thead>
                        <tr className="h-[70px] border-b bg-[#141B29] text-[#FFFFFF]">
                            <th className="w-[50px] px-6 py-4 text-start">
                                <input
                                    type="checkbox"
                                    id="myCheckbox"
                                    className="flex h-6 w-6 items-center rounded-full  border-2 border-red-500 bg-red-500 text-red-500 focus:border-red-400 focus:ring-red-400"
                                />
                            </th>
                            <th className="px-6 py-4 text-start">User</th>
                            <th className="px-6 py-4 text-start">Status</th>
                            <th className="px-6 py-4 text-start">Details</th>
                            <th className="px-6 py-4 text-start">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Table rows */}
                        {bookings?.map((book) => {
                            return (
                                <tr
                                    key={book._id}
                                    className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]"
                                >
                                    <th className="px-6 py-4 text-start">
                                        <input
                                            type="checkbox"
                                            id="myCheckbox"
                                            className="flex h-6 w-6  items-center rounded-full border-2 border-red-500 bg-red-500 text-red-500 focus:border-red-400 focus:ring-red-400"
                                        />
                                    </th>
                                    <th className="px-6 py-4 text-start">
                                        <img
                                            className="h-[44px] w-[44px] rounded-full bg-slate-500 object-cover"
                                            src={book.img} // Dynamically using the image URL from book data
                                            alt={book.CustomerName}
                                        />
                                    </th>
                                    <th className="px-6 py-4 text-start">{book.Service}</th>
                                    <th className="px-6 py-4 text-start">
                                        <button
                                            onClick={() => openModal(book)}
                                            className="flex items-center rounded-full bg-blue-600 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="mr-2 h-6 w-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                            Details
                                        </button>
                                    </th>
                                    <th className="px-6 py-4 text-start">
                                        <button className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="mr-2 h-6 w-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                            Delete
                                        </button>
                                    </th>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {/* Modal for booking details */}
            {selectedBooking && (
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* Close button */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
                                ✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg">Booking Details</h3>
                        <p className="py-4">
                            <strong>Customer Name:</strong> {selectedBooking.CustomerName}
                        </p>
                        <p className="py-4">
                            <strong>Service:</strong> {selectedBooking.Service}
                        </p>
                        <p className="py-4">
                            <strong>Price:</strong> {selectedBooking.BookingPrice}
                        </p>
                        <p className="py-4">
                            <strong>Date:</strong> {selectedBooking.BookingDate}
                        </p>
                        <p className="py-4">
                            <strong>Comments:</strong> {selectedBooking.CustomerComment}
                        </p>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default MyBookings;
