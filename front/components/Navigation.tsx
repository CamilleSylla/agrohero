import { Formik, Field, Form } from "formik"
import { Menu, Transition } from '@headlessui/react'
import lang from '../lang/fr-FR.json'
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { Fragment } from "react";
import Link from "next/link";


export default function Navigation() {

    const DefaultDropdown = () => {
        return (
            <Link href="/login">
                <div className=" w-11 h-11"><HiArrowLeftOnRectangle className=" w-6 h-6" /></div>
            </Link>
        )
    }

    const Actions = () => {
        return (
            <div className=" flex items-center">
                <Formik
                    initialValues={{
                        search: '',
                    }}
                    onSubmit={(values) => console.log(values)}
                >
                    <Form>
                        <Field id="search" name="search" type="text" placeholder={lang.home.nav.action.search} />
                    </Form>
                </Formik>
                <div>
                    <DefaultDropdown />
                </div>
            </div>
        )
    }

    const Links = () => {
        return (
            <div></div>
        )
    }

    return (
        <nav className="py-3 absolute top-0 left-0 w-full flex justify-between">
            <Links />
            <Actions />
        </nav>
    )
}