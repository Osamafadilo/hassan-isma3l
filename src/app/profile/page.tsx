"use client";

import React from "react";
// import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Settings, ShoppingBag, Star, LogOut } from "lucide-react";

export default function ProfilePage() {
  // const { user, isAuthenticated, isLoading, logout } = useAuth();
  const isAuthenticated = false;
  const isLoading = false;
  const user = null;
  const logout = () => {};
  const router = useRouter();
  const isArabic = false;

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </main>
    );
  }

  if (!isAuthenticated || !user) {
    return null; // Will redirect due to the useEffect
  }

  return (
    <main className="min-h-screen bg-background">
      <Header isArabic={isArabic} />

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-24 w-24">
                    {user.avatar ? (
                      <AvatarImage src={user.avatar} alt={user.name} />
                    ) : (
                      <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                        {user.initials ||
                          user.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                    <div className="mt-2 inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {user.userType === "provider"
                        ? "Service Provider"
                        : "Customer"}
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <div>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </div>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <div>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </div>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <div>
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Orders
                    </div>
                  </Button>
                  {user.userType === "provider" && (
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      asChild
                    >
                      <div>
                        <Star className="mr-2 h-4 w-4" />
                        My Services
                      </div>
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={logout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <Tabs defaultValue="profile">
              <TabsList className="mb-6">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                {user.userType === "provider" && (
                  <TabsTrigger value="services">My Services</TabsTrigger>
                )}
                <TabsTrigger value="orders">Orders</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">
                          Full Name
                        </h4>
                        <p className="text-lg">{user.name}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">
                          Email
                        </h4>
                        <p className="text-lg">{user.email}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">
                          Account Type
                        </h4>
                        <p className="text-lg capitalize">{user.userType}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">
                          Member Since
                        </h4>
                        <p className="text-lg">
                          {new Date().toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-medium mb-4">About Me</h3>
                      <p className="text-muted-foreground">
                        No information provided yet. Click edit to add your bio.
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <Button>Edit Profile</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Manage your account settings and preferences
                    </p>

                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b">
                        <div>
                          <h4 className="font-medium">Password</h4>
                          <p className="text-sm text-muted-foreground">
                            Update your password
                          </p>
                        </div>
                        <Button variant="outline">Change Password</Button>
                      </div>

                      <div className="flex justify-between items-center pb-4 border-b">
                        <div>
                          <h4 className="font-medium">Notifications</h4>
                          <p className="text-sm text-muted-foreground">
                            Manage your notification preferences
                          </p>
                        </div>
                        <Button variant="outline">Configure</Button>
                      </div>

                      <div className="flex justify-between items-center pb-4 border-b">
                        <div>
                          <h4 className="font-medium">Language</h4>
                          <p className="text-sm text-muted-foreground">
                            Change your language preferences
                          </p>
                        </div>
                        <Button variant="outline">Select Language</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-12">
                      You don't have any orders yet.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {user.userType === "provider" && (
                <TabsContent value="services">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-6">
                        <p className="text-muted-foreground">
                          Manage your service listings
                        </p>
                        <Button>Add New Service</Button>
                      </div>
                      <p className="text-center text-muted-foreground py-12">
                        You haven't added any services yet.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </div>
      </div>

      <Footer isArabic={isArabic} />
    </main>
  );
}
