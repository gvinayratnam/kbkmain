import React from 'react';
import { Form, Input, Select, ConfigProvider, theme } from 'antd';
import { NavLink } from 'react-router-dom';
import aboutbg from '../assets/images/aboutbg.png';

const { TextArea } = Input;

const About = () => {
    const [form] = Form.useForm();

    const interestOptions = [
        { value: 'web', label: 'Web Development' },
        { value: 'app', label: 'App Development' }
    ];

    const budgetOptions = [
        { value: '1000', label: '$1000' },
        { value: '5000', label: '$5000' }
    ];

    const onFinish = (values) => {
        console.log("Form Submitted", values);
    };

   
    const handleinputName = (value) => value ? value.replace(/[^a-zA-Z\s]/g, '') : '';
    const handleinputEmail = (value) => {
        if (!value) return '';
        let val = value.replace(/[^a-zA-Z0-9@.]/g, '');
        const parts = val.split('@');
        return parts.length > 2 ? parts[0] + '@' + parts[1] : val;
    };
    const handleInputNoSpecial = (value) => value ? value.replace(/[^a-zA-Z0-9 ]/g, '') : '';

  
    const uniformInputStyles = "w-full! px-3! py-3! !border-0 !border-b-2 !border-b-gray-700/50 bg-transparent! text-white! focus:bg-transparent! hover:bg-transparent! rounded-lg! focus:outline-none! shadow-none!";
    const uniformSelectStyles = "w-full! px-3! !border-0 !border-b-2 !border-b-gray-700/50 bg-transparent! text-white! focus:bg-transparent! hover:bg-transparent! rounded-lg! shadow-none!";

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorTextPlaceholder: '#FFFFFFA3',
                    fontSize: 16,
                    controlOutlineWidth: 0,
                },
                components: {
                    Select: {
                        paddingBlock: 12,
                        paddingInline: 12,
                        colorBgElevated: '#111111',
                        controlItemBgHover: 'rgba(7, 196, 44, 0.2)',
                        controlItemBgActive: 'rgba(7, 196, 44, 0.4)',
                        colorText: '#E5E7EB',
                    }
                }
            }}
        >
            <div className='bg-black'>
                <div className='w-full relative'>
                    <img className='absolute top-0 w-full object-cover opacity-60' src={aboutbg} alt="" />

                    <div className='w-full relative container-p flex flex-col justify-center items-center z-10 text-white lg:py-35 sm:py-20 py-10'>
                        <div className='md:w-[70%]'>
                            <h1 className='text-right w-full lg:text-6xl md:text-5xl sm:text-4xl text-xl sm:mb-20 mb-10 md:mb-35'>
                                Let’s start <br />creating together
                            </h1>

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
                                            rules={[{ required: true, message: 'Please enter name' }]}
                                        >
                                            <Input
                                                placeholder="Name"
                                                variant="borderless"
                                                className={uniformInputStyles}
                                            />
                                        </Form.Item>
                                        <span className="absolute left-16 top-0 translate-y-1 text-[#07C42C] pointer-events-none group-focus-within:hidden group-has-[input:not(:placeholder-shown)]:hidden">
                                            *
                                        </span>
                                    </div>

                                    
                                    <div className="relative w-full group">
                                        <Form.Item
                                            name="email"
                                            className="m-0"
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
                                        <span className="absolute left-14 top-0 translate-y-1 text-[#07C42C] pointer-events-none group-focus-within:hidden group-has-[input:not(:placeholder-shown)]:hidden">
                                            *
                                        </span>
                                    </div>
                                </div>

                                <div className='flex sm:flex-nowrap flex-wrap sm:gap-10 gap-5'>
                                    <div className="w-full">
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

                                    <div className="w-full">
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
                                            rows={1}
                                            autoSize={{ minRows: 1, maxRows: 6 }}
                                            className={`${uniformInputStyles} resize-none`}
                                        />
                                    </Form.Item>
                                </div>

                                <div className='flex lg:flex-row gap-3 flex-col justify-between items-center'>
                                    <button
                                        type='submit'
                                        className='text-xs border rounded-md cursor-pointer px-4 py-2 bg-transparent text-white hover:bg-white/10 transition-colors uppercase tracking-widest'
                                    >
                                        SUBMIT MESSAGE
                                    </button>
                                    <p className='sm:text-base text-xs'>
                                        say hello - 
                                        <span className='text-[#07C42C] ml-1'>
                                            <a className='text-[#07C42C]!   ' href="mailto:hello@kbkbusinesssolutions.com">hello@kbkbusinesssolutions.com</a>
                                        </span>
                                    </p>
                                </div>
                            </Form>
                        </div>
                    </div>

                    
                    
                </div>
            </div>
        </ConfigProvider>
    );
};

export default About;