import React from 'react';
import { Form, Input, Select, ConfigProvider, theme } from 'antd';
import box from '../assets/aboutexperts/box.png';
import grad from '../assets/aboutexperts/grad.png';
import satran from '../assets/aboutexperts/satran.png';


const { TextArea } = Input;

const Project = () => {
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
    return value.replace(/[^a-zA-Z0-9]/g, '');
  };

  
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
      <div className='relative bg-black md:py-20 py-10'>
        <div className='sm:h-full h-50 w-full'>
          <img className='w-full h-full object-cover object-top ' src={grad} alt="" />
        </div>
        <img className='absolute lg:top-[5%] md:top-0 top-0 lg:w-50 md:w-35 sm:w-20 w-15 left-[5%] animate-pulse' src={satran} alt="" />
        <img className='absolute sm:top-[10%] top-0' src={box} alt="" />

        <div className='absolute lg:top-[12%] top-[3%] flex flex-col items-center z-10 text-white w-full'>
          <h3 className='md:text-7xl text-4xl'>Have a</h3>
          <h1 className='md:text-9xl text-6xl'>Project</h1>
          <h3 className='md:text-7xl text-4xl'>In Mind?</h3>
        </div>

        <div className='w-full sm:absolute static lg:bottom-[10%] sm:bottom-[0%] container-p flex flex-col justify-center items-center z-10 text-white '>
          <div className='md:w-[70%]'>
            
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
        
                  <span className="absolute left-16 top-1/3 -translate-y-1/2 text-[#07C42C] pointer-events-none group-focus-within:hidden group-has-[input:not(:placeholder-shown)]:hidden">
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
                  <span className="absolute left-14 top-1/3 -translate-y-1/2 text-[#07C42C] pointer-events-none group-focus-within:hidden group-has-[input:not(:placeholder-shown)]:hidden">
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
                    rows={4} 
                    className={`${uniformInputStyles} resize-y`}
                  />
                </Form.Item>
              </div>

              <div className='flex lg:flex-row gap-3 flex-col justify-between items-center'>
                <button
                  type='submit'
                  className='text-xs border rounded-md cursor-pointer px-4 py-2 bg-transparent text-white hover:bg-white/10 transition-colors'
                >
                  SUBMIT MESSAGE
                </button>

                <p className='text-sm'>
                  say hello -
                  <span className='text-[#07C42C]! ml-1'>
                    <a className='text-[#07C42C]! ' href="mailto:hello@kbkbusinesssolutions.com">
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
};

export default Project;