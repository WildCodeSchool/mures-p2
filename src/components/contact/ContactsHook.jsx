import React from 'react'
import { useForm } from "react-hook-form"

function ContactsHook() {
    const {
        register,      
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input  placeholder="e mail" {...register("email", {required: true})}/>
            {errors.email && <p className="p2">Email is required</p>}
            <textarea rows="8" cols="100" placeholder=" Message..." {...register("message", { required: true}) } />
            {errors.message && <p className="p1">This field is required</p>}
            <input  type="submit"/>
        </form >
      
    )
}

export default ContactsHook
