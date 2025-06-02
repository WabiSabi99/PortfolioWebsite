// Experience.tsx
// Shows a tabbed interface for Work, Education, and Courses timelines, using Timeline and Tabs components.

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import careerData from "@/data/career.json";
import educationData from "@/data/education.json";
import coursesData from "@/data/courses.json";
import { careerSchema, educationSchema, coursesSchema } from "@/lib/schemas";
import Timeline from "./Timeline";

export default function Experience() {
  const career = careerSchema.parse(careerData).career; // Parse work experience data
  const education = educationSchema.parse(educationData).education; // Parse education data
  const courses = coursesSchema.parse(coursesData).course; // Parse courses data

  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="title text-2xl sm:text-3xl">Experience</h2>
      </div>
      <Tabs defaultValue="work"> {/* Tabbed navigation */}
        <TabsList className="mb-3 grid w-full grid-cols-3">
          <TabsTrigger value="work">Work</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
        </TabsList>
        <TabsContent value="work" className="max-w-4xl mx-auto">
          <Timeline experience={career}></Timeline> {/* Work timeline */}
        </TabsContent>
        <TabsContent value="education" className="max-w-4xl mx-auto">
          <Timeline experience={education}></Timeline> {/* Education timeline */}
        </TabsContent>
        <TabsContent value="courses" className="max-w-4xl mx-auto">
          <Timeline experience={courses}></Timeline> {/* Courses timeline */}
        </TabsContent>
      </Tabs>
    </section>
  );
}