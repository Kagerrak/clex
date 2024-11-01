import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  Package,
  Calendar,
  DollarSign,
  Anchor,
  MapPin,
  FileText,
} from "lucide-react";

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

interface ImportItem {
  id: number;
  status: string;
  cargoType: string;
  value: string;
  shipmentMethod: string;
  brokerageFee: string;
  customDuty: string;
  tax: string;
  portOfOrigin: string;
  destination: string;
  eta: string;
  documents: string[];
}

interface ImportDetailsDialogProps {
  importItem: ImportItem;
  isOpen: boolean;
  onClose: () => void;
}

const ImportDetailsDialog: React.FC<ImportDetailsDialogProps> = ({
  importItem,
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center my-6">
            <DialogTitle className="text-2xl mb-2 sm:mb-0">
              Import {importItem.id} Details
            </DialogTitle>
            <Badge
              className={`${getStatusColor(
                importItem.status
              )} text-white mt-2 sm:mt-0`}
            >
              {importItem.status}
            </Badge>
          </div>
        </DialogHeader>
        <div className="grid gap-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Cargo Information</h3>
              <div className="space-y-3">
                <InfoItem
                  icon={Package}
                  label="Type"
                  value={importItem.cargoType}
                />
                <InfoItem
                  icon={DollarSign}
                  label="Value"
                  value={importItem.value}
                />
                <InfoItem
                  icon={Truck}
                  label="Method"
                  value={importItem.shipmentMethod}
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Fees and Duties</h3>
              <div className="space-y-3">
                <InfoItem
                  icon={DollarSign}
                  label="Brokerage Fee"
                  value={importItem.brokerageFee}
                />
                <InfoItem
                  icon={DollarSign}
                  label="Custom Duty"
                  value={importItem.customDuty}
                />
                <InfoItem
                  icon={DollarSign}
                  label="Tax"
                  value={importItem.tax}
                />
              </div>
            </div>
          </div>
          <hr className="border-gray-700" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>
              <div className="space-y-3">
                <InfoItem
                  icon={Anchor}
                  label="Origin"
                  value={importItem.portOfOrigin}
                />
                <InfoItem
                  icon={MapPin}
                  label="Destination"
                  value={importItem.destination}
                />
                <InfoItem icon={Calendar} label="ETA" value={importItem.eta} />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
              <div className="space-y-3">
                {importItem.documents.map((doc, index) => (
                  <InfoItem key={index} icon={FileText} value={doc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const InfoItem: React.FC<{
  icon: React.ElementType;
  label?: string;
  value: string;
}> = ({ icon: Icon, label, value }) => (
  <div className="flex items-center group hover:bg-gray-800 rounded transition-colors p-2">
    <Icon className="mr-3 h-5 w-5" />
    <span className="text-lg">
      {label && <span className="font-medium mr-2">{label}:</span>}
      {value}
    </span>
  </div>
);

export default ImportDetailsDialog;
