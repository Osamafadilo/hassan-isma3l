import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, AlertCircle, Mail, Lock } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "../../lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

interface LoginFormProps {
  onSubmit?: (data: LoginFormData) => void;
  isLoading?: boolean;
  error?: string;
  isArabic?: boolean;
}

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm = ({
  onSubmit = () => {},
  isLoading = false,
  error = "",
  isArabic = true,
}: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  // Form validation schema
  const formSchema = z.object({
    email: z.string().email({
      message: isArabic
        ? "يرجى إدخال بريد إلكتروني صالح"
        : "Please enter a valid email",
    }),
    password: z.string().min(1, {
      message: isArabic ? "كلمة المرور مطلوبة" : "Password is required",
    }),
    rememberMe: z.boolean().default(false),
  });

  const form = useForm<LoginFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (data: LoginFormData) => {
    // In a real implementation, this would validate and submit the form
    onSubmit(data);
  };

  return (
    <div
      className="w-full space-y-6 bg-background p-6 rounded-lg"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="space-y-2 text-center">
        <h3 className="text-2xl font-semibold tracking-tight">
          {isArabic ? "تسجيل الدخول" : "Login"}
        </h3>
        <p className="text-sm text-muted-foreground">
          {isArabic
            ? "أدخل بيانات الاعتماد الخاصة بك للوصول إلى حسابك"
            : "Enter your credentials to access your account"}
        </p>
      </div>

      {error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-4"
        >
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
                      placeholder={
                        isArabic ? "name@example.com" : "name@example.com"
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel>{isArabic ? "كلمة المرور" : "Password"}</FormLabel>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-xs"
                    type="button"
                  >
                    {isArabic ? "نسيت كلمة المرور؟" : "Forgot password?"}
                  </Button>
                </div>
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
                    className={`absolute ${isArabic ? "left-0" : "right-0"} top-0 h-full px-3 py-2 hover:bg-transparent`}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={field.onChange}
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </FormControl>
                <Label
                  htmlFor="remember"
                  className={`text-sm font-normal ${isArabic ? "mr-2" : "ml-2"}`}
                >
                  {isArabic ? "تذكرني" : "Remember me"}
                </Label>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading
              ? isArabic
                ? "جاري تسجيل الدخول..."
                : "Logging in..."
              : isArabic
                ? "تسجيل الدخول"
                : "Login"}
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm">
        <span className="text-muted-foreground">
          {isArabic ? "ليس لديك حساب؟ " : "Don't have an account? "}
        </span>
        <Button variant="link" className="p-0 h-auto" type="button">
          {isArabic ? "إنشاء حساب" : "Sign up"}
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
