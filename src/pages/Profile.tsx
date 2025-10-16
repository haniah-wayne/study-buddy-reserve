import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Mail, User, Users, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [groups, setGroups] = useState([
    { id: 1, name: "Study Group A", members: 3 },
    { id: 2, name: "CS Project Team", members: 5 },
  ]);
  const [newGroupName, setNewGroupName] = useState("");
  const [showCreateGroup, setShowCreateGroup] = useState(false);

  // Mock user data
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@wayne.edu",
  };

  const handleCreateGroup = () => {
    if (!newGroupName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a group name",
        variant: "destructive",
      });
      return;
    }

    const newGroup = {
      id: groups.length + 1,
      name: newGroupName,
      members: 1,
    };

    setGroups([...groups, newGroup]);
    setNewGroupName("");
    setShowCreateGroup(false);
    
    toast({
      title: "Success",
      description: "Group created successfully",
    });
  };

  const handleDeleteGroup = (groupId: number) => {
    setGroups(groups.filter((g) => g.id !== groupId));
    toast({
      title: "Success",
      description: "Group deleted",
    });
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
              onClick={() => navigate("/dashboard")}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold text-primary-foreground">Account Settings</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Account Information */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Account Information
            </CardTitle>
            <CardDescription>Your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={user.firstName}
                  readOnly
                  className="bg-muted"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={user.lastName}
                  readOnly
                  className="bg-muted"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  value={user.email}
                  readOnly
                  className="bg-muted flex-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* My Groups */}
        <Card className="shadow-medium">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  My Groups
                </CardTitle>
                <CardDescription>Manage your study groups</CardDescription>
              </div>
              <Button
                onClick={() => setShowCreateGroup(!showCreateGroup)}
                size="sm"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Group
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Create Group Form */}
            {showCreateGroup && (
              <Card className="bg-muted/50">
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="groupName">Group Name</Label>
                    <Input
                      id="groupName"
                      placeholder="Enter group name"
                      value={newGroupName}
                      onChange={(e) => setNewGroupName(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleCreateGroup} className="flex-1">
                      Create
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowCreateGroup(false);
                        setNewGroupName("");
                      }}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Groups List */}
            {groups.length > 0 ? (
              <div className="space-y-3">
                {groups.map((group) => (
                  <Card key={group.id} className="shadow-soft">
                    <CardContent className="py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{group.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {group.members} member{group.members !== 1 ? "s" : ""}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteGroup(group.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>No groups yet. Create your first group!</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Profile;
