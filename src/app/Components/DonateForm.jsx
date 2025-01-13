'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loader from './Loader';
import { countryCodes } from '../assets/countryCodes';

const DonateForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [pickupAddress, setPickupAddress] = useState('');
    const [sendingData, setSendingData] = useState(false);
    const [countryCode, setCountryCode] = useState('+91');
    const [countries, setCountries] = useState([]);

    const handlePhoneChange = (e) => {
        const input = e.target.value;
        if (/^\d*$/.test(input)) {
            setPhone(input);
        } else {
            toast.error('Please enter numeric digits only.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSendingData(true);

        const formData = {
            name,
            email,
            phone: `${countryCode}${phone}`,
            countryCode,
            itemName,
            quantity,
            pickupAddress,
        };

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Message sent successfully! We will get back to you soon.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                // Reset form fields
                setName('');
                setEmail('');
                setPhone('');
                setItemName('');
                setQuantity(1);
                setPickupAddress('');
                setSendingData(false);
            } else {
                toast.error('Failed to send message!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setSendingData(false);
            }
        } catch (error) {
            console.error(error);
            toast.error('There was an error sending your message!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setSendingData(false);
        }
    };

    useEffect(() => {
        const formattedCountries = countryCodes.map((country) => ({
            name: country.name.common,
            code: country.idd.root ? country.idd.root + (country.idd.suffixes?.[0] || '') : 'N/A',
            flag: country.flags.svg,
        }));
        formattedCountries.sort((a, b) => a.name.localeCompare(b.name));
        setCountries(formattedCountries);
    }, []);

    return (
        <div className="bg-[#FAF4F0] px-5 py-10" id="contact">
            <h3 className="text-2xl md:text-3xl lg:text-4xl capitalize text-center text-[#4F341D] font-bold mb-5">
                Get in Touch
            </h3>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-[1200px] lg:w-[900px] xl:w-[1200px] h-fit py-3 flex flex-col gap-2 getInTouchInputGrid mx-auto"
            >
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    spellCheck="true"
                    required
                    className="w-full h-10 md:h-12 rounded-md text-sm md:text-base placeholder:text-sm font-medium text-[#4F341D] p-2 bg-[#EEEEEE] focus:outline-none border-2 border-[#dfdfdf79] focus:border-yellow-500 getInTouchInputs"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    spellCheck="true"
                    required
                    className="w-full h-10 md:h-12 rounded-md text-sm md:text-base placeholder:text-sm font-medium text-[#4F341D] p-2 bg-[#EEEEEE] focus:outline-none border-2 border-[#dfdfdf79] focus:border-yellow-500 getInTouchInputs"
                />
                <span className="w-full h-fit flex items-center justify-center gap-2">
                    <select
                        required
                        value={countryCode}
                        className="w-24 h-10 md:h-12 rounded-md text-sm md:text-base placeholder:text-sm font-medium text-[#4F341D] p-2 bg-[#EEEEEE] focus:outline-none border-2 border-[#dfdfdf79] focus:border-yellow-500 getInTouchInputs"
                        onChange={(e) => setCountryCode(e.target.value)}
                    >
                        {countries.map((country, index) => (
                            <option key={index} value={country.code}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={handlePhoneChange}
                        spellCheck="true"
                        required
                        className="w-full h-10 md:h-12 rounded-md text-sm md:text-base placeholder:text-sm font-medium text-[#4F341D] p-2 bg-[#EEEEEE] focus:outline-none border-2 border-[#dfdfdf79] focus:border-yellow-500 getInTouchInputs"
                    />
                </span>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    spellCheck="true"
                    required
                    className="w-full h-10 md:h-12 rounded-md text-sm md:text-base placeholder:text-sm font-medium text-[#4F341D] p-2 bg-[#EEEEEE] focus:outline-none border-2 border-[#dfdfdf79] focus:border-yellow-500 getInTouchInputs"
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min={1}
                    required
                    className="w-full h-10 md:h-12 rounded-md text-sm md:text-base placeholder:text-sm font-medium text-[#4F341D] p-2 bg-[#EEEEEE] focus:outline-none border-2 border-[#dfdfdf79] focus:border-yellow-500 getInTouchInputs"
                />
                <textarea
                    placeholder="Pickup Address"
                    value={pickupAddress}
                    onChange={(e) => setPickupAddress(e.target.value)}
                    rows="5"
                    spellCheck="true"
                    required
                    className="rounded-md text-sm md:text-base placeholder:text-sm font-medium text-[#4F341D] p-2 bg-[#EEEEEE] focus:outline-none border-2 border-[#dfdfdf79] focus:border-yellow-500 getInTouchInputs col-span-2"
                />
                {sendingData ? (
                    <button className="h-10 w-24 text-xs bg-yellow-400 hover:bg-yellow-500 rounded-md shadow-md flex items-center justify-center cursor-wait">
                        <Loader />
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="uppercase font-bold bg-yellow-400 hover:bg-yellow-500 text-[#4F341D] h-10 w-24 text-xs rounded-md shadow-md"
                    >
                        Submit
                    </button>
                )}
            </form>
        </div>
    );
};

export default DonateForm;
