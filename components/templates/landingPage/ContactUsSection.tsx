'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion, AnimatePresence } from 'framer-motion'

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
      {/* Animated overlay */}
      <motion.div
        className="absolute top-0 left-0 h-full w-full bg-[#6EEAFF99]/80 dark:bg-[#001434]/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      {/* Animated form container */}
      <motion.div
        className="relative z-10 flex w-full max-w-[90%] flex-col items-center gap-6 rounded-2xl bg-[#ffffff19] px-6 py-10 shadow-md backdrop-blur-sm md:px-10"
        initial={{ opacity: 0, y: 60, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {/* Header */}
        <motion.div
          className="mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-2xl font-bold text-white md:text-[44px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              type: 'spring',
              stiffness: 120,
            }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-sm text-white md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </motion.p>
        </motion.div>

        <form
          onSubmit={formik.handleSubmit}
          className="flex w-full flex-col gap-6"
        >
          {/* Radio Options */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <RadioOptions
              value={formik.values.subject}
              onChange={(val) => formik.setFieldValue('subject', val)}
            />
            <AnimatePresence>
              {formik.touched.subject && formik.errors.subject && (
                <motion.span
                  className="text-xs text-red-400"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {formik.errors.subject}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Field
              label="Name"
              name="name"
              value={formik.values.name}
              error={formik.touched.name ? formik.errors.name : ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Field
              label="Email*"
              name="email"
              type="email"
              value={formik.values.email}
              error={formik.touched.email ? formik.errors.email : ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Field
              label="Message*"
              name="message"
              isTextarea
              value={formik.values.message}
              error={formik.touched.message ? formik.errors.message : ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                type="submit"
                className="w-full rounded-full py-5 text-white"
              >
                Send Message
              </Button>
            </motion.div>
          </motion.div>
        </form>
      </motion.div>
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
    'w-full text-sm md:text-lg font-normal leading-relaxed text-text-placeholder bg-[#6ee9fe26] border border-gray-500 rounded-md placeholder:text-text-placeholder focus:outline-none focus:ring-0 px-3 py-3 transition-all duration-300 focus:border-cyan-400 focus:bg-[#6ee9fe33] focus:shadow-lg focus:shadow-cyan-500/20'

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
      <AnimatePresence>
        {error && (
          <motion.span
            className="mt-1 text-xs text-red-400"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
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
      <motion.label
        className="flex cursor-pointer items-center gap-2 text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Input
          type="radio"
          name="subject"
          value="hi"
          checked={value === 'hi'}
          onChange={() => onChange('hi')}
          className="h-4 w-4 cursor-pointer"
        />
        <span className="text-text-light text-sm md:text-lg">Say Hi</span>
      </motion.label>

      <motion.label
        className="flex cursor-pointer items-center gap-2 text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Input
          type="radio"
          name="subject"
          value="quote"
          checked={value === 'quote'}
          onChange={() => onChange('quote')}
          className="h-4 w-4 cursor-pointer"
        />
        <span className="text-text-light text-sm md:text-lg">Get a Quote</span>
      </motion.label>
    </div>
  )
}
