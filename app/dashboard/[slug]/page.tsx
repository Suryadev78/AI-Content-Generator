"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { content } from "@/lib/content";
import { Loader } from "lucide-react";
import axios from "axios";
import { useState, FormEvent } from "react";
import Editor from "./_components/Editor";
import { chatSession } from "@/lib/gemini-ai";

const TemplatePage = ({ params }: { params: { slug: string } }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [AiOutput, setAiOutput] = useState("");

  if (!params.slug) {
    console.error("No slug provided");
    return <div>No template found.</div>;
  }

  const selectedTemplate = content.find((item) => item.slug === params.slug);

  if (!selectedTemplate) {
    console.error("Template not found for slug:", params.slug);
    return <div>Template not found.</div>;
  }

  async function generateAiContent(formData: FormData) {
    setIsLoading(true);

    try {
      const dataSet = {
        title: formData.get("title"),
        description: formData.get("description"),
      };

      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const Aiprompt = JSON.stringify(dataSet) + "," + SelectedPrompt;

      const result = await chatSession.sendMessage(Aiprompt);
      setAiOutput(result.response.text());
      const response = axios.post("/api/", {
        title: dataSet.title,
        description: result.response.text(),
        templateUsed: selectedTemplate?.name,
      });
    } catch (error) {
      console.error("Error generating AI content:", error);
      setAiOutput("An error occurred while generating content.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    generateAiContent(formData);
  }

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-slate-100 rounded">
        <h2>{selectedTemplate.name}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 bg-white p-5 mt-5">
          {selectedTemplate.form.map((item) => (
            <div key={item.name}>
              <label htmlFor={item.name}>{item.title}</label>
              {item.field === "input" ? (
                <div className="mt-2">
                  <Input
                    id={item.name}
                    name={item.name}
                    placeholder="Enter what you want to write here...."
                    className="mt-2"
                  />
                </div>
              ) : (
                <div>
                  <label htmlFor={item.name}>{item.label}</label>
                  <Textarea
                    id={item.name}
                    name={item.name}
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
      <Editor value={isLoading ? "Generating content..." : AiOutput} />
    </div>
  );
};

export default TemplatePage;
