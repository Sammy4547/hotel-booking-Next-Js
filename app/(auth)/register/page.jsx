"use client";

import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router=useRouter()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "At least 2 charcters")
        .max(22, "Too many long name")
        .required("Name is required"),

      email: Yup.string().email("Invalid Email").required("Email is required"),
      password: Yup.string()
        .min(4, "At least 4 characters")
        .max(15, "Too long password")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
       
         
        });
        if(res.ok){
          router.push('/login')
        }
      } catch (error) {
        console.log("Error in form validation", error);
      }finally {
      setSubmitting(false);
    }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-100 dark:bg-neutral-900 px-4">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md bg-white dark:bg-neutral-800 dark:text-white p-8 rounded-xl shadow-lg space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-neutral-800 dark:text-white">
          Register Form
        </h1>
        <div>
          <TextField
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            id="name"
            name="name"
            label="Username"
            variant="outlined"
            className="bg-white dark:bg-neutral-300 dark:text-white  rounded"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}
        </div>
        <div className="space-y-4  ">
          <TextField
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            className="bg-white dark:bg-neutral-300 dark:text-white  rounded"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}

          <div className="mt-5 dark:text-white">
            <TextField
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              className="bg-white dark:bg-neutral-300 dark:text-white  rounded"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          variant="contained"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700"
        >
          Register
        </Button>
        <p className="mt-2 flex items-center justify-center">
          {" "}
          You have a account then{" "}
          <Link className="text-blue-500 ml-2" href="/login">
            {" "}
            login{" "}
          </Link>
        </p>
      </form>
    </div>
  );
}
