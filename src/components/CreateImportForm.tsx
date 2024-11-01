"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

interface CreateImportFormProps {
  onClose: () => void;
}

export default function CreateImportForm({ onClose }: CreateImportFormProps) {
  const [date, setDate] = useState<Date>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted");
    // Close the form after submission
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="cargoType">Cargo Type</Label>
          <Input
            id="cargoType"
            placeholder="e.g. Electronics"
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="value">Cargo Value</Label>
          <Input
            id="value"
            type="number"
            placeholder="e.g. 50000"
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="shipmentMethod">Shipment Method</Label>
          <Select>
            <SelectTrigger className="bg-gray-800 text-white border-gray-700">
              <SelectValue placeholder="Select shipment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sea">Sea Freight</SelectItem>
              <SelectItem value="air">Air Freight</SelectItem>
              <SelectItem value="land">Land Freight</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Estimated Arrival Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal bg-gray-800 text-white border-gray-700"
              >
                {date ? format(date, "PPP") : <span>Pick a date</span>}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-gray-800" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="portOfOrigin">Port of Origin</Label>
          <Input
            id="portOfOrigin"
            placeholder="e.g. Shanghai, China"
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Input
            id="destination"
            placeholder="e.g. Los Angeles, USA"
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="documents">Required Documents</Label>
        <Textarea
          id="documents"
          placeholder="List required documents, one per line"
          className="bg-gray-800 text-white border-gray-700"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="additionalInfo">Additional Information</Label>
        <Textarea
          id="additionalInfo"
          placeholder="Any additional details about the import"
          className="bg-gray-800 text-white border-gray-700"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="bg-transparent text-white border-white hover:bg-white hover:text-black"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Create Import
        </Button>
      </div>
    </form>
  );
}
