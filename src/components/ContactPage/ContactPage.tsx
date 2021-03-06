import React from 'react'
import { Formik, Field, Form, FormikHelpers} from 'formik'
import { formatClassNames } from '../formatClassNames'

interface formValues {
    firstName:string;
    lastName:string;
    email:string;
    subject:string;
    comments:string;
}


export const ContactPage:React.FC = () => {
    return (
        <div className="h-screen bg-blue-line-wave bg-cover flex justify-center">
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    subject:"",
                    comments: ""
                }}
                onSubmit={(
                    values:formValues,
                    { resetForm }:FormikHelpers<formValues> 
                ) => {
                    fetch("https://formspree.io/f/mrgoydgj", {
                        method: "POST",
                        headers: {
                            "Accept" : "Application/json"
                        },
                        body: JSON.stringify(values)
                    }).then(response => response.json())
                        .then(console.log)
                    resetForm()
                }
            }
            >
                <Form className="p-6 my-10">
                    <p className="text-3xl text-gray-700">Contact Me!</p>
                    <div className="flex space-x-5 mt-3">
                        <Field 
                            className={formatClassNames(
                                "border-2", 
                                "border-gray-200", 
                                "outline-none", 
                                "focus:border-gray-500", 
                                "p-2 w-1/2", 
                                "rounded-lg"
                            )} 
                            id="firstName" 
                            name="firstName" 
                            type="text" 
                            placeholder="First Name" 
                        />
                        <Field              
                            className={formatClassNames(
                                "border-2",
                                "outline-none", 
                                "focus:border-gray-500", 
                                "border-gray-200", 
                                "rounded-lg", 
                                "p-2 w-1/2"
                            )}
                            id="lastName" 
                            name="lastName" 
                            placeholder="Last Name" 
                        />
                    </div>
                    <Field 
                        className={formatClassNames(
                            "border-2", 
                            "outline-none", 
                            "focus:border-gray-500", 
                            "border-gray-200", 
                            "rounded-lg", 
                            "block", 
                            "w-full", 
                            "p-2 mt-3"
                        )}
                        id="email" 
                        name="email" 
                        placeholder="Your Email" 
                        type="email" 
                    />
                    <Field 
                        className={formatClassNames(
                            "border-2", 
                            "outline-none", 
                            "focus:border-gray-500", 
                            "border-gray-200", 
                            "rounded-lg", 
                            "block", 
                            "w-full", 
                            "p-2 mt-3"
                        )}
                        id="subject" 
                        name="subject" 
                        placeholder="Subject" 
                        type="text" 
                    />
                    <Field 
                        className={formatClassNames(
                            "border-2", 
                            "outline-none", 
                            "focus:border-gray-500", 
                            "border-gray-200", 
                            "rounded-lg", 
                            "block", 
                            "w-full", 
                            "h-1/4", 
                            "mt-3 p-2"
                        )}
                        id="comments" 
                        name="comments" 
                        as="textarea"
                        placeholder="What can I do for you?"
                    />
                    <div className="flex justify-end" >
                        <button 
                            className={formatClassNames(
                                "border-2", 
                                "border-gray-600", 
                                "rounded-lg", 
                                "p-2", 
                                "bg-gray-400", 
                                "mt-2", 
                                "w-full", 
                                "transition", 
                                "duration-400", 
                                "ease-in-out", 
                                "hover:bg-gray-500", 
                                "transform", 
                                "hover:-translate-y-1", 
                                "hover:scale-105"
                            )}
                            type="submit"

                        >
                            submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

