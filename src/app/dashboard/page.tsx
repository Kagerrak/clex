"use client";

import React, { useState } from "react";
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
import { Package, Calendar, DollarSign } from "lucide-react";
import CreateImportForm from "@/components/CreateImportForm";
import ImportDetailsDialog from "@/components/ImportDetailsDialog";
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
    brokerageFee: "$500",
    customDuty: "$2,500",
    tax: "$5,000",
    portOfOrigin: "Shanghai, China",
    destination: "Los Angeles, USA",
    shipmentMethod: "Sea Freight",
    documents: ["Commercial Invoice", "Bill of Lading", "Packing List"],
  },
  {
    id: 2,
    status: "Customs Clearance",
    cargoType: "Textiles",
    eta: "2024-10-23",
    value: "$30,000",
    brokerageFee: "$300",
    customDuty: "$1,500",
    tax: "$3,000",
    portOfOrigin: "Mumbai, India",
    destination: "New York, USA",
    shipmentMethod: "Air Freight",
    documents: ["Commercial Invoice", "Airway Bill", "Certificate of Origin"],
  },
  {
    id: 3,
    status: "Delivered",
    cargoType: "Machinery",
    eta: "2024-10-20",
    value: "$100,000",
    brokerageFee: "$1,000",
    customDuty: "$5,000",
    tax: "$10,000",
    portOfOrigin: "Hamburg, Germany",
    destination: "Chicago, USA",
    shipmentMethod: "Sea Freight",
    documents: ["Commercial Invoice", "Bill of Lading", "Import License"],
  },
  {
    id: 4,
    status: "Pending",
    cargoType: "Perishables",
    eta: "2024-10-28",
    value: "$25,000",
    brokerageFee: "$250",
    customDuty: "$1,250",
    tax: "$2,500",
    portOfOrigin: "Valparaiso, Chile",
    destination: "Miami, USA",
    shipmentMethod: "Air Freight",
    documents: [
      "Commercial Invoice",
      "Airway Bill",
      "Phytosanitary Certificate",
    ],
  },
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

type Import = {
  id: number;
  status: string;
  cargoType: string;
  eta: string;
  value: string;
  brokerageFee: string;
  customDuty: string;
  tax: string;
  portOfOrigin: string;
  destination: string;
  shipmentMethod: string;
  documents: string[];
};

const ImportsPageComponent = () => {
  const [isCreateImportOpen, setIsCreateImportOpen] = useState(false);
  const [selectedImport, setSelectedImport] = useState<Import | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-6">Imports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Dialog
              open={isCreateImportOpen}
              onOpenChange={setIsCreateImportOpen}
            >
              <DialogTrigger asChild>
                <Button className="h-40 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-black flex flex-col items-center justify-center">
                  <span className="text-3xl mb-2">+</span>
                  Create Import
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    Create New Import
                  </DialogTitle>
                </DialogHeader>
                <CreateImportForm
                  onClose={() => setIsCreateImportOpen(false)}
                />
              </DialogContent>
            </Dialog>
            {mockImports.map((importItem) => (
              <Card
                key={importItem.id}
                className="bg-gray-900 border-gray-700 text-white cursor-pointer hover:bg-gray-800 transition-colors"
                onClick={() => setSelectedImport(importItem)}
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Import {importItem.id}</span>
                    <Badge
                      className={`${getStatusColor(
                        importItem.status
                      )} text-white`}
                    >
                      {importItem.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Package className="mr-2 h-4 w-4" />
                      <span>{importItem.cargoType}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>ETA: {importItem.eta}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="mr-2 h-4 w-4" />
                      <span>Value: {importItem.value}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      {selectedImport && (
        <ImportDetailsDialog
          importItem={selectedImport}
          isOpen={!!selectedImport}
          onClose={() => setSelectedImport(null)}
        />
      )}
    </div>
  );
};

export default ImportsPageComponent;
