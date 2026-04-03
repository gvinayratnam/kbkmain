import React from 'react';
import { Form, Input, Select, ConfigProvider, theme } from 'antd';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

const { TextArea } = Input;

const Contactdetails = () => {
    const [form] = Form.useForm();

    const interestOptions = [
        { value: 'web', label: 'Web Development' },
        { value: 'app', label: 'App Development' },
        { value: 'design', label: 'UI/UX Design' }
    ];

    const budgetOptions = [
        { value: '1000', label: '$1,000 - $5,000' },
        { value: '5000', label: '$5,000 - $10,000' },
        { value: '10000', label: '$10,000+' }
    ];

    const onFinish = (values) => {
        console.log("Form Submitted:", values);
    };

    const handleinputName = (value) => {
        if (!value) return '';
        return value.replace(/[^a-zA-Z\s]/g, '');
    };

    const handleinputEmail = (value) => {
        if (!value) return '';
        let val = value.replace(/[^a-zA-Z0-9@.]/g, '');
        const parts = val.split('@');
        if (parts.length > 2) {
            val = parts[0] + '@' + parts[1];
        }
        return val;
    };

    const handleInputNoSpecial = (value) => {
        if (!value) return '';
        return value.replace(/[^a-zA-Z0-9.,!? \n]/g, '');
    };

    const uniformInputStyles = "!w-full !px-0 !py-2 !border-0 !border-b !border-b-gray-400 !bg-transparent text-white  focus:!bg-transparent hover:!bg-transparent !rounded-none focus:!outline-none !shadow-none transition-colors";
    const uniformSelectStyles = "!w-full !px-0 !border-0 !border-b !border-b-gray-400 !bg-transparent text-white focus:!border-b-[#07C42C] focus:!bg-transparent hover:!bg-transparent !rounded-none !shadow-none transition-colors";

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorTextPlaceholder: '#888888',
                    fontSize: 16,
                    controlOutlineWidth: 0,
                },
                components: {
                    Select: {
                        colorBgElevated: '#111111',
                        controlItemBgHover: 'rgba(7, 196, 44, 0.2)',
                        controlItemBgActive: 'rgba(7, 196, 44, 0.4)',
                        colorText: '#ffffff',
                    }
                }
            }}
        >
          
            <div className="bg-black text-white min-h-screen p-10 flex flex-col items-center relative overflow-hidden z-0">
                
           
                <div className="absolute top-[-10%] md:top-[-20%] left-1/2 -translate-x-1/2 w-screen h-[100vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(circle_at_top,#1a3d2c_10%,transparent_60%)] blur-[100px] md:blur-[100px] opacity-100 pointer-events-none -z-10 rounded-full"></div>

                <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center max-w-2xl">
                    Let’s start creating together
                </h1>
                
                <div className="flex  flex-col-reverse lg:flex-row gap-16 w-full max-w-6xl">
                    
                    <div className="flex-1 md:space-y-6 space-y-4">
                        <h1 className="text-3xl font-semibold mb-8">Contact US</h1>
                        <div className="flex items-center gap-4">
                            <div className="text-white text-xl mt-1 border rounded-full p-2"><FaLocationDot /></div>
                            <p className="text-white md:text-base text-sm">H-No:2-1-8/4/1, NR.Suite 2A, Saraswathi Colony, Uppal, Hyderabad, Telangana 500039</p>
                        </div>
                        <div className='border w-[65%]'></div>
                        <div className="flex items-center gap-4">
                            <div className="text-white text-xl border rounded-full p-2"><MdOutlineEmail /></div>
                            <p className="text-white md:text-base text-sm">hello@kbkgroup.com</p>
                        </div>
                         <div className='border w-[65%]'></div>
                        <div className="flex items-center gap-4">
                            <div className="text-white text-xl border rounded-full p-2"><FaPhoneAlt /></div>
                            <p className="text-white md:text-base text-sm">(505) 555-0125</p>
                        </div>
                    </div>

                    <div className="flex-3 w-full rounded-xl">
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            className='w-full flex flex-col sm:gap-10 gap-5'
                            requiredMark={false}
                        >
                            <div className='flex sm:flex-nowrap flex-wrap sm:gap-10 gap-5'>
                                <div className="relative w-full group">
                                    <Form.Item
                                        name="name"
                                        className="m-0"
                                        normalize={handleinputName}
                                        rules={[{ required: true, message: 'Please enter your name' }]}
                                    >
                                        <Input
                                            placeholder="Name"
                                            variant="borderless"
                                            className={uniformInputStyles}
                                        />
                                    </Form.Item>
                                    <span className="absolute left-12 top-1/3 -translate-y-1/2 text-[#07C42C] pointer-events-none group-focus-within:hidden group-has-[input:not(:placeholder-shown)]:hidden">
                                        *
                                    </span>
                                </div>

                                <div className="relative w-full group">
                                    <Form.Item
                                        name="email"
                                        className="m-0 "
                                        normalize={handleinputEmail}
                                        rules={[
                                            { required: true, message: 'Email field is missing!' },
                                            { type: 'email', message: 'Enter a valid email!' }
                                        ]}
                                    >
                                        <Input
                                            placeholder="Email"
                                            variant="borderless"
                                            className={uniformInputStyles}
                                        />
                                    </Form.Item>
                                    <span className="absolute left-11 top-1/4 -translate-y-1/2 text-[#07C42C] pointer-events-none group-focus-within:hidden group-has-[input:not(:placeholder-shown)]:hidden">
                                        *
                                    </span>
                                </div>
                            </div>

                            <div className='flex sm:flex-nowrap flex-wrap sm:gap-10 gap-5'>
                                <div className="w-full relative group">
                                    <Form.Item
                                        name="interest"
                                        className="m-0"
                                        rules={[{ required: true, message: 'Interest field is missing!' }]}
                                    >
                                        <Select
                                            options={interestOptions}
                                            placeholder="You are interested in"
                                            variant="borderless"
                                            className={uniformSelectStyles}
                                        />
                                    </Form.Item>
                                </div>

                                <div className="w-full relative group">
                                    <Form.Item
                                        name="budget"
                                        className="m-0"
                                        rules={[{ required: true, message: 'Budget field is missing!' }]}
                                    >
                                        <Select
                                            options={budgetOptions}
                                            placeholder="Budget in USD"
                                            variant="borderless"
                                            className={uniformSelectStyles}
                                        />
                                    </Form.Item>
                                </div>
                            </div>

                            <div>
                                <Form.Item
                                    name="project"
                                    className="m-0"
                                    normalize={handleInputNoSpecial}
                                    rules={[{ required: true, message: 'Project details are missing!' }]}
                                >
                                    <TextArea
                                        placeholder="Project details"
                                        variant="borderless"
                                        rows={4}
                                        className={`${uniformInputStyles} resize-y`}
                                    />
                                </Form.Item>
                            </div>

                            <div className='flex lg:flex-row gap-5 flex-col justify-between items-center mt-4'>
                                <button
                                    type='submit'
                                    className="text-xs border rounded-md cursor-pointer px-4 py-2 bg-transparent text-white hover:bg-white/10 transition-colors uppercase tracking-widest"
                                >
                                    SUBMIT MESSAGE
                                </button>

                                <p className='text-sm text-gray-400'>
                                    say hello - 
                                    <span className='ml-1'>
                                        <a className='text-[#07C42C]! hover:underline transition-all' href="mailto:hello@kbkbusinesssolutions.com">
                                            hello@kbkbusinesssolutions.com
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </Form>
                    </div>

                </div>
            </div>
        </ConfigProvider>
    );
}

export default Contactdetails;