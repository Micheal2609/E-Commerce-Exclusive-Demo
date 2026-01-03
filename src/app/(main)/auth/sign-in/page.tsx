"use client";

import { Button } from "@/src/app/shared/components";
import { Form, Image, Input } from "antd";
import Link from "next/link";

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
                        <Input placeholder="Password" variant="underlined" className="p-4" style={{
                            padding: 0
                        }}/>
                    </Form.Item>
                </Form>
                <div className="flex justify-between items-center">
                    <Button backgroundColor="#DB4444" label="Log In" className="rounded-sm" />
                    <Button backgroundColor="#FFFFFF" label="Forget Password?" color="#DB4444" />
                </div>
                <div className="text-center">Not have an account? <Link href="/auth/sign-up" className="font-medium hover:text-[#DB4444] hover:underline hover:font-bold">Sign up</Link></div>
            </div>
        </div>
    );
}

export default SignInPage;