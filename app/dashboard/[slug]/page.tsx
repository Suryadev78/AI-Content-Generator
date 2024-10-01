"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { content } from "@/lib/content";
import { Loader } from "lucide-react";
import { useState } from "react";

const TemplatePage = ({ params }: { params: { slug: string } }) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log("params ye rhe", params);
  if (!params.slug) {
    console.error("No slug provided");
    return <div>No template found.</div>;
  }

  const selectedTemplate = content.find((item) => item.slug === params.slug);

  // Check if the selected template is found
  if (!selectedTemplate) {
    console.error("Template not found for slug:", params.slug);
    return <div>Template not found.</div>;
  }
  console.log("selectedTemplate", selectedTemplate);
  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <h2>{selectedTemplate.name}</h2>
      </div>
      <form>
        <div className="flex flex-col gap-3 bg-white p-5 mt-5">
          {selectedTemplate.form.map((item) => (
            <div key={item.name}>
              <label>{item.title}</label>
              {item.field === "input" ? (
                <div className="mt-2">
                  <Input
                    placeholder="Enter what you want to write here...."
                    className="mt-2"
                  />
                </div>
              ) : (
                <div>
                  <label>{item.label}</label>
                  <Textarea
                    placeholder="Enter your description here...."
                    className="mt-2"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <Button className="mt-3" type="submit">
          {isLoading ? <Loader className="animate-spin" /> : "Generate Content"}
        </Button>
      </form>
    </div>
  );
};

export default TemplatePage;
