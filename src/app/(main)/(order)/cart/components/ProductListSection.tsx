'use client';
import { Button } from "@/src/app/shared/components/index";
import { InputNumber, Space, Table, TableProps } from "antd"
import Image from "next/image";

interface Product {
    key: string;
    product: string;
    price: string;
    quantity: number;
    subtotals: string;
    imageUrl?: string;
}

const ProductListSection = () => {
    const columns: TableProps<Product>['columns'] = [
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
            render: (text) =>
            (
                <Space size="middle">
                    <div className="flex items-center gap-4 max-w-50">
                        <Image
                            src={"/assets/images/product/ips_lcd_gaming_monitor.png"}
                            alt={"brand"}
                            width={54}
                            height={54}
                        // preview={false}
                        />
                        <span>{text}</span>
                    </div>
                </Space>
            ),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (value) => (
                <Space size="middle">
                    <InputNumber min={1} max={100} defaultValue={value} />
                </Space>),
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <a>Remove</a>
                </Space>
            ),
        },
    ];

    const dataSource: Product[] = [
        {
            key: '1',
            product: 'Product 1',
            price: '$10.00',
            quantity: 2,
            subtotals: '$20.00',
        },
        {
            key: '2',
            product: 'Product 2',
            price: '$10.00',
            quantity: 2,
            subtotals: '$20.00',
        },
        {
            key: '3',
            product: 'Product 3',
            price: '$10.00',
            quantity: 2,
            subtotals: '$20.00',
        },
    ];
    return (
        <>
            <Table className="custom-table" dataSource={dataSource} columns={columns} pagination={false} />
            <div className="flex justify-between">
                <Button label="Return To Shop" backgroundColor="#ffffff" color="black" className="rounded border-2"/>
                <Button label="Update Cart" backgroundColor="#ffffff" color="black" className="rounded border-2"/>
            </div>
        </>
    );
}
export default ProductListSection