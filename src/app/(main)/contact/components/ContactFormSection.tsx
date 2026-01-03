'use client';
import { Button } from "@/src/app/shared/components/index";
import { Form, Input } from "antd";

const ContactFormSection = () => {
    return (
        <div className="col-span-2 border border-gray-200/40 shadow-xl rounded-md p-7">
            <Form >
                <div className="grid grid-cols-3 gap-5">
                    <div className=" col-span-1">
                        <Form.Item
                            name={'name'}
                            rules={[
                                { required: true, message: 'Please input your name!' }
                            ]}
                        >
                            <Input placeholder="Your Name" variant="borderless" style={{
                                backgroundColor: '#F5F5F5',
                                minHeight: '50px'
                            }} />
                        </Form.Item>
                    </div>
                    <div className=" col-span-1">
                        <Form.Item
                            name={'email'}
                            rules={[
                                { required: true, message: 'Please input your email!' }
                            ]}
                        >
                            <Input placeholder="Your Name" variant="borderless" style={{
                                backgroundColor: '#F5F5F5',
                                minHeight: '50px'
                            }} />
                        </Form.Item>
                    </div>
                    <div className=" col-span-1">
                        <Form.Item
                            name={'phone'}
                            rules={[
                                { required: true, message: 'Please input your phone!' }
                            ]}
                        >
                            <Input placeholder="Your Name" variant="borderless" style={{
                                backgroundColor: '#F5F5F5',
                                minHeight: '50px'
                            }} />
                        </Form.Item>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-3">
                        <Form.Item
                            name={'message'}
                        >
                            <Input.TextArea placeholder="Your Message" variant="borderless" rows={9} style={{
                                backgroundColor: '#F5F5F5',
                                minHeight: '150px'
                            }} />
                        </Form.Item>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-start-3">
                        <Button label="Send Massage" backgroundColor="#DB4444" color="#FFFFFF" className="w-full"/>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default ContactFormSection;