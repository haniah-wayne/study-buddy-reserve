import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Calendar, Clock, LogOut, Search, Users } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Mock data - will be replaced with real data from backend
  const currentBookings = [
    {
      id: 1,
      roomName: "Study Room 1104",
      building: "Undergraduate Library",
      date: "September 16, 2025",
      time: "10:00am - 12:00pm",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary-foreground">My Dashboard</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/auth")}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Button
            onClick={() => navigate("/find-room")}
            className="h-24 text-lg justify-start px-6 shadow-medium"
          >
            <Search className="mr-3 h-6 w-6" />
            Find a Room
          </Button>
          <Button
            variant="outline"
            className="h-24 text-lg justify-start px-6 shadow-soft"
            disabled
          >
            <Users className="mr-3 h-6 w-6" />
            My Groups
          </Button>
          <Button
            variant="outline"
            className="h-24 text-lg justify-start px-6 shadow-soft"
            disabled
          >
            <Calendar className="mr-3 h-6 w-6" />
            Hosting
          </Button>
        </div>

        {/* Bookings */}
        <Tabs defaultValue="current" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-4">
            <h2 className="text-2xl font-semibold">My Bookings</h2>
            {currentBookings.length > 0 ? (
              currentBookings.map((booking) => (
                <Card key={booking.id} className="shadow-medium hover:shadow-large transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <span>{booking.roomName}</span>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      {booking.building}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {booking.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {booking.time}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button
                        onClick={() => navigate(`/booking/${booking.id}`)}
                        className="flex-1"
                      >
                        More Info
                      </Button>
                      <Button variant="destructive" className="flex-1">
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="shadow-soft">
                <CardContent className="py-12 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No current bookings</p>
                  <Button onClick={() => navigate("/find-room")} className="mt-4">
                    Find a Room
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <h2 className="text-2xl font-semibold">Previous Bookings</h2>
            <Card className="shadow-soft">
              <CardContent className="py-12 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">No previous bookings</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
