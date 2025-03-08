import React from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, User, Mail, Lock, UserCircle2 } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface SignupFormProps {
  onSubmit?: (data: SignupFormValues) => void;
  isLoading?: boolean;
  isArabic?: boolean;
}

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: "customer" | "provider";
  phone?: string;
}

const SignupForm = ({
  onSubmit = () => {},
  isLoading = false,
  isArabic = true,
}: SignupFormProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  // Form validation schema
  const formSchema = z
    .object({
      name: z.string().min(2, {
        message: isArabic
          ? "يجب أن يكون الاسم حرفين على الأقل"
          : "Name must be at least 2 characters",
      }),
      email: z.string().email({
        message: isArabic
          ? "يرجى إدخال بريد إلكتروني صالح"
          : "Please enter a valid email",
      }),
      password: z.string().min(8, {
        message: isArabic
          ? "يجب أن تكون كلمة المرور 8 أحرف على الأقل"
          : "Password must be at least 8 characters",
      }),
      confirmPassword: z.string(),
      userType: z.enum(["customer", "provider"]),
      phone: z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: isArabic ? "كلمات المرور غير متطابقة" : "Passwords do not match",
      path: ["confirmPassword"],
    });

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "customer",
      phone: "",
    },
  });

  const handleSubmit = (data: SignupFormValues) => {
    onSubmit(data);
  };

  return (
    <Card
      className="w-full max-w-md mx-auto bg-card"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {isArabic ? "إنشاء حساب" : "Create Account"}
        </CardTitle>
        <CardDescription className="text-center">
          {isArabic
            ? "أدخل بياناتك لإنشاء حساب جديد"
            : "Enter your details to create a new account"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {isArabic ? "الاسم الكامل" : "Full Name"}
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder={isArabic ? "محمد أحمد" : "John Doe"}
                        {...field}
                        className={isArabic ? "pr-10" : "pl-10"}
                      />
                    </FormControl>
                    <User
                      className={`absolute ${isArabic ? "right-3" : "left-3"} top-2.5 h-5 w-5 text-muted-foreground`}
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {isArabic ? "البريد الإلكتروني" : "Email"}
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={
                          isArabic ? "example@email.com" : "example@email.com"
                        }
                        {...field}
                        className={isArabic ? "pr-10" : "pl-10"}
                      />
                    </FormControl>
                    <Mail
                      className={`absolute ${isArabic ? "right-3" : "left-3"} top-2.5 h-5 w-5 text-muted-foreground`}
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {isArabic ? "رقم الهاتف" : "Phone Number"}
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder={isArabic ? "05xxxxxxxx" : "+1234567890"}
                        {...field}
                        className={isArabic ? "pr-10" : "pl-10"}
                      />
                    </FormControl>
                    <UserCircle2
                      className={`absolute ${isArabic ? "right-3" : "left-3"} top-2.5 h-5 w-5 text-muted-foreground`}
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="userType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>
                    {isArabic ? "نوع الحساب" : "Account Type"}
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="customer" id="customer" />
                        </FormControl>
                        <Label
                          htmlFor="customer"
                          className={isArabic ? "mr-2" : "ml-2"}
                        >
                          {isArabic ? "زبون" : "Customer"}
                        </Label>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="provider" id="provider" />
                        </FormControl>
                        <Label
                          htmlFor="provider"
                          className={isArabic ? "mr-2" : "ml-2"}
                        >
                          {isArabic ? "مقدم خدمة" : "Service Provider"}
                        </Label>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isArabic ? "كلمة المرور" : "Password"}</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                        className={isArabic ? "pr-10" : "pl-10"}
                      />
                    </FormControl>
                    <Lock
                      className={`absolute ${isArabic ? "right-3" : "left-3"} top-2.5 h-5 w-5 text-muted-foreground`}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className={`absolute ${isArabic ? "left-0" : "right-0"} top-0 h-9 w-9`}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        {showPassword
                          ? isArabic
                            ? "إخفاء كلمة المرور"
                            : "Hide password"
                          : isArabic
                            ? "إظهار كلمة المرور"
                            : "Show password"}
                      </span>
                    </Button>
                  </div>
                  <FormDescription>
                    {isArabic
                      ? "يجب أن تكون كلمة المرور 8 أحرف على الأقل"
                      : "Password must be at least 8 characters long"}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {isArabic ? "تأكيد كلمة المرور" : "Confirm Password"}
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                        className={isArabic ? "pr-10" : "pl-10"}
                      />
                    </FormControl>
                    <Lock
                      className={`absolute ${isArabic ? "right-3" : "left-3"} top-2.5 h-5 w-5 text-muted-foreground`}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className={`absolute ${isArabic ? "left-0" : "right-0"} top-0 h-9 w-9`}
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        {showConfirmPassword
                          ? isArabic
                            ? "إخفاء كلمة المرور"
                            : "Hide password"
                          : isArabic
                            ? "إظهار كلمة المرور"
                            : "Show password"}
                      </span>
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading
                ? isArabic
                  ? "جاري إنشاء الحساب..."
                  : "Creating account..."
                : isArabic
                  ? "إنشاء حساب"
                  : "Create Account"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="text-sm text-center text-muted-foreground">
          {isArabic
            ? "بإنشاء حساب، فإنك توافق على"
            : "By creating an account, you agree to our"}
          <Button variant="link" className="px-1">
            {isArabic ? "شروط الخدمة" : "Terms of Service"}
          </Button>
          {isArabic ? "و" : "and"}
          <Button variant="link" className="px-1">
            {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignupForm;
