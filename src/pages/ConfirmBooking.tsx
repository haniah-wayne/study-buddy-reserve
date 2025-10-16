import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building, Calendar, ChevronLeft, Clock, MapPin, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ConfirmBooking = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const { toast } = useToast();
  const [bookingFor, setBookingFor] = useState("");
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  // Mock data - will be replaced with real data from backend
  const room = {
    id: roomId,
    name: "Study Room 1104",
    building: "Undergraduate Library",
    capacity: 4,
    timeSlot: "10:00am - 12:00pm",
    date: "September 16, 2025",
    duration: "2 hours",
  };

  const handleReserve = () => {
    if (!bookingFor) {
      toast({
        title: "Please select who you're booking for",
        variant: "destructive",
      });
      return;
    }
    setShowConfirmDialog(true);
  };

  const confirmReservation = () => {
    // TODO: Connect to backend
    toast({
      title: "Room reserved successfully!",
      description: `${room.name} has been added to your bookings`,
    });
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary shadow-soft sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/find-room")}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold text-primary-foreground">Confirm Booking</h1>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fade-in">
        {/* Room Details */}
        <Card className="shadow-large">
          <CardHeader>
            <CardTitle className="text-2xl">{room.name}</CardTitle>
            <CardDescription className="flex items-center gap-2 text-base">
              <Building className="h-5 w-5" />
              {room.building}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-accent rounded-lg">
                <Calendar className="h-5 w-5 text-accent-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">{room.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-accent rounded-lg">
                <Clock className="h-5 w-5 text-accent-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Time Slot</p>
                  <p className="font-medium">{room.timeSlot}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-accent rounded-lg">
                <Users className="h-5 w-5 text-accent-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Capacity</p>
                  <p className="font-medium">{room.capacity} people</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-accent rounded-lg">
                <MapPin className="h-5 w-5 text-accent-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{room.duration}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking Options */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Booking Details</CardTitle>
            <CardDescription>Select who you're booking for</CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={bookingFor} onValueChange={setBookingFor}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select booking type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Individual (Just Me)</SelectItem>
                <SelectItem value="group" disabled>
                  Group (Coming Soon)
                </SelectItem>
              </SelectContent>
            </Select>

            <div className="mt-6 p-4 bg-accent/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Maximum booking duration is 2 hours per day. Please arrive on
                time and notify us if you need to cancel.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Reserve Button */}
        <Button onClick={handleReserve} size="lg" className="w-full h-14 text-lg shadow-large">
          Reserve Room
        </Button>
      </main>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Your Reservation</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to reserve {room.name} for {room.timeSlot} on {room.date}?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmReservation}>Confirm Reservation</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ConfirmBooking;
