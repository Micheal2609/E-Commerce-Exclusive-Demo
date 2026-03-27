'use client'

import { Button } from "@/src/shared/components"
import { Form, Image, Input } from "antd"
import { I_LoginFormValues } from "../interfaces";
// import Link from "next/link";

const LoginForm = () => {
    const [form] = Form.useForm<I_LoginFormValues>();
    const handleCreateAccount = (values: I_LoginFormValues) => {
        const { email, password } = values;
        console.log("Login account with:", { email, password });
    }

    return (
        <>
            <div className="grid grid-cols-2 my-15">
                <div className="image">
                    <Image src="/assets/images/side-image.jpg" alt="Login Image" className="w-full h-full"/>
                </div>
                <div className="form-login py-[125.5px] px-32.25">
                    <Form name="login" layout="vertical" form={form} onFinish={handleCreateAccount}>
                        <div className="text-4xl font-medium mb-4">Log in to Exclusive</div>
                        <div className=" mb-4">Enter your details below</div>
                        <Form.Item name="email">
                            <Input placeholder="Email or Phone Number" variant="underlined" className="px-0! py-2!" />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input.Password placeholder="Password" variant="underlined" className="px-0! py-2!" />
                        </Form.Item>

                        <div className="login-btns flex gap-2">
                            <Button type="submit" text="Log In" className="bg-[#DB4444] w-full h-full text-[#ffffff] text-center" />
                            <Button text="Forget Password?" className="w-full h-full text-[#DB4444]" />
                            {/* <Link href="/auth/login" className="text-center text-[#000000]!">Already have an account? <span className="font-medium hover:underline">Login</span></Link> */}
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default LoginForm
