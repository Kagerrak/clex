"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Users,
  Package,
  DollarSign,
  TrendingUp,
  Search,
  Edit,
  Trash2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock data for imports
const mockImports = [
  {
    id: 1,
    status: "In Transit",
    cargoType: "Electronics",
    eta: "2024-10-25",
    value: "$50,000",
  },
  {
    id: 2,
    status: "Customs Clearance",
    cargoType: "Textiles",
    eta: "2024-10-23",
    value: "$30,000",
  },
  {
    id: 3,
    status: "Delivered",
    cargoType: "Machinery",
    eta: "2024-10-20",
    value: "$100,000",
  },
  {
    id: 4,
    status: "Pending",
    cargoType: "Perishables",
    eta: "2024-10-28",
    value: "$25,000",
  },
];

// Mock data for users
const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Broker" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Client" },
];

// Helper function to get status color
const getStatusColor = (status: string) => {
  switch (status) {
    case "In Transit":
      return "bg-blue-500";
    case "Customs Clearance":
      return "bg-yellow-500";
    case "Delivered":
      return "bg-green-500";
    case "Pending":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
};

const AdminPageContent = () => {
  const [isClient, setIsClient] = useState(false);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredImports = mockImports.filter(
    (imp) =>
      imp.cargoType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      imp.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gray-900 border-gray-700 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Users
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockUsers.length}</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Imports
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockImports.length}</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Value
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$205,000</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Growth</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12.5%</div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl mb-4">Imports Overview</h2>
            <div className="flex justify-between items-center mb-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search imports..."
                  className="pl-8 bg-gray-800 text-white border-gray-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">ID</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Cargo Type</TableHead>
                  <TableHead className="text-white">ETA</TableHead>
                  <TableHead className="text-white">Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredImports.map((imp) => (
                  <TableRow key={imp.id}>
                    <TableCell className="font-medium">{imp.id}</TableCell>
                    <TableCell>
                      <Badge
                        className={`${getStatusColor(imp.status)} text-white`}
                      >
                        {imp.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{imp.cargoType}</TableCell>
                    <TableCell>{imp.eta}</TableCell>
                    <TableCell>{imp.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div>
            <h2 className="text-2xl mb-4">User Management</h2>
            <div className="flex justify-between items-center mb-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  className="pl-8 bg-gray-800 text-white border-gray-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-white text-black hover:bg-gray-200">
                    Add User
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-white border-gray-700">
                  <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter name"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter email"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="role">Role</Label>
                      <Input
                        id="role"
                        placeholder="Enter role"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-white text-black hover:bg-gray-200"
                    >
                      Add User
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">ID</TableHead>
                  <TableHead className="text-white">Name</TableHead>
                  <TableHead className="text-white">Email</TableHead>
                  <TableHead className="text-white">Role</TableHead>
                  <TableHead className="text-white">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit user</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete user</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Use dynamic import with ssr: false
const AdminPage = dynamic(() => Promise.resolve(AdminPageContent), {
  ssr: false,
});

export default AdminPage;
