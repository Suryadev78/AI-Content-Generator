import { content } from "@/lib/content";

const TemplatePage = ({ params }: { params: { slug: string } }) => {
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
  return <div>Template Name: {selectedTemplate.name}</div>;
};

export default TemplatePage;
