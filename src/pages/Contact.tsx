const Contact = () => {
    return (
        <section className="relative flex lg:flex-row flex-col max-container">
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">Contact</h1>
                <div className="mt-14 space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold text-black">Name</h2>
                        <p className="mt-2 text-gray-600">Hanbong Bae</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-black">Email</h2>
                        <p className="mt-2 text-gray-600">hanbong5938@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-black">Social Media</h2>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a href="https://github.com/hanbong5938" className="text-blue-600 hover:underline">GitHub</a>
                            </li>
                            <li>
                                <a href="https://uriu.tistory.com//" className="text-blue-600 hover:underline">Tistory</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
