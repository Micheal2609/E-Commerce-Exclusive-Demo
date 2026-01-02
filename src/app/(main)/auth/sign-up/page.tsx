'use client';
import { Button } from "@/src/app/shared/components";
import { Form, Image, Input } from "antd";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
    return (
        <div className="grid grid-cols-2 py-10 px-36">
            <div className="">
                <Image src="/assets/images/theme_1.svg" alt="Sign In Illustration" preview={false} />
            </div>
            <div className="flex flex-col justify-center gap-4 px-20">
                <div className="text-4xl font-medium py-2">Log in to Exclusive</div>
                <div className="py-2">Enter your details below</div>
                <Form
                    action="#"
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder="Name" variant="underlined" style={{
                            padding: 0
                        }}/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email or phone number!' }]}
                    >
                        <Input placeholder="Email or phone number" variant="underlined" style={{
                            padding: 0
                        }}/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input placeholder="Password" variant="underlined" style={{
                            padding: 0
                        }}/>
                    </Form.Item>
                </Form>
                <div className="flex flex-col">
                    <Button backgroundColor="#DB4444" label="Create account" className="rounded-sm text-center"/>
                    <Button backgroundColor="#FFFFFF" label="Sign Up with Google" color="#000000" className="border border-[#000000] text-center" icon={<FcGoogle />}/>
                </div>
                <div className="text-center">Already have account? <Link href="/auth/sign-in" className="underline font-medium">Log in</Link></div>
            </div>
        </div>
    );
};
export default SignInPage;