import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import { MainLayout } from "../src/Layouts"
import { ICON, IconBrand } from '../src/utils/icon'

function signIn() {
    const providers = [

        {
            name: "google",
            Icon: <ICON icon={IconBrand.faGoogle as IconProp} />,
            bgColor: "bg-red-300",
        },
        {
            name: "facebook",
            Icon: <ICON icon={IconBrand.faFacebook as IconProp} />,
            bgColor: "bg-blue-300",
        },
    ];
    return (
        <>
            <div className='w-screen h-screen max-h-screen flex items-center justify-center'>
                <div className='w-[40%]'>
                    {providers.map((item: any, index: number) => {
                        return (
                            <>
                                <div
                                    onClick={() => {
                                        // handleOAuthSignIn(item.name);
                                    }}
                                    className={
                                        "w-full mt-2 flex items-center px-5 py-2 justify-center " +
                                        `${item.bgColor}`
                                    }
                                >
                                    {item.Icon}

                                    <p className="font-medium text-xl mx-4 capitalize text-white">
                                        {item.name}
                                    </p>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default signIn