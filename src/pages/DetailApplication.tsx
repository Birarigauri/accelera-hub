import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  User, 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  ChevronRight,
  ChevronLeft,
  Check,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import AppLayout from "@/components/layout/AppLayout";
import Header from "@/components/layout/Header";
import formSchema from "@/data/formSchema.json";

// Validation schemas for each step
const basicInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
});

const conditionalSchema = z.object({
  hasExperience: z.enum(["yes", "no"]),
  experienceYears: z.string().optional(),
  experienceDetails: z.string().optional(),
  hasFunding: z.enum(["yes", "no"]),
  fundingAmount: z.string().optional(),
  fundingStage: z.string().optional(),
  hasTeam: z.enum(["yes", "no"]),
  teamSize: z.string().optional(),
  keySkills: z.array(z.string()).optional(),
});

const businessSchema = z.object({
  isBusiness: z.enum(["yes", "no"]),
  businessName: z.string().optional(),
  businessType: z.string().optional(),
  industry: z.string().optional(),
  registrationNumber: z.string().optional(),
  annualRevenue: z.string().optional(),
  employeeCount: z.string().optional(),
});

type FormData = z.infer<typeof basicInfoSchema> & 
                z.infer<typeof conditionalSchema> & 
                z.infer<typeof businessSchema>;

const DetailApplication = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [availableStates, setAvailableStates] = useState<any[]>([]);
  const [availableCities, setAvailableCities] = useState<any[]>([]);

  const steps = [
    { id: 0, title: "Basic Information", icon: User },
    { id: 1, title: "Experience & Skills", icon: Building },
    { id: 2, title: "Business Details", icon: MapPin },
  ];

  const { 
    control, 
    handleSubmit, 
    watch, 
    setValue, 
    formState: { errors, isValid },
    trigger
  } = useForm<FormData>({
    resolver: zodResolver(
      currentStep === 0 ? basicInfoSchema :
      currentStep === 1 ? conditionalSchema :
      businessSchema
    ),
    mode: "onChange",
    defaultValues: formData
  });

  const watchedValues = watch();

  // Update dependent dropdowns
  useEffect(() => {
    if (watchedValues.country) {
      const country = formSchema.countries.find(c => c.id === watchedValues.country);
      setAvailableStates(country?.states || []);
      setValue("state", "");
      setValue("city", "");
      setAvailableCities([]);
    }
  }, [watchedValues.country, setValue]);

  useEffect(() => {
    if (watchedValues.state) {
      const country = formSchema.countries.find(c => c.id === watchedValues.country);
      const state = country?.states.find(s => s.id === watchedValues.state);
      setAvailableCities(state?.cities || []);
      setValue("city", "");
    }
  }, [watchedValues.state, watchedValues.country, setValue]);

  const nextStep = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      setFormData(prev => ({ ...prev, ...watchedValues }));
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const onSubmit = (data: FormData) => {
    const finalData = { ...formData, ...data };
    console.log("Final Form Data:", finalData);
    alert("Application submitted successfully!");
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  const skillOptions = [
    "JavaScript", "Python", "React", "Node.js", "AWS", "Docker", 
    "Marketing", "Sales", "Finance", "Operations", "Design", "Management"
  ];

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Detailed Application</h1>
              <p className="text-muted-foreground">
                Complete your application with personalized questions
              </p>
            </div>

            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index <= currentStep 
                        ? "bg-blue-600 text-white" 
                        : "bg-gray-200 text-gray-500"
                    }`}>
                      {index < currentStep ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <step.icon className="h-5 w-5" />
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-20 h-1 mx-2 ${
                        index < currentStep ? "bg-blue-600" : "bg-gray-200"
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between mt-2">
                {steps.map((step, index) => (
                  <span key={step.id} className={`text-sm ${
                    index <= currentStep ? "text-blue-600 font-medium" : "text-gray-500"
                  }`}>
                    {step.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Form */}
            <Card className="bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {(() => {
                    const IconComponent = steps[currentStep].icon;
                    return <IconComponent className="h-5 w-5" />;
                  })()}
                  {steps[currentStep].title}
                </CardTitle>
                <CardDescription>
                  {currentStep === 0 && "Please provide your basic information"}
                  {currentStep === 1 && "Tell us about your experience and skills"}
                  {currentStep === 2 && "Business information (if applicable)"}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Step 0: Basic Information */}
                  {currentStep === 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Controller
                          name="firstName"
                          control={control}
                          render={({ field }) => (
                            <Input {...field} placeholder="Enter first name" />
                          )}
                        />
                        {errors.firstName && (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Controller
                          name="lastName"
                          control={control}
                          render={({ field }) => (
                            <Input {...field} placeholder="Enter last name" />
                          )}
                        />
                        {errors.lastName && (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <Input {...field} type="email" placeholder="Enter email address" />
                          )}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Controller
                          name="phone"
                          control={control}
                          render={({ field }) => (
                            <Input {...field} placeholder="Enter phone number" />
                          )}
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Controller
                          name="dateOfBirth"
                          control={control}
                          render={({ field }) => (
                            <Input {...field} type="date" />
                          )}
                        />
                        {errors.dateOfBirth && (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.dateOfBirth.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <Controller
                          name="country"
                          control={control}
                          render={({ field }) => (
                            <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                              <option value="">Select Country</option>
                              {formSchema.countries.map(country => (
                                <option key={country.id} value={country.id}>
                                  {country.name}
                                </option>
                              ))}
                            </select>
                          )}
                        />
                        {errors.country && (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.country.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="state">State *</Label>
                        <Controller
                          name="state"
                          control={control}
                          render={({ field }) => (
                            <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" disabled={!watchedValues.country}>
                              <option value="">Select State</option>
                              {availableStates.map(state => (
                                <option key={state.id} value={state.id}>
                                  {state.name}
                                </option>
                              ))}
                            </select>
                          )}
                        />
                        {errors.state && (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.state.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Controller
                          name="city"
                          control={control}
                          render={({ field }) => (
                            <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" disabled={!watchedValues.state}>
                              <option value="">Select City</option>
                              {availableCities.map(city => (
                                <option key={city.id} value={city.id}>
                                  {city.name}
                                </option>
                              ))}
                            </select>
                          )}
                        />
                        {errors.city && (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.city.message}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 1: Conditional Questions */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <Label>Do you have prior work experience? *</Label>
                        <Controller
                          name="hasExperience"
                          control={control}
                          render={({ field }) => (
                            <RadioGroup value={field.value} onValueChange={field.onChange}>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="exp-yes" />
                                <Label htmlFor="exp-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="exp-no" />
                                <Label htmlFor="exp-no">No</Label>
                              </div>
                            </RadioGroup>
                          )}
                        />
                      </div>

                      {watchedValues.hasExperience === "yes" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-blue-50 rounded-lg">
                          <div className="space-y-2">
                            <Label htmlFor="experienceYears">Years of Experience</Label>
                            <Controller
                              name="experienceYears"
                              control={control}
                              render={({ field }) => (
                                <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                  <option value="">Select Years</option>
                                  <option value="0-1">0-1 years</option>
                                  <option value="2-5">2-5 years</option>
                                  <option value="6-10">6-10 years</option>
                                  <option value="10+">10+ years</option>
                                </select>
                              )}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="experienceDetails">Experience Details</Label>
                            <Controller
                              name="experienceDetails"
                              control={control}
                              render={({ field }) => (
                                <Input {...field} placeholder="Brief description of your experience" />
                              )}
                            />
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        <Label>Do you have funding for your project? *</Label>
                        <Controller
                          name="hasFunding"
                          control={control}
                          render={({ field }) => (
                            <RadioGroup value={field.value} onValueChange={field.onChange}>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="fund-yes" />
                                <Label htmlFor="fund-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="fund-no" />
                                <Label htmlFor="fund-no">No</Label>
                              </div>
                            </RadioGroup>
                          )}
                        />
                      </div>

                      {watchedValues.hasFunding === "yes" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-green-50 rounded-lg">
                          <div className="space-y-2">
                            <Label htmlFor="fundingAmount">Funding Amount</Label>
                            <Controller
                              name="fundingAmount"
                              control={control}
                              render={({ field }) => (
                                <Input {...field} placeholder="e.g., $100,000" />
                              )}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="fundingStage">Funding Stage</Label>
                            <Controller
                              name="fundingStage"
                              control={control}
                              render={({ field }) => (
                                <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                  <option value="">Select Stage</option>
                                  {formSchema.fundingStages.map(stage => (
                                    <option key={stage.id} value={stage.id}>
                                      {stage.name}
                                    </option>
                                  ))}
                                </select>
                              )}
                            />
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        <Label>Do you have a team? *</Label>
                        <Controller
                          name="hasTeam"
                          control={control}
                          render={({ field }) => (
                            <RadioGroup value={field.value} onValueChange={field.onChange}>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="team-yes" />
                                <Label htmlFor="team-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="team-no" />
                                <Label htmlFor="team-no">No</Label>
                              </div>
                            </RadioGroup>
                          )}
                        />
                      </div>

                      {watchedValues.hasTeam === "yes" && (
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <div className="space-y-2">
                            <Label htmlFor="teamSize">Team Size</Label>
                            <Controller
                              name="teamSize"
                              control={control}
                              render={({ field }) => (
                                <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                  <option value="">Select Size</option>
                                  <option value="2-5">2-5 members</option>
                                  <option value="6-10">6-10 members</option>
                                  <option value="11-20">11-20 members</option>
                                  <option value="20+">20+ members</option>
                                </select>
                              )}
                            />
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        <Label>Key Skills (Select all that apply)</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {skillOptions.map(skill => (
                            <div key={skill} className="flex items-center space-x-2">
                              <Controller
                                name="keySkills"
                                control={control}
                                render={({ field }) => (
                                  <Checkbox
                                    checked={field.value?.includes(skill) || false}
                                    onCheckedChange={(checked) => {
                                      const currentSkills = field.value || [];
                                      if (checked) {
                                        field.onChange([...currentSkills, skill]);
                                      } else {
                                        field.onChange(currentSkills.filter(s => s !== skill));
                                      }
                                    }}
                                  />
                                )}
                              />
                              <Label className="text-sm">{skill}</Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Business Information */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <Label>Do you have a registered business? *</Label>
                        <Controller
                          name="isBusiness"
                          control={control}
                          render={({ field }) => (
                            <RadioGroup value={field.value} onValueChange={field.onChange}>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="biz-yes" />
                                <Label htmlFor="biz-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="biz-no" />
                                <Label htmlFor="biz-no">No</Label>
                              </div>
                            </RadioGroup>
                          )}
                        />
                      </div>

                      {watchedValues.isBusiness === "yes" && (
                        <div className="space-y-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="businessName">Business Name</Label>
                              <Controller
                                name="businessName"
                                control={control}
                                render={({ field }) => (
                                  <Input {...field} placeholder="Enter business name" />
                                )}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="businessType">Business Type</Label>
                              <Controller
                                name="businessType"
                                control={control}
                                render={({ field }) => (
                                  <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                    <option value="">Select Type</option>
                                    {formSchema.businessTypes.map(type => (
                                      <option key={type.id} value={type.id}>
                                        {type.name}
                                      </option>
                                    ))}
                                  </select>
                                )}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="industry">Industry</Label>
                              <Controller
                                name="industry"
                                control={control}
                                render={({ field }) => (
                                  <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                    <option value="">Select Industry</option>
                                    {formSchema.industries.map(industry => (
                                      <option key={industry.id} value={industry.id}>
                                        {industry.name}
                                      </option>
                                    ))}
                                  </select>
                                )}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="registrationNumber">Registration Number</Label>
                              <Controller
                                name="registrationNumber"
                                control={control}
                                render={({ field }) => (
                                  <Input {...field} placeholder="Enter registration number" />
                                )}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="annualRevenue">Annual Revenue</Label>
                              <Controller
                                name="annualRevenue"
                                control={control}
                                render={({ field }) => (
                                  <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                    <option value="">Select Range</option>
                                    <option value="0-100k">$0 - $100K</option>
                                    <option value="100k-500k">$100K - $500K</option>
                                    <option value="500k-1m">$500K - $1M</option>
                                    <option value="1m+">$1M+</option>
                                  </select>
                                )}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="employeeCount">Employee Count</Label>
                              <Controller
                                name="employeeCount"
                                control={control}
                                render={({ field }) => (
                                  <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                    <option value="">Select Range</option>
                                    <option value="1-10">1-10 employees</option>
                                    <option value="11-50">11-50 employees</option>
                                    <option value="51-200">51-200 employees</option>
                                    <option value="200+">200+ employees</option>
                                  </select>
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {watchedValues.isBusiness === "no" && (
                        <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="h-5 w-5 text-yellow-600" />
                            <h3 className="font-medium text-yellow-800">No Business Registration</h3>
                          </div>
                          <p className="text-sm text-yellow-700">
                            You can still apply as an individual. Some schemes may require business registration for eligibility.
                          </p>
                        </div>
                      )}
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

                    {currentStep < steps.length - 1 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center gap-2"
                        disabled={!isValid}
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

            {/* Summary */}
            {Object.keys(formData).length > 0 && (
              <Card className="mt-6 bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle>Application Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {formData.firstName && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Name:</span>
                        <span>{formData.firstName} {formData.lastName}</span>
                      </div>
                    )}
                    {formData.email && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Email:</span>
                        <span>{formData.email}</span>
                      </div>
                    )}
                    {formData.hasExperience && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Experience:</span>
                        <Badge variant={formData.hasExperience === "yes" ? "default" : "secondary"}>
                          {formData.hasExperience === "yes" ? "Yes" : "No"}
                        </Badge>
                      </div>
                    )}
                    {formData.hasFunding && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Funding:</span>
                        <Badge variant={formData.hasFunding === "yes" ? "default" : "secondary"}>
                          {formData.hasFunding === "yes" ? "Yes" : "No"}
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DetailApplication;