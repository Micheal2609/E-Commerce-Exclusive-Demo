import { Button } from "@/src/app/shared/components";
import { Form, Image, Input } from "antd";

const SignInPage = () => {
    return (
        <div className="grid grid-cols-2 py-10 px-36">
            <div className="">
                <Image src="/assets/images/theme_1.svg" alt="Sign In Illustration" />
            </div>
            <div className="flex justify-center items-center">
                <div className="text-4xl font-medium py-2">Log in to Exclusive</div>
                <div className="py-2">Enter your details below</div>
                <Form
                    action="#"
                    initialValues={{ remember: true }}

                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder="Email" className="w-96 h-12 rounded-sm border border-gray-300 px-4" />
                    </Form.Item>
                </Form>
                <div className="flex justify-between items-center">
                    <Button backgroundColor="#DB4444" label="Log In" className="rounded-sm" />
                    <Button backgroundColor="#FFFFFF" label="Forget Password?" color="#DB4444" />
                </div>
            </div>
        </div>
    );
}

export default SignInPage;