'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

/**
 * ContactUsSection Component
 * Full-screen contact form using Formik for validation and state handling.
 */
export default function ContactUsSection() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      subject: 'hi',
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      message: Yup.string().trim().required('Message is required'),
      subject: Yup.string().required('Please select an option'),
    }),
    onSubmit: (values) => {
      console.log('Form submitted:', values)
    },
  })

  return (
    <section
      className="relative flex h-full w-full items-center justify-center bg-cover"
      style={{
        backgroundImage: "url('/landingPage/contact-bg-image.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-[#6EEAFF99]/80 dark:bg-[#001434]/50" />
      <div className="relative z-10 flex w-full max-w-[90%] flex-col items-center gap-6 rounded-2xl bg-[#ffffff19] px-6 py-10 shadow-md backdrop-blur-sm md:px-10">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-white md:text-[44px]">
            Contact Us
          </h2>
          <p className="text-sm text-white md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="flex w-full flex-col gap-6"
        >
          <RadioOptions
            value={formik.values.subject}
            onChange={(val) => formik.setFieldValue('subject', val)}
          />
          {formik.touched.subject && formik.errors.subject && (
            <span className="text-xs text-red-400">
              {formik.errors.subject}
            </span>
          )}

          <Field
            label="Name"
            name="name"
            value={formik.values.name}
            error={formik.touched.name ? formik.errors.name : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Field
            label="Email*"
            name="email"
            type="email"
            value={formik.values.email}
            error={formik.touched.email ? formik.errors.email : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Field
            label="Message*"
            name="message"
            isTextarea
            value={formik.values.message}
            error={formik.touched.message ? formik.errors.message : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Button type="submit" className="w-full rounded-full py-5 text-white">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

/**
 * Field Component
 * Reusable input/textarea with validation error handling.
 */
function Field({
  label,
  name,
  type = 'text',
  isTextarea = false,
  value,
  error,
  onChange,
  onBlur,
}: {
  label: string
  name: string
  type?: string
  isTextarea?: boolean
  value: string
  error?: string | undefined
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}) {
  const baseClasses =
    'w-full text-sm md:text-lg font-normal leading-relaxed text-text-placeholder bg-[#6ee9fe26] border border-gray-500 rounded-md placeholder:text-text-placeholder focus:outline-none focus:ring-0 px-3 py-3'

  return (
    <div className="flex w-full flex-col gap-1">
      <label
        htmlFor={name}
        className="text-text-light text-sm font-medium text-white md:text-base"
      >
        {label}
      </label>
      {isTextarea ? (
        <Textarea
          id={name}
          name={name}
          rows={4}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={label}
          className={`${baseClasses} h-[30%] resize-none text-white placeholder:text-gray-300`}
        />
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={label}
          className={baseClasses + ' text-white placeholder:text-gray-300'}
        />
      )}
      {error && <span className="mt-1 text-xs text-red-400">{error}</span>}
    </div>
  )
}

/**
 * RadioOptions Component
 * Simple radio group for selecting between "Say Hi" and "Get a Quote".
 */
function RadioOptions({
  value,
  onChange,
}: {
  value: string
  onChange: (val: string) => void
}) {
  return (
    <div className="flex w-full items-center justify-center gap-10">
      <label className="flex cursor-pointer items-center gap-2 text-white">
        <Input
          type="radio"
          name="subject"
          value="hi"
          checked={value === 'hi'}
          onChange={() => onChange('hi')}
          className="h-4 w-4 cursor-pointer"
        />
        <span className="text-text-light text-sm md:text-lg">Say Hi</span>
      </label>

      <label className="flex cursor-pointer items-center gap-2 text-white">
        <Input
          type="radio"
          name="subject"
          value="quote"
          checked={value === 'quote'}
          onChange={() => onChange('quote')}
          className="h-4 w-4 cursor-pointer"
        />
        <span className="text-text-light text-sm md:text-lg">Get a Quote</span>
      </label>
    </div>
  )
}
