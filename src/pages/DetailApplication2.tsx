import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  Building, 
  MapPin, 
  ChevronRight,
  ChevronLeft,
  Check,
  AlertCircle,
  FileText,
  CheckCircle,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import AppLayout from "@/components/layout/AppLayout";
import Header from "@/components/layout/Header";
import dynamicFormSchema from "@/data/dynamicFormSchema.json";

// Add CSS for toast animation
const toastStyles = `
  @keyframes slide-in-from-top {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .animate-in {
    animation-duration: 0.3s;
    animation-fill-mode: both;
  }
  
  .slide-in-from-top-2 {
    animation-name: slide-in-from-top;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = toastStyles;
  document.head.appendChild(styleSheet);
}

type FormField = {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  options?: any;
  showIf?: Record<string, string>;
  dependsOn?: string;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    message?: string;
  };
};

type FormStep = {
  id: string;
  title: string;
  description: string;
  fields: FormField[];
};

type FormSchema = {
  title: string;
  description: string;
  steps: FormStep[];
};

const DetailApplication2 = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [schema] = useState<FormSchema>(dynamicFormSchema as FormSchema);
  const [showToast, setShowToast] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string | null>>({});

  const { 
    control, 
    handleSubmit, 
    watch, 
    setValue, 
    formState: { errors, isValid },
    trigger,
    reset
  } = useForm({
    mode: "onSubmit",
    defaultValues: {}
  });

  const watchedValues = watch();

  // Update form data when values change
  useEffect(() => {
    setFormData(prev => ({ ...prev, ...watchedValues }));
  }, [watchedValues]);

  // Reset dependent fields when parent field changes
  useEffect(() => {
    const currentStepFields = schema.steps[currentStep]?.fields || [];
    
    currentStepFields.forEach(field => {
      if (field.dependsOn && watchedValues[field.dependsOn] !== formData[field.dependsOn]) {
        setValue(field.name, "");
      }
    });
  }, [watchedValues, currentStep, schema.steps, setValue, formData]);

  const shouldShowField = (field: FormField): boolean => {
    if (!field.showIf) return true;
    
    return Object.entries(field.showIf).every(([key, value]) => {
      return formData[key] === value;
    });
  };

  const getFieldOptions = (field: FormField) => {
    if (!field.dependsOn) {
      return Array.isArray(field.options) ? field.options : [];
    }

    const parentValue = formData[field.dependsOn];
    if (!parentValue || !field.options || typeof field.options !== 'object') {
      return [];
    }

    return field.options[parentValue] || [];
  };

  const validateField = (field: FormField, value: any) => {
    // For radio buttons, check if value is explicitly undefined or empty string
    if (field.required && (value === undefined || value === "" || (Array.isArray(value) && value.length === 0))) {
      return `${field.label} is required`;
    }

    if (field.validation && value) {
      const { minLength, maxLength, pattern, message } = field.validation;
      
      if (minLength && value.length < minLength) {
        return message || `${field.label} must be at least ${minLength} characters`;
      }
      
      if (maxLength && value.length > maxLength) {
        return message || `${field.label} must be less than ${maxLength} characters`;
      }
      
      if (pattern === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return message || 'Please enter a valid email address';
      }
    }

    // Standard validations
    if (field.type === 'email' && value) {
      if (value.length > 254) return 'Email must be less than 254 characters';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Please enter a valid email address';
      }
    }
    
    if (field.type === 'tel' && value) {
      if (value.length > 15) return 'Phone number must be less than 15 digits';
      if (!/^[+]?[0-9\s\-\(\)]+$/.test(value)) {
        return 'Please enter a valid phone number';
      }
    }

    return null;
  };

  const validateCurrentStep = async () => {
    const currentStepFields = schema.steps[currentStep]?.fields || [];
    const visibleFields = currentStepFields.filter(shouldShowField);
    
    let isStepValid = true;
    const newErrors: Record<string, string | null> = {};
    
    for (const field of visibleFields) {
      const value = formData[field.name];
      const error = validateField(field, value);
      
      if (error) {
        newErrors[field.name] = error;
        isStepValid = false;
      }
    }
    
    // Only set errors if validation fails
    if (!isStepValid) {
      setFieldErrors(newErrors);
    }
    
    return isStepValid;
  };

  const nextStep = async () => {
    const isStepValid = await validateCurrentStep();
    if (isStepValid) {
      setCurrentStep(prev => Math.min(prev + 1, schema.steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const onSubmit = async (data: any) => {
    // Validate all fields before submit
    const allFields = schema.steps.flatMap(step => step.fields).filter(shouldShowField);
    const submitErrors: Record<string, string | null> = {};
    let hasErrors = false;
    
    for (const field of allFields) {
      const value = formData[field.name];
      const error = validateField(field, value);
      
      if (error) {
        submitErrors[field.name] = error;
        hasErrors = true;
      }
    }
    
    if (hasErrors) {
      setFieldErrors(submitErrors);
      return;
    }
    
    const finalData = { ...formData, ...data };
    console.log("Final Form Data:", finalData);
    
    // Show success toast
    setShowToast(true);
    
    // Auto hide toast and redirect after 3 seconds
    setTimeout(() => {
      setShowToast(false);
      navigate('/applications');
    }, 3000);
  };

  const handleFieldChange = (fieldName: string, value: any) => {
    // Clear error after 3 seconds of typing
    if (fieldErrors[fieldName]) {
      setTimeout(() => {
        setFieldErrors(prev => ({ ...prev, [fieldName]: null }));
      }, 3000);
    }
  };

  // Auto-hide all errors after 5 seconds
  useEffect(() => {
    if (Object.keys(fieldErrors).length > 0) {
      const timer = setTimeout(() => {
        setFieldErrors({});
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [fieldErrors]);

  const renderField = (field: FormField) => {
    if (!shouldShowField(field)) return null;

    // Only show error if it exists in fieldErrors state (set by validation)
    const fieldError = fieldErrors[field.name];

    switch (field.type) {
      case 'text':
      case 'email':
      case 'tel':
        return (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={field.name}>
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </Label>
            <Controller
              name={field.name}
              control={control}
              render={({ field: controllerField }) => (
                <Input
                  {...controllerField}
                  type={field.type}
                  placeholder={field.placeholder}
                  className={fieldError ? "border-red-500" : ""}
                  maxLength={field.type === 'email' ? 254 : field.type === 'tel' ? 15 : undefined}
                  onChange={(e) => {
                    controllerField.onChange(e);
                    handleFieldChange(field.name, e.target.value);
                  }}
                />
              )}
            />
            {fieldError && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {fieldError}
              </p>
            )}
          </div>
        );

      case 'textarea':
        return (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={field.name}>
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </Label>
            <Controller
              name={field.name}
              control={control}
              render={({ field: controllerField }) => (
                <Textarea
                  {...controllerField}
                  placeholder={field.placeholder}
                  className={fieldError ? "border-red-500" : ""}
                  rows={3}
                />
              )}
            />
            {fieldError && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {fieldError}
              </p>
            )}
          </div>
        );

      case 'select':
        const options = getFieldOptions(field);
        return (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={field.name}>
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </Label>
            <Controller
              name={field.name}
              control={control}
              render={({ field: controllerField }) => (
                <select
                  {...controllerField}
                  className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ${
                    fieldError ? "border-red-500" : ""
                  }`}
                  disabled={field.dependsOn && !formData[field.dependsOn]}
                >
                  <option value="">Select {field.label}</option>
                  {options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            />
            {fieldError && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {fieldError}
              </p>
            )}
          </div>
        );

      case 'radio':
        return (
          <div key={field.name} className="space-y-4">
            <Label>
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </Label>
            <Controller
              name={field.name}
              control={control}
              defaultValue={undefined}
              render={({ field: controllerField }) => (
                <RadioGroup 
                  value={controllerField.value || ""} 
                  onValueChange={(value) => {
                    controllerField.onChange(value);
                    // Clear error when user selects an option
                    if (fieldErrors[field.name]) {
                      setFieldErrors(prev => ({ ...prev, [field.name]: null }));
                    }
                  }}
                >
                  {field.options?.map((option: any) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`${field.name}-${option.value}`} />
                      <Label htmlFor={`${field.name}-${option.value}`}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            />
            {fieldError && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {fieldError}
              </p>
            )}
          </div>
        );

      case 'checkbox':
        return (
          <div key={field.name} className="space-y-4">
            <Label>{field.label}</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {field.options?.map((option: any) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Controller
                    name={field.name}
                    control={control}
                    render={({ field: controllerField }) => (
                      <Checkbox
                        checked={controllerField.value?.includes(option.value) || false}
                        onCheckedChange={(checked) => {
                          const currentValues = controllerField.value || [];
                          if (checked) {
                            controllerField.onChange([...currentValues, option.value]);
                          } else {
                            controllerField.onChange(currentValues.filter((v: string) => v !== option.value));
                          }
                        }}
                      />
                    )}
                  />
                  <Label className="text-sm">{option.label}</Label>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const progress = ((currentStep + 1) / schema.steps.length) * 100;
  const currentStepData = schema.steps[currentStep];

  const getStepIcon = (stepIndex: number) => {
    const icons = [User, Building, MapPin];
    return icons[stepIndex] || FileText;
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className="max-w-4xl mx-auto">


            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                {schema.steps.map((step, index) => {
                  const StepIcon = getStepIcon(index);
                  return (
                    <div key={step.id} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        index <= currentStep 
                          ? "bg-blue-600 text-white" 
                          : "bg-gray-200 text-gray-500"
                      }`}>
                        {index < currentStep ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <StepIcon className="h-5 w-5" />
                        )}
                      </div>
                      {index < schema.steps.length - 1 && (
                        <div className={`w-20 h-1 mx-2 ${
                          index < currentStep ? "bg-blue-600" : "bg-gray-200"
                        }`} />
                      )}
                    </div>
                  );
                })}
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between mt-2">
                {schema.steps.map((step, index) => (
                  <span key={step.id} className={`text-sm ${
                    index <= currentStep ? "text-blue-600 font-medium" : "text-gray-500"
                  }`}>
                    {step.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Form */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg p-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  {(() => {
                    const StepIcon = getStepIcon(currentStep);
                    return <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <StepIcon className="h-4 w-4 text-white" />
                    </div>;
                  })()}
                  <div>
                    <div className="font-semibold text-gray-900">{currentStepData.title}</div>
                    <div className="text-xs text-gray-600 font-normal">{currentStepData.description}</div>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Dynamic Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {currentStepData.fields.map(renderField)}
                  </div>

                  {/* Conditional Sections */}
                  {currentStepData.fields.some(field => shouldShowField(field) && field.showIf) && (
                    <div className="space-y-6">
                      {currentStepData.fields
                        .filter(field => shouldShowField(field) && field.showIf)
                        .map(field => (
                          <div key={`conditional-${field.name}`} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            {renderField(field)}
                          </div>
                        ))}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className="flex items-center gap-2"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>

                    {currentStep < schema.steps.length - 1 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center gap-2"
                      >
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                        Submit Application
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Form Data Preview */}
            {Object.keys(formData).length > 0 && (
              <Card className="mt-6 bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle>Form Data Preview</CardTitle>
                  <CardDescription>Current form values (for development)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-60 overflow-y-auto">
                    {Object.entries(formData).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm font-medium text-gray-600">{key}:</span>
                        <Badge variant="outline" className="text-xs">
                          {Array.isArray(value) ? value.join(', ') : String(value)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      
      {/* Success Toast */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2">
          <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]">
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold">Application Submitted Successfully!</p>
              <p className="text-sm text-green-100">Your application has been received and is being processed.</p>
            </div>
            <button 
              onClick={() => setShowToast(false)}
              className="text-green-100 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default DetailApplication2;