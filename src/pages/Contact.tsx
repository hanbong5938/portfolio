import {useState} from "react";

const Contact = () => {
    const [form, setForm] = useState({name: '', email: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        setForm({...form, [e.target.name]: e.target.value});
    };
    const handleFocus = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsLoading(true);
    };
    const handleBlur = () => {
    };
    const handleSubmit = () => {
    };
    return (<section className={'relative flex lg:flex-row flex-col max-container'}>
        <div className={'flex-1 min-w-[50%] flex flex-col'}>
            <h1 className={'head-text'}>Get it Touch</h1>
            <form className={'w-full flex flex-col gap-7 mt-14'} onSubmit={handleSubmit}>
                <label className={'text-black font-semibold'}>
                    Name
                    <input type={'text'} name={'name'} className={'input'} placeholder={'Name'}
                           required value={form.name} onChange={handleChange}
                           onFocus={handleFocus} onBlur={handleBlur}></input>
                </label>
                <label className={'text-black font-semibold'}>
                    Email
                    <input type={'text'} name={'email'} className={'input'} placeholder={'example@example.com'}
                           required value={form.email} onChange={handleChange}
                           onFocus={handleFocus} onBlur={handleBlur}></input>
                </label>
                <label className={'text-black font-semibold'}>
                    Email
                    <textarea name={'message'} className={'input'} rows={4}
                              placeholder={`Let's me know how can I help you!`}
                              required value={form.message} onChange={handleChange}
                              onFocus={handleFocus} onBlur={handleBlur}></textarea>
                </label>
                <button className={'btn'} type={'submit'} onFocus={handleFocus} onBlur={handleBlur}>
                    {isLoading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    </section>);
};

export default Contact;
