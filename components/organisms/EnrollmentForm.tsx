'use client';

import { useTranslations } from 'next-intl';

import { EnrollmentFormValues } from '@/types/types';
import { useFormik } from 'formik';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import * as Yup from 'yup';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import useEnroll from '@/hooks/useEnroll';

/**
 * @component EnrollmentForm
 * @description Displays a company enrollment form that allows users to submit company details.
 * The form uses Formik for form state management and Yup for validation.
 * Supports multilingual labels via `next-intl`.
 */
export default function EnrollmentForm() {
  const t = useTranslations('enrollPage.enrollForm');

  const { handleEnroll, isEnrollLoading } = useEnroll();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      website: '',
      address: '',
      industry: '',
      commercialRegister: '',
      taxId: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      company: Yup.string().required('Company name is required'),
      website: Yup.string()
        .url('Invalid website URL')
        .required('Website is required'),
      address: Yup.string().required('Address is required'),
      industry: Yup.string().required('Industry is required'),
      commercialRegister: Yup.string().required(
        'Commercial register is required'
      ),
      taxId: Yup.string().required('Tax ID is required'),
      message: Yup.string().required('Message is required').min(10).max(500),
    }),
    onSubmit: async (values: EnrollmentFormValues, { resetForm }) => {
      const res = await handleEnroll(values);
      console.log(values);

      if (res) {
        toast.success('Enrollment successful');
        resetForm();
      }
    },
  });

  return (
    <div className="w-full rounded-2xl bg-[#FFFFFFCC] p-8 shadow-[0_0_25px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-200 dark:bg-[#06B6D40F]">
      {/* Form Title */}
      <h2 className="text-foreground mb-6 text-2xl font-semibold">
        {t('title')}
      </h2>

      {/* Enrollment Form */}
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <FormField
          label={t('name')}
          placeholder={t('namePlaceholder')}
          required
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name ? formik.errors.name : undefined}
        />

        <FormField
          label={t('email')}
          placeholder={t('emailPlaceholder')}
          required
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email ? formik.errors.email : undefined}
        />

        <FormField
          label={t('phone')}
          placeholder={t('phonePlaceholder')}
          required
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone ? formik.errors.phone : undefined}
        />

        <FormField
          label={t('company')}
          placeholder={t('companyNamePlaceholder')}
          required
          name="company"
          value={formik.values.company}
          onChange={formik.handleChange}
          error={formik.touched.company ? formik.errors.company : undefined}
        />

        <FormField
          label={t('website')}
          placeholder={t('companyWebsitePlaceholder')}
          required
          name="website"
          value={formik.values.website}
          onChange={formik.handleChange}
          error={formik.touched.website ? formik.errors.website : undefined}
        />

        <FormField
          label={t('address')}
          placeholder={t('addressPlaceholder')}
          required
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address ? formik.errors.address : undefined}
        />

        <FormField
          label={t('industry')}
          placeholder={t('industryPlaceholder')}
          required
          name="industry"
          value={formik.values.industry}
          onChange={formik.handleChange}
          error={formik.touched.industry ? formik.errors.industry : undefined}
        />

        <FormField
          label={t('commercialRegister')}
          placeholder={t('commercialRegisterPlaceholder')}
          required
          name="commercialRegister"
          value={formik.values.commercialRegister}
          onChange={formik.handleChange}
          error={
            formik.touched.commercialRegister
              ? formik.errors.commercialRegister
              : undefined
          }
        />

        <FormField
          label={t('taxId')}
          placeholder={t('taxIdPlaceholder')}
          required
          name="taxId"
          value={formik.values.taxId}
          onChange={formik.handleChange}
          error={formik.touched.taxId ? formik.errors.taxId : undefined}
        />

        {/* Message */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <Label className="text-sm font-medium">
            {t('message')} <span className="text-cyan-500">*</span>
          </Label>
          <Textarea
            placeholder={t('messagePlaceholder')}
            className="h-24 rounded-lg border-none bg-[#06B6D40F] placeholder:text-gray-500"
            value={formik.values.message}
            onChange={formik.handleChange}
            name="message"
          />
          {formik.touched.message && formik.errors.message && (
            <p className="mt-1 text-xs text-red-500">{formik.errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-end md:col-span-2">
          <Button
            type="submit"
            className="rounded-full bg-[#00B4D8] px-8 py-2 text-white shadow-md transition hover:bg-[#0096C7] disabled:opacity-50"
            disabled={isEnrollLoading}
          >
            {isEnrollLoading ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                <span className="ml-2">{t('submitting')}</span>
              </>
            ) : (
              t('submit')
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

/**
 * @component FormField
 * @description Reusable input field component for form consistency.
 * @param {object} props
 * @param {string} props.label - The label text for the input.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {boolean} [props.required=false] - Whether the field is required.
 * @param {string} props.name - The field name for formik.
 * @param {string} props.value - The field value.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - The onChange handler.
 * @param {string} [props.error] - Optional error message.
 */
function FormField({
  label,
  placeholder,
  required = false,
  name,
  value,
  onChange,
  error,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <Label className="text-sm font-medium">
        {label} {required && <span className="text-cyan-500">*</span>}
      </Label>
      <Input
        placeholder={placeholder}
        className={`h-11 rounded-lg border-none bg-[#06B6D40F] placeholder:text-gray-500 ${
          error ? 'border border-red-500' : ''
        }`}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
